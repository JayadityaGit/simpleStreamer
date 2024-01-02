interface Caption {
    id: string;
    language: string;
    hasCorsRestrictions: boolean;
    type: string;
    url: string;
  }
  
  interface Qualities {
    360: { type: string; url: string };
    720: { type: string; url: string };
    1080: { type: string; url: string };
    '4k': { type: string; url: string };
  }
  
  interface Stream {
    id: string;
    captions: Caption[];
    qualities: Qualities;
    type: string;
    flags: string[];
  }
  
  // Interface for the complete data structure
 export interface MovieData {
    stream: Stream;
  }
  