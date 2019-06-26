import { Component, OnInit, Inject } from '@angular/core';
import { environment } from 'environments/environment';
import { SettingsService } from 'app/services/settings.service'
import { Movie } from 'app/models/movie.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MovieDetailComponent } from 'app/dashboard/home/movie-detail/movie-detail.component';
import {BehaviorSubject, Observable, zip} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  movies: Movie[];
  movies_favorites: [];
  numbers_favorites_pelis: any;

  

  constructor(public service: SettingsService,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    console.log('Variables de entorno',environment)
    this.service.moviesFavorities = new BehaviorSubject([]);
  }

  show_title(code){
    console.log('Pelicula buscada:',code);
    this.openDialog(code)

  }

  add_favorite(movie){

    this.service.moviesFavorities.next([...this.service.moviesFavorities.getValue(), movie])
    
    localStorage.setItem("favorites", JSON.stringify(this.service.moviesFavorities._value));

    console.log("Peliculas agregadas a favoritos:", localStorage.getItem("favorites"));

  }

  openDialog(code): void {
    const dialogRef = this.dialog.open(MovieDetailComponent, {
      width: '800px',
      data: {idMovie: code}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');      
    });
  }

}
