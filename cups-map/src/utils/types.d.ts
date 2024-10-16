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

  interface TranslationsType {
    [key: string]: {
      [subKey: string]: string;
    };
  }
  

  // interface TranslationsType {
  //   [key: string]: {
  //     welcome: string;
  //     contact: string;
  //     home: string;
  //     about: string;
  //     selectPin: string;
  //     clickToView: string;
  //     projectName: string;
  //     allRightsReserved: string;
  //     map: string;
  //     photos: string;
  //   };
  // }