import NamePrayer from "./NamePrayer";
import TimeNextPrayer from "./TimeNextPrayer";
import moment from 'moment';

export default function TimeRemainingForNextPrayer(nextPrayer, timings, timeNow, setTimeRemainingNextPrayer) {
    const timeNextPrayer = TimeNextPrayer(NamePrayer(nextPrayer), timings)
    // console.log(TimeNextPrayer(NamePrayer(nextPrayer), timings))
    // console.log(timeNow)
    setTimeRemainingNextPrayer('20:20:20')
}
