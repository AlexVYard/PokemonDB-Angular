import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AppService } from '../../app/app.services';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})

export class HomePage {

  PokemonInfo: any = [];

  constructor(private service: AppService) {
    console.log("HomePage Component")
    /* this.http.get('https://pokeapi.co/api/v2/pokemon?limit=1010&offset=0', {})
      .subscribe((data: any) => {
        console.log(data);
      }, (error: any) => {
        console.error('Error:', error);
      });   */
  }

  ngOnInit() {
    this.service.GetPokemonData().subscribe((data: any) => {
      this.PokemonInfo = data;
      console.log(data)
    })
  }

  /* GetPokemonData() {
    this.http.get('https://pokeapi.co/api/v2/pokemon?limit=1010&offset=0', {})
      .subscribe((data: any) => {
        console.log(data);
      }, (error: any) => {
        console.error('Error:', error);
      });
  } */
}
