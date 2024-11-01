import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

const MapboxExample = ({ lng, setLng, lat, setLat, setFullAddress, isVisible }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = useRef(null);
  const [zoom, setZoom] = useState(12);

  useEffect(() => {
    if (map.current) return; // Initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
    });

    // Create the initial marker at the provided lng and lat
    marker.current = new mapboxgl.Marker()
      .setLngLat([lng, lat])
      .addTo(map.current);

    // Add the Geocoder (search box) restricted to Sri Lanka
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      marker: false, // Disable the default marker
      countries: 'LK', // Restrict results to Sri Lanka
      placeholder: 'Search for places in Sri Lanka', // Placeholder text
    });

    // Add geocoder to the map
    map.current.addControl(geocoder);

    // Handle geocoder result
    geocoder.on('result', (e) => {
      const { center, place_name } = e.result;
      const [newLng, newLat] = center;
      setLng(newLng);
      setLat(newLat);
      setFullAddress(place_name);

      // Move the marker to the selected location
      marker.current.setLngLat([newLng, newLat]);

      // Center the map to the selected location
      map.current.flyTo({ center: [newLng, newLat], zoom: zoom });
    });

    // Add click event to the map to get coordinates and address
    map.current.on('click', async (e) => {
      const { lng, lat } = e.lngLat;
      setLng(lng);
      setLat(lat);

      // Use Mapbox Geocoding API to get the address
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${mapboxgl.accessToken}&country=LK`
      );
      const data = await response.json();
      const address = data.features[0]?.place_name || 'Address not found';
      setFullAddress(address);

      // Move the marker to the clicked location
      marker.current.setLngLat([lng, lat]);

      // Optionally center the map on the clicked location
      // map.current.flyTo({ center: [lng, lat], zoom: zoom });
    });
  }, [lng, lat, zoom]);

  useEffect(() => {
    if (map.current && isVisible) {
      setTimeout(() => {
        map.current.resize();
      }, 5); // Delay to ensure the container is fully rendered
    }
  }, [isVisible]);

  return <div ref={mapContainer} style={{ height: '400px' }} />;
};

export default MapboxExample;
