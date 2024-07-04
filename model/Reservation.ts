import { DispatchLevel } from '../helpers/Enums';
import InnerStatus from './inner/InnerStatus';
import InnerTrip from './inner/InnerTrip';

export default interface Reservation {
	id?: number;
	refId?: string;
	customer: string;
	pickupDate: number;
	scheduledDepartureDate: number;
	pickupLocation: string;
	dropoffLocation: string;
	flightNumber: string;
	passengers: number;
	depot: {
		id?: number;
		refId?: string;
		name: string;
		address: string;
		color: string;
	};
	status?: InnerStatus;
	dateOfTrip: number;
	tripsStatuses: Array<string>;
	tripsDrivers: Array<number | null>;
	trips: Array<InnerTrip>;
	workdayIds: Array<number>;
	owner?: {
		uid: string;
		name: string;
		email: string;
	} | null;
	dispatchLevel: DispatchLevel;
}
