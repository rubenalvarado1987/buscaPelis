import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import { SettingsService } from 'app/services/settings.service'
import { Movie } from 'app/models/movie.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: Movie[];

  constructor(public service: SettingsService) {
  }

  ngOnInit() {
    console.log('Variables de entorno',environment)
  }

  show_title(code){
    console.log('Pelicula buscada:',code);

  }

}
