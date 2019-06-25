import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SettingsService } from 'app/services/settings.service'

export interface DialogData {
  idMovie: string;
}

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})

export class MovieDetailComponent implements OnInit {

  idMovie: string;

  constructor(
    @Inject(MAT_DIALOG_DATA)  
    public data: DialogData,
    public service : SettingsService
  ) { }

  ngOnInit() {

    console.log('Pelicula seleccionada',this.data)

    console.log("Respuesta del API:",this.data)
    this.data.idMovie? this.idMovie = this.data.idMovie : this.idMovie='000';

    this.service.getMovieById(this.idMovie).subscribe(data => {

      
      this.service.moviefull = data;

      console.log("Data de la pelicula:", this.service.moviefull)
    })

  }

}
