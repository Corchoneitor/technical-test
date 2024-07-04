import InnerStatus from './InnerStatus';
import InnerVehicle from './InnerVehicle';
import InnerUser from './InnerUser';

export default interface InnerTrip {
	driver: InnerUser | null;
	vehicle: InnerVehicle | null;
	status: InnerStatus | null;
	dispatchNote: string;
	workdayId?: number;
	order?: number;
	pickupETA?: number;
	dropoffETA?: number;
	tripDuration?: number;
}
