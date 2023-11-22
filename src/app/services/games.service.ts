import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Games } from '../models/games';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  //private baseURL = "https://apiejemplos.azurewebsites.net/api/Empleados"

  constructor(private _http: HttpClient) {

  }

  getGames(): Observable<any> {
    var request = "https://fakestoreapi.com/products";
    //
    // var httOptions = {
    //   headers: new HttpHeaders({

    //   })
    // }
    return this._http.get(request);
    // console.log(url);
    // return this._http.get(url);
  }

  // obtenerListaJuegos(): Observable<Games[]> {
  //   // var request = "api/games";
  //   // var url = environment.urlApi + request;
  //   return this._http.get<Games[]>(`${this.baseURL}`);
  
  // }

  // getGamesById(id: number): Observable<any> {
  //   var request = "/api/game?id=" + id;
  //   var url = environment.urlApi + request;

  // }

}