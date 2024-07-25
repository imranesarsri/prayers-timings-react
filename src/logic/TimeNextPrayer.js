import moment from 'moment';

export default function TimeNextPrayer(timeNow, nextPrayer, setTimeRemainingNextPrayer) {
    // Convert the times to moment objects
    const now = moment(timeNow, 'HH:mm:ss');
    const next = moment(nextPrayer, 'HH:mm:ss');

    // Calculate the difference in milliseconds
    const differenceInMilliseconds = next.diff(now);

    // Convert the difference to a duration object
    const duration = moment.duration(differenceInMilliseconds);

    // Format the duration as HH:mm:ss
    const formattedTime = moment.utc(duration.asMilliseconds()).format('HH:mm:ss');

    // Update the state with the formatted time
    setTimeRemainingNextPrayer(formattedTime);
}
