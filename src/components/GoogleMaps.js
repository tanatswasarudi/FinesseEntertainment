import React, { useEffect, useState } from 'react';

const GoogleMaps = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    // Load the Google Maps API
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBkDbPPytSeqeLcPDEfe-sAs_LkmfA9K70`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      // Create a new map instance
      const mapInstance = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: -17.8252, lng: 31.0335 }, // Coordinates for Harare
         zoom: 10,
      });

      setMap(mapInstance);
      
    };

    return () => {
      // Clean up the map instance
      if (map) {
        mapInstance.setMap(null);
      }
      document.head.removeChild(script);
    };
  }, []);

  return <div id="map" style={{ width: '100%', height: '400px' }} />;
};

export default GoogleMaps;
