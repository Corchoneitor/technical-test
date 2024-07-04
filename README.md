# Technical Test

<details>
	<summary>Requirement 1</summary>
Given a vehicle's arrival time and a reservation's scheduled pickup time, create a method called "getArriveTimeType" that returns if vehicle arrives on time, late or very late.

### Requirements:

1. All dates must be treated in UTC and milliseconds.
2. If the vehicle arrives 10 minutes or more after the scheduled time, then it's considered very late.
3. If the vehicle arrives 5 minutes or more before the scheduled time, then it's considered on time.
4. If the vehicle arrives less than 5 minutes before or up to 10 minutes after the scheduled time, then it's considered late.

</details>
<details>
	<summary>Requirement 2</summary>
Given a driver and reservation, create a method called "canArriveAtTime" that checks if a driver can arrive to new reservation keeping in mind driver's existing workday.

### Concepts:

-   A "workday" (conceptually) is a driver's entire day of work, made by the combination of date (only) and driver. Technically is an array of reservations.

### Notes:

-   Use driver and reservation as Samples.ts.
-   Assume database returns workday as in Samples.ts.

</details>
<details>
	<summary>Requirement 3</summary>
If new reservation falls first in the workday, method should always return driver arrives on time.

</details>
<details>
	<summary>Requirement 4</summary>
If new reservation is not first nor last of the workday, method should return if driver arrives on time to new reservation and also if arrives on time to next reservation in workday.

</details>
<details>
	<summary>Requirement 5</summary>
When calculating if driver arrives on time to next reservation in workday, previous reservation (if exists) and new reservation should be taken into account.

</details>
<details>
	<summary>Requirement 6</summary>
Given resulting classes and methods, comment any code refactoring (if applicable). Take into account unit testing.

</details>
