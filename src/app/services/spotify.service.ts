import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

//permite que angular inyecte este servicio en otros componentes y otros lugares.
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log("Spotify service listo")
  }

  getQuery(query: string) {

    const url = `https://api.spotify.com/v1/${query}`
    const headers = new HttpHeaders({
      'Authorization': 'Bearer QAhDFctSkqw5CaYqvagWRokE_KsMfZGeZOZje16aPIPJ2ajpcAHPrPxjuQLzSKnhmGofB9kppcod6Jn9lc'
    });
    //console.log(url)
    return this.http.get(url, { headers })
  
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map(data => data['albums'].items));

    /*     return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
          .pipe(map(data => {
            return data['albums'].items;
          }));
     */
  }


  getArtistas(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map(data => data['artists'].items));
    /*    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers })
         .pipe(map(data => data['artists'].items ));
    */

  }

  getArtista(id: string) {

    return this.getQuery(`artists/${ id }`)
     // .pipe(map(data => data['artists'].items));
    /*    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers })
         .pipe(map(data => data['artists'].items ));
    */
  }

  getTopTracks( id: string ){
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
    .pipe( map(data => data['tracks']))
  }

}
