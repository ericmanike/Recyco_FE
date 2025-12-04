// src/styles/mapStyle.ts

export const greenMapStyle: google.maps.MapTypeStyle[] = [
  {
    elementType: "geometry",
    stylers: [{ color: "#e5f5e0" }],
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#33691e" }],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#f7fef7" }],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#c8e6c9" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#a5d6a7" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "blue" }],
  },
];
