export default function NamePrayer(number) {
    if (number == 0) {
        return 'Fajr'
    } else if (number == 1) {
        return 'Dhuhr'
    } else if (number == 2) {
        return 'Asr'
    } else if (number == 3) {
        return 'Maghrib'
    } else {
        return 'Isha'
    }
}
