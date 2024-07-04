import { addTime } from '../helpers/Utils';

export class GeoService {
	constructor() {}

	public getTripDuration(
		pickupLocation: any,
		dropoffLocation: any,
		departureTimeMS: any,
		localTimezone: string
	): Promise<{ arrivalTime: Date; departureTime: Date; durationInSeconds: number; durationInMilliseconds: number }> {
		return new Promise(async (resolve, reject) => {
			try {
				// Assume calling geo provider.
				const response = {
					arrivalTime: new Date(), // localized
					departureTime: new Date(), // localized
					durationInSeconds: 600,
					durationInMilliseconds: 600000,
				};

				resolve(response);
			} catch (error) {
				reject(error);
			}
		});
	}

	public getTripTimes(
		startLocation: any,
		endLocation: any,
		departureTimeAtStartMS: number,
		localTimezone: string,
		getTimesToStart: boolean = false
	): Promise<{
		departureTimeAtStartMS: number;
		departureTimeToArriveToStartMS: number;
		arrivalTimeAtEndMS: number;
		tripDuration: any;
	}> {
		return new Promise(async (resolve, reject) => {
			try {
				let tripDuration = await this.getTripDuration(
					startLocation,
					endLocation,
					departureTimeAtStartMS,
					localTimezone
				);

				let arrivalTimeAtEndMS;
				let departureTimeToArriveToStartMS;
				if (getTimesToStart) {
					departureTimeToArriveToStartMS = addTime(departureTimeAtStartMS, -(tripDuration.durationInSeconds / 60));
				} else {
					arrivalTimeAtEndMS = addTime(departureTimeAtStartMS, tripDuration.durationInSeconds / 60);
				}

				resolve({ departureTimeAtStartMS, departureTimeToArriveToStartMS, arrivalTimeAtEndMS, tripDuration });
			} catch (error) {
				reject(error);
			}
		});
	}
}
