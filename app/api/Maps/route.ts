
import { NextResponse } from 'next/server';
    export async function GET(req: Request) {
    
        const { searchParams } = new URL(req.url);
      const lat = searchParams.get('lat');
      const lng = searchParams.get('lng');
8
        const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_URL;
        const type = 'point_of_interest';
        const radius = 10000;
        const keyword = 'Waste collection points';

        if (!lat || !lng) {
          alert("Missing lat or lng parameter");
          return NextResponse.json({ error: 'Missing lat or lng parameter' }, { status: 400 });
        }
        
        const googleMapsUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&key=${key}&type=${type}&radius=${radius}&keyword=${keyword}`;
       try{
        const res =  await fetch(googleMapsUrl);
       const data = await res.json();

       if (!res.ok) {
        return NextResponse.json({ error: 'Failed to fetch data from Google Maps API' },
           { status: res.status });
       }
    
      
       return NextResponse.json(
        { data: data.results || [],
          status:data.status
        }

       )}catch(error){
        console.error("Error fetching data from Google Maps API:", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
       }
    }



    