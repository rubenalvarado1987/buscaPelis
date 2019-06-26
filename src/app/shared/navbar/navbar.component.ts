import { Component, OnInit, Input } from '@angular/core';
import { SettingsService } from 'app/services/settings.service';
import { Movie } from 'app/models/movie.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() title: string;

  txtInput: string = "batman";
  movies: Movie[];

  constructor(
    private service : SettingsService
  ) {}

  ngOnInit() {
    this.service.getMovieByName(this.txtInput).subscribe(data => {

      console.log("Respuesta Inicial del API:",data)

      if (data.Search){
        this.service.movies = data.Search;
      }
    })
  }

  menuClick() {
   // document.getElementById('main-panel').style.marginRight = '260px';
  }
  search(){

    console.log("Texto buscado: ",this.txtInput);
    //this.notaryService.getNotaries().subscribe(data => {

    this.service.getMovieByName(this.txtInput).subscribe(data => {

      console.log("Respuesta del API:",data)

      if (data.Search){
        this.service.movies = data.Search;
      }
    })


  }
}
