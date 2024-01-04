interface Stream {
  id: string;
  type: string;
  playlist: string;
  flags: string[];
  captions: Caption[];
}

interface Caption {
  id: string;
  language: string;
  hasCorsRestrictions: boolean;
  type: string;
  url: string;
}

export interface MovieData {
  sourceId: string;
  embedId: string;
  stream: Stream;
}
