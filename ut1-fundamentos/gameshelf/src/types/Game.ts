export type Game = {
    id: number;
    name: string;
    genre?: string;
    releaseDates?: {
        Europe?: string;
        Japan?: string;
        NorthAmerica?: string;
        Australia?: string;
    }
}