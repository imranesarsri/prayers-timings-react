export default function NamePrayer(number) {
    if (number == 1) {
        return 'Fajr'
    } else if (number == 2) {
        return 'Dhuhr'
    } else if (number == 3) {
        return 'Asr'
    } else if (number == 4) {
        return 'Maghrib'
    } else {
        return 'Isha'
    }
}
