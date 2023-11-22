import { Component, OnInit } from '@angular/core';
import { Games } from '../models/games';
import { GamesService } from '../services/games.service';
import { Productos } from '../models/productos';


@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.page.html',
  styleUrls: ['./juegos.page.scss'],
})
export class JuegosPage implements OnInit {
  games: Games[];
  products: Array<Productos>;

  
  constructor(private _service: GamesService) { }

  ngOnInit() {
    this.loadGames();
  }

  loadGames(): void {
    this._service.getGames().subscribe(response => {
      console.log(response);
      this.products = response;
      // this.result = response.results;
      // console.log(this.result);
      //this.personajes = response.results;
    })
  }

}
