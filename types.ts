
export interface MediaItem {
  type: 'image' | 'video';
  url: string;
  poster?: string;
}

export interface Artwork {
  id: string;
  title: string;
  artist: string;
  location: string;
  media: MediaItem[];
  date: string; // Format: YYYY-MM-DD
  description: string;
}
