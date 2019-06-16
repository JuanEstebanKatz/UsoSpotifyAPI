import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;
  

  constructor(private spotify: SpotifyService) {
    //al colocar la data de tipo any, indico que no se como va a llegar esa informacion.
    this.loading = true;
    this.error= false;

    this.spotify.getNewReleases()
      .subscribe( (data: any) => {
        console.log(data);
        this.nuevasCanciones = data;
        this.loading=false;
      }, (errorServicio)=>{
        this.error= true;
        this.loading=false;
       this.mensajeError=errorServicio.error.error.message;
       // console.log(errorServicio.error.error.message);
        
      })

  }



}
