import siteData from 'siteData';

export default function getLocalizedDate(date) {
  return new Date(date).toLocaleDateString(siteData.locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
