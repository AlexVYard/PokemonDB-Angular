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

  pokemonDB: any = [];

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
    // get info from api
    this.service.GetPokemonData().subscribe((data: any) => {
      
      const pokedexFull: any = document.getElementById("pokedex");
      let pokedexDataHTML = ''

      for (let i = 0; i < data.results.length; i++) {

        this.pokemonDB = data.results
        
        console.log(data.results[i])

        pokedexDataHTML += `
            <li class = "{this.pokemonDB[i].type[0]}" id= poketype>
              <img class = "card-image" src ="{this.pokemonDB[i].img}"/>
              <h2 class = "card-title">
                {this.pokemonDB[i].num}
                <br>
                ${this.pokemonDB[i].name}
              </h2>
              <p class = "card-subtitle">
                <div class="{this.pokemonDB[i].type[0]}Text">{this.pokemonDB[i].type[0]}</div>
                <br>
                <br>
                <div class="{this.pokemonDB[i].type[1]}Text">{this.pokemonDB[i].type[1]}</div>
              </p>
            </li>
          `;
      }

      pokedexFull.innerHTML = pokedexDataHTML

      // this.pokemonDB = data

      // load cards
      // loadCards(this.pokemonDB);

      /* function loadCards(pokemonDB: any) {
        const pokedexFull: any = document.getElementById("pokedex");
        let pokedexDataHTML = ''
        for (let i = 0; i < pokemonDB.length; i++) {
          // console.log(pokemonDB[i])
          pokedexDataHTML += `
            <li class = "${this.pokemonDB[i].type[0]}" id= poketype>
              <img class = "card-image" src ="${this.pokemonDB[i].img}"/>
              <h2 class = "card-title">
                ${this.pokemonDB[i].num}
                <br>
                ${this.pokemonDB[i].name}
              </h2>
              <p class = "card-subtitle">
                <div class="${this.pokemonDB[i].type[0]}Text">${this.pokemonDB[i].type[0]}</div>
                <br>
                <br>
                <div class="${this.pokemonDB[i].type[1]}Text">${this.pokemonDB[i].type[1]}</div>
              </p>
            </li>
          `;
        }
      
        pokedexFull.innerHTML = pokedexDataHTML
      
        // console.log(pokemonDB.results[0].url)
      } */

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
