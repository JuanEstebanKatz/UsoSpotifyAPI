import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//permite que angular inyecte este servicio en otros componentes y otros lugares.
@Injectable( {
  providedIn: 'root'
} )
export class SpotifyService {

  constructor(private http:HttpClient) { 
    console.log("Spotify service listo")
  }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDtjFYAuia9o-4OKGXuONY_4NqkqVJg-X41S7_xRsccSEW_Gy1SbBuW-0BUm29Eakk7ATo9mkitWN-DSJlG0g2qBewye9_VtTxLjQJuXqGPVSBvlEH4VU81S4UAz1JHYxG5ZFnV81q2bgTicTYU65IZWc-1VK6itR4RWw'
    })
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20',{headers});

  }

  getArtista (termino: string){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDtjFYAuia9o-4OKGXuONY_4NqkqVJg-X41S7_xRsccSEW_Gy1SbBuW-0BUm29Eakk7ATo9mkitWN-DSJlG0g2qBewye9_VtTxLjQJuXqGPVSBvlEH4VU81S4UAz1JHYxG5ZFnV81q2bgTicTYU65IZWc-1VK6itR4RWw'
    })
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`,{headers});


  }
}
