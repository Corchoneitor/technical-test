import moment from 'moment-timezone';
import { Enums } from './Enums';
import Reservation from '../model/Reservation';

export function addTime(
	dateMillis: any,
	addTime: any,
	// Prevent moment deprecated error.
	timeType: moment.unitOfTime.DurationConstructor = 'minute'
): any {
	// Prevent moment error when adding time less than 1.
	if (Math.abs(addTime) < 1) {
		addTime = Math.sign(addTime) === 1 ? Math.ceil(addTime) : Math.floor(addTime);
	}

	return parseInt(moment.utc(dateMillis, Enums.UNIX_FORMAT).add(addTime, timeType).format(Enums.UNIX_FORMAT));
}

export function dateToMillis(value: Date): number {
	return parseInt(moment.utc(value).format(Enums.UNIX_FORMAT));
}

export function toUTC(localValue: any, toTimezone: string, format: string = Enums.DISPLAY_DATE_FORMAT): Date {
	return moment.tz(localValue, format, toTimezone).utc().toDate();
}

export function getLocalTimezoneFromReservation(reservation: Reservation): string {
	// Assume logic.

	return 'America/Los_Angeles';
}
