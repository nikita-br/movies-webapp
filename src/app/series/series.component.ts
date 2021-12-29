import {Component, OnInit} from '@angular/core';
import {Moviie, RatingsEntity} from "./Movie";
import {SeriesService} from "../series.service";
import {Episode} from "./Episode";

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor(private seriesService: SeriesService) {
  }

  data = {};
  movie?: Moviie;
  episodes?: Episode [];
  ratings?: RatingsEntity[] = [];

  categories: Array<{ text: string; value: number }> = [
    {text: "Game of Thrones", value: 1},
    {text: "Breaking Bad", value: 2},
    {text: "Rick and Morty", value: 3},
    {text: "The Sopranos", value: 4},
    {text: "Sherlock", value: 5},
  ];

  seasons: Array<{ text: string; value: number }> = [];
  selectedTitle = {text: "", value: 0}
  selectedSeason = {text: "", value: 0}
  toggleGridView = false;
  defaultTitleItem = {text: "Filter by Title", value: 0};
  defaultSeasonItem = {text: "Filter by Season", value: 0};

  handleSeriesChange(value: { text: string, value: number }) {
    this.toggleGridView = false;
    let title = value.text;
    this.getMovies(title);
  }

  handleSeasonChange(value: { text: string, value: number }) {
    this.toggleGridView = true;
    let selectedSeason = value.value;
    let selectedTitle = this.selectedTitle.text;
    this.getSeasonEpisodes(selectedTitle, selectedSeason);
  }

  getMovies(title: string): void {
    let t = this.seriesService.getSeries(title).subscribe((response) => {
      this.movie = response;
      this.ratings = response.ratings;
      this.seasons = [];
      this.episodes = [];
      this.selectedSeason = this.defaultSeasonItem;
      let numberOfSeasons = this.movie.totalSeasons;
      for (let i = 1; i < numberOfSeasons; i++) {
        this.seasons.push({text: "Season - " + i, value: i})
      }
    });
  }

  private getSeasonEpisodes(selectedTitle: string, selectedSeason: number) {
    let t = this.seriesService.getEpisodes(selectedTitle, selectedSeason).subscribe((response) => {
      this.episodes = response;
    });
  }

  ngOnInit(): void {
    this.episodes = [];
  }
}
