import InnerUser from './InnerUser';

export default interface InnerVehicle {
	id?: number;
	refId?: string;
	description: string;
	maxCapacity: string;
	driver?: InnerUser | null;
	fleetId: string;
}
