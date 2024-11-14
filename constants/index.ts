export const LANGS = {
  en: "en",
  es: "es",
};

export const CREATOR = "Ever Vega Suazo";

export const CONTACT_INFO = {
  phone: "+(506) 6194 0884",
  email: "libreriaexpeditions@gmail.com",
};

export const MENU = [
  { titleKey: "Menu.Home", section: "/" },
  { titleKey: "Menu.Tours", section: "/#tours" },
  { titleKey: "Menu.Transport", section: "/#contact-us" },
  { titleKey: "Menu.About", section: "/#home" },
  { titleKey: "Menu.Contact", section: "/#contact-us" },
];

export const TOURS: ITour[] = [
  {
    key: "TourBuenaVistaRincon",
    to: "/tours/tour-buena-vista-del-rincon",
    totalActivities: 6,
    totalSchedule: 2,
    totalAttractions: 3,
    totalIncludes: 3,
    totalRecomendations: 1,
    images: [
      "/assets/tours/tour-buena-vista-del-rincon/canopy-congo.jpg",
      "/assets/tours/tour-buena-vista-del-rincon/volcan-arenal.jpeg",
      "/assets/tours/tour-buena-vista-del-rincon/rafting.jpg",
    ],
  },
  {
    key: "TourHornillas",
    to: "/tours/tour-hornillas",
    totalActivities: 1,
    totalSchedule: 1,
    totalAttractions: 1,
    totalIncludes: 1,
    totalRecomendations: 1,
    images: ["/assets/tours/tour-hornillas/image-1.png"],
  },
  {
    key: "TourPaloVerde",
    to: "/tours/tour-palo-verde",
    totalActivities: 1,
    totalSchedule: 1,
    totalAttractions: 1,
    totalIncludes: 1,
    totalRecomendations: 1,
    images: ["/assets/tours/tour-palo-verde/image-1.png"],
  },
  {
    key: "TourRainForest",
    to: "/tours/tour-rain-forest",
    totalActivities: 1,
    totalSchedule: 1,
    totalAttractions: 1,
    totalIncludes: 1,
    totalRecomendations: 1,
    images: ["/assets/tours/tour-rain-forest/image-1.png"],
  },
  {
    key: "TourSunsetCruiseAndSnorckling",
    to: "/tours/tour-sunset-cruise-and-snorckling",
    totalActivities: 1,
    totalSchedule: 1,
    totalAttractions: 1,
    totalIncludes: 1,
    totalRecomendations: 1,
    images: ["/assets/tours/tour-sunset-cruise-and-snorckling/image-1.png"],
  },
  {
    key: "TourWildlifeTuncale",
    to: "/tours/tour-wildlife-tuncale",
    totalActivities: 1,
    totalSchedule: 1,
    totalAttractions: 1,
    totalIncludes: 1,
    totalRecomendations: 1,
    images: ["/assets/tours/tour-wildlife-tuncale/image-1.png"],
  },
];
