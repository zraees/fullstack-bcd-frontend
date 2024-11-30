// locationService.ts

export const getUserLocationAndCalculateDistance = (
    targetLat: number,
    targetLon: number
  ): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject("Geolocation is not supported by this browser.");
        return;
      }
  
      const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
        const R = 6371; // Radius of the Earth in kilometers
        const toRadians = (degree: number) => (degree * Math.PI) / 180;
  
        const dLat = toRadians(lat2 - lat1);
        const dLon = toRadians(lon2 - lon1);
  
        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(toRadians(lat1)) *
            Math.cos(toRadians(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return `${(R * c).toFixed(2)} km`; //R * c; // Distance in km
      };
  
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude: currentLat, longitude: currentLon } = position.coords;
          const distance = calculateDistance(currentLat, currentLon, targetLat, targetLon);
          resolve(distance);
        },
        (error) => {
          reject(`Geolocation error: ${error.message}`);
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    });
  };
  