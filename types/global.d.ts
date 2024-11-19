export {};

declare global {
  interface ITour {
    key: string;
    to: string;
    images: string[];
    totalActivities: number;
    totalAttractions: number;
    totalIncludes: number;
    totalRecommendations: number;
    totalSchedule: number;
  }
}
