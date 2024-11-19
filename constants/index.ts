export enum ELangs {
  en = "en",
  es = "es",
}

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
    totalRecommendations: 1,
    images: [
      "/assets/tours/tour-buena-vista-del-rincon/horseback-riding-beach-tour.jpg",
      "/assets/tours/tour-buena-vista-del-rincon/canopy.jpg",
      "/assets/logos/liberia-expeditions.png",
    ],
  },
  {
    key: "TourHornillas",
    to: "/tours/tour-hornillas",
    totalActivities: 6,
    totalAttractions: 6,
    totalIncludes: 7,
    totalRecommendations: 5,
    totalSchedule: 1,
    images: [
      "/assets/tours/tour-hornillas/volcanic-mud-bath.jpg",
      "/assets/logos/liberia-expeditions.png",
    ],
  },
  {
    key: "TourPaloVerde",
    to: "/tours/tour-palo-verde",
    totalActivities: 5,
    totalAttractions: 4,
    totalIncludes: 5,
    totalRecommendations: 5,
    totalSchedule: 2,
    images: [
      "/assets/tours/tour-palo-verde/boat-tour.webp",
      "/assets/logos/liberia-expeditions.png",
    ],
  },
  {
    key: "TourRainForest",
    to: "/tours/tour-rain-forest",
    totalActivities: 5,
    totalAttractions: 4,
    totalIncludes: 4,
    totalRecommendations: 4,
    totalSchedule: 1,
    images: [
      "/assets/tours/tour-rain-forest/rainforest.jpg",
      "/assets/logos/liberia-expeditions.png",
    ],
  },
  {
    key: "TourSunsetCruiseAndSnorckling",
    to: "/tours/tour-sunset-cruise-and-snorckling",
    totalActivities: 4,
    totalAttractions: 4,
    totalIncludes: 5,
    totalRecommendations: 5,
    totalSchedule: 1,
    images: [
      "/assets/tours/tour-sunset-cruise-and-snorckling/papagayo-tour.webp",
      "/assets/logos/liberia-expeditions.png",
    ],
  },
  {
    key: "TourWildlifeTuncale",
    to: "/tours/tour-wildlife-tuncale",
    totalActivities: 4,
    totalSchedule: 4,
    totalAttractions: 6,
    totalIncludes: 5,
    totalRecommendations: 1,
    images: [
      "/assets/tours/tour-wildlife-tuncale/sloth.webp",
      "/assets/logos/liberia-expeditions.png",
    ],
  },
];
