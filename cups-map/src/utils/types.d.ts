export interface CupType {
    id: number;
    fileName: string;
    fileSize: string;
    imageWidth: number;
    imageHeight: number;
    dateTaken: string;
    imageUrl: string;
    gps: Gps;
  }
  export interface Gps {
    latitude: number;
    longitude: number;
    altitude: string;
    direction: number;
    positioningError: string;
  }
  