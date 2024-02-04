import { Request, Response } from 'express';
import { generateRandomLocation } from '../utilities/geoUtils';

export const getRandomLocation = (req: Request, res: Response) => {
    try {
			console.log(req.body)
			const { latitude, longitude } = req.body;
			if (!req.body || !latitude || !longitude) return res.status(400).json({ message: "no position provided" })
			const randomLocation = generateRandomLocation(req.body)
			return res.status(200).json(randomLocation)
    } catch (error:any) {
			console.error("error at generating random position, ERR: ", error.message)
			return res.status(500).json({ message: "Internal server error" })
    }
}