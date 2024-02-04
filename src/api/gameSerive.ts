import axiosInstance from "./axiosInstance";

export const getGoalCoordinates = async (userLocation: { latitude: number; longitude: number; }) => {
    try {
        const response = await axiosInstance.post("/goal/generate", { ...userLocation });
        if (!response) return null;
        console.log(response)
        return response.data
    } catch (error) {
        console.error("failed to fetch new goal position, ERR: ", error)
    }
}
