export interface Game {
  id: number;
  name: string;
  background_image: string;
}

export interface GamesData {
  results: Game[];
  next: string | null;
}
