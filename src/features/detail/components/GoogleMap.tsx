"use client"

import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps"

export default function GoogleMap() {
  const position = { lat: 31.5204, lng: 74.3587 }

  return (
    <div className="h-[400px] w-full rounded-xl overflow-hidden">
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
        <Map
          defaultCenter={position}
          defaultZoom={12}
          gestureHandling="greedy"
          disableDefaultUI={false}
        >
          <Marker position={position} />
        </Map>
      </APIProvider>
    </div>
  )
}