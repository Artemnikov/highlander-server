export const generateRandomLocation = (position: any) => {
	const { latitude, longitude, radiusInKm } = position
	const earthRadiusInKm = 6371;
  
	// Convert latitude and longitude from degrees to radians
	var lat = latitude * Math.PI / 180;
	var lon = longitude * Math.PI / 180;

	// Random distance in km
	var randomDistance = Math.sqrt(Math.random()) * radiusInKm;

	// Random angle in radians
	var randomAngle = Math.random() * 2 * Math.PI;

	// Calculate the new latitude and longitude
	var newLat = Math.asin(
		Math.sin(lat) * Math.cos(randomDistance / earthRadiusInKm) + Math.cos(lat)
			* Math.sin(randomDistance / earthRadiusInKm)
			* Math.cos(randomAngle)
	);

	var newLon = lon + Math.atan2(Math.sin(randomAngle)
		* Math.sin(randomDistance / earthRadiusInKm) * Math.cos(lat),
		Math.cos(randomDistance / earthRadiusInKm) - Math.sin(lat) * Math.sin(newLat));

	// Convert the latitude and longitude from radians to degrees
	newLat = newLat * 180 / Math.PI;
	newLon = newLon * 180 / Math.PI;

	return { latitude: newLat, longitude: newLon };
}