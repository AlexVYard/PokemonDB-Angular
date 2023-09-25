import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-kanto',
  templateUrl: './kanto.page.html',
  styleUrls: ['./kanto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class KantoPage implements OnInit {

  pokemonDB: any = [];

  constructor(private http: HttpClient) {
    console.log("HomePage Component")
  }

  ngOnInit() {
    // gets names and url from api
    this.http.get('https://pokemon-go-api.github.io/pokemon-go-api/api/pokedex/generation/1.json').subscribe((res: any) => {
      
      this.pokemonDB = res      

      // gets complimentary data for pokemons
      for (let i = 0; i < this.pokemonDB.length; i++) {
        this.pokemonDB[i].primaryType.names.English = this.pokemonDB[i].primaryType.names.English.toLowerCase()
        if (this.pokemonDB[i].secondaryType !== null) {
          this.pokemonDB[i].secondaryType.names.English = this.pokemonDB[i].secondaryType.names.English.toLowerCase()
        } else {
          this.pokemonDB[i].secondaryType = {"names": {"English": "undefined"}}
          /* this.pokemonDB[i].secondaryType.names = ["English"]
          this.pokemonDB[i].secondaryType.names.English = "undefined" */
        }
        // this.http.get(this.pokemonDB[i].url).subscribe((res: any) => {
          // console.log(res)
          // this.pokemonDB[i].url
          // this.pokemonDB[i].data = res
          if (this.pokemonDB[i].dexNr.toString().length < 3) {
            this.pokemonDB[i].dexNr = "0"+this.pokemonDB[i].dexNr
            if (this.pokemonDB[i].dexNr.toString().length < 3) {
              this.pokemonDB[i].dexNr = "0"+this.pokemonDB[i].dexNr
            }
          }
        // })

      }

      console.log(this.pokemonDB)
      console.log(this.pokemonDB[2].secondaryType !== null)

      /* const pokedexFull: any = document.getElementById("cards");

      for (let i = 0; i < data.results.length; i++) {

        this.pokemonDB = data.results
        
        console.log(data.results[i])

        const card = document.createElement('ion-card')

        const cardHeader = document.createElement('ion-card-header')

        const cardTitle = document.createElement('ion-card-title')
        cardTitle.className = "card-title"
        cardTitle.innerHTML = this.pokemonDB[i].name

        pokedexFull.appendChild(card)
        card.appendChild(cardHeader)
        cardHeader.appendChild(cardTitle)

      } */

      // pokedexFull.innerHTML = pokedexDataHTML

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
