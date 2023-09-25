import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
// import { AppService } from '../../app/app.services';
import { CommonModule } from '@angular/common';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule ],
})

export class HomePage {

}
