import { useEffect, useState } from "react";
import MapComponent from "../map/Map"
import { getGoalCoordinates } from "../../api/gameSerive";

const MainGameBoard = () => {
	const [center, setCenter] = useState<[number, number]>([0, 0]);
  const [goalPosition, setGoalPosition] = useState<[number, number]>([0, 0])
  const [isLoading, setIsLoading] = useState(false);

  const loadGoalPosition = async (currentLocation: any) => {
    const newLocation = await getGoalCoordinates(currentLocation)
    // set the new goal position
  }

  const loadPositions = async () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const newCenter = {latitude: position.coords.latitude, longitude: position.coords.longitude}
        // not 100% with typescript. Need fixing
        setCenter([position.coords.latitude, position.coords.longitude]);
        loadGoalPosition(newCenter)

      },
      error => console.error("Error getting current location", error)
    );
  }
	useEffect(() => {
    setIsLoading(true);
    loadPositions();
    setIsLoading(false);
  }, []);

  return (
		<>
			<MapComponent center={center} />
		</>
  )
}

export default MainGameBoard