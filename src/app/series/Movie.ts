export interface Moviie {
  title: string;
  year: string;
  rated: string;
  released: string;
  runtime: string;
  genre: string;
  director: string;
  writer: string;
  actors: string;
  plot: string;
  language: string;
  country: string;
  awards: string;
  poster: string;
  ratings?: (RatingsEntity)[] ;
  metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  type: string;
  totalSeasons: number;
  response: string;
}
export interface RatingsEntity {
  source: string;
  value: string;
}

