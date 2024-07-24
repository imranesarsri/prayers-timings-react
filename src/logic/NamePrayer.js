export default function NamePrayer(number) {
    const prayers = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
    return prayers[number - 1] || 'Invalid prayer number';
}