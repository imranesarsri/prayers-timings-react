import moment from 'moment';

export default function TimeRemainingNextPrayer(timeNow, nextPrayer, setTimeRemainingNextPrayer, getCurrentPeriod) {
    // Convert the times to moment objects
    const now = moment(timeNow, 'HH:mm:ss');
    const next = moment(nextPrayer, 'HH:mm:ss');

    let differenceInMilliseconds;
    // Calculate the difference in milliseconds
    if (getCurrentPeriod == "MP") {
        console.log("PM")
        differenceInMilliseconds = next.diff(now);
    } else {
        console.log('AM')
        differenceInMilliseconds = next.diff(now);
    }


    // Convert the difference to a duration object
    const duration = moment.duration(differenceInMilliseconds);

    const formattedTime = moment.utc(duration.asMilliseconds()).format('HH:mm:ss');

    // Format the duration as HH:mm:ss

    // Update the state with the formatted time
    setTimeRemainingNextPrayer(formattedTime);
}
