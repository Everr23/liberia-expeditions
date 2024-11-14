export {};

declare global {
  interface ITour {
    key: string;
    to: string;
    totalActivities: number;
    totalSchedule: number;
    totalAttractions: number;
    totalIncludes: number;
    totalRecomendations: number;
    images: string[];
  }
}
