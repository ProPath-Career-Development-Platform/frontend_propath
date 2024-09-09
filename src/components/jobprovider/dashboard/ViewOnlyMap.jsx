import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

const ViewOnlyMap = ({ lng, lat }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // Initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat], // Center the map to the given coordinates
      zoom: 14, // Default zoom level
      interactive: false // Disable all interactions
    });

    // Add a marker at the given location
    new mapboxgl.Marker()
      .setLngLat([lng, lat])
      .addTo(map.current);
  }, [lng, lat]); // Update the map when lng or lat change

  return (
    <div ref={mapContainer} style={{ height: '400px', width: '100%' }} />
  );
};

export default ViewOnlyMap;
