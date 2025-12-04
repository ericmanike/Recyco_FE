"use client";
import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface Place {
  properties: {
    name: string;
    lat: number;
    lon: number;
    address_line1?: string;
    city?: string;
  };
}

export default function RecyclingMap() {
  const [userLocation, setUserLocation] = useState<{ lat: number; lon: number } | null>(null);
  const [map, setMap] = useState<L.Map | null>(null);

  // Custom icon for recycling centers
  const recyclingIcon = L.icon({
    iconUrl: "/marker.svg", // make sure you have this image in /public
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });

  // Get user's location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    } else {
      alert("Geolocation is not supported by your browser");
    }
  }, []);

  // Initialize map once userLocation is available
  useEffect(() => {
    if (!userLocation || map) return;

    const mapInstance = L.map("map").setView([userLocation.lat, userLocation.lon], 13);

    L.tileLayer(
      `https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY_KEY}`,
      {
        attribution: 'Powered by <a href="https://www.geoapify.com/">Geoapify</a>',
      }
    ).addTo(mapInstance);

    // Add a marker for the user
    L.marker([userLocation.lat, userLocation.lon])
      .addTo(mapInstance)
      .bindPopup("You are here")
      .openPopup();
      
    setMap(mapInstance);
  }, [userLocation, map]);

  // Fetch recycling places and add markers with custom icon
  useEffect(() => {
    if (!userLocation || !map) return;

    const fetchPlaces = async () => {
      const apiKey = process.env.NEXT_PUBLIC_GEOAPIFY_KEY;
      const url = `https://api.geoapify.com/v2/places?categories=service.recycling&filter=circle:${userLocation.lon},${userLocation.lat},5000&limit=20&apiKey=${apiKey}`;

      try {
        const res = await fetch(url);
        const data = await res.json();
        const features: Place[] = data.features;

        features.forEach((place) => {
          const { lat, lon, name, address_line1, city } = place.properties;

          L.marker([lat, lon], { icon: recyclingIcon })
            .addTo(map)
            .bindPopup(
              `<b>${name || "Recycling Center"}</b><br/>${address_line1 || ""} ${city || ""}`
            );
        });
      } catch (err) {
        console.error("Error fetching places:", err);
      }
    };

    fetchPlaces();
  }, [userLocation, map]);

  return <div id="map" style={{ height: '200px', width: "100%" }} />;
}
