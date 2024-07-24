import {
    imageFajr,
    imageDhhr,
    imageAsr,
    imageIsha,
    imageSunset,
    imageSunrise,
    imageMaghrib,
    imageImsak,
    imageMidnight,
    imageFirstthird,
    imageLastthird,
    logo
} from '../../public';

const PrayerImages = {
    fajr: imageFajr,
    sunrise: imageSunrise,
    dhhr: imageDhhr,
    asr: imageAsr,
    isha: imageIsha,
    maghrib: imageMaghrib,
    sunset: imageSunset,
    imsak: imageImsak,
    midnight: imageMidnight,
    firstthird: imageFirstthird,
    lastthird: imageLastthird,
    default: logo
};

const getPrayerImage = (name) => {
    const prayerName = name.toLowerCase(); // Convert to lowercase
    return PrayerImages[prayerName] || PrayerImages.default;
};

export { PrayerImages, getPrayerImage };
export default PrayerImages;
