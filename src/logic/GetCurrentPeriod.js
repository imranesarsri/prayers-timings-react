import moment from 'moment';

export default function GetCurrentPeriod(setGetCurrentPeriod) {
    setGetCurrentPeriod(moment().format('A'));
}
