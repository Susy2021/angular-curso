import { Component } from '@angular/core';

import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-personanjes',
  templateUrl: './personanjes.component.html',
})
export class PersonanjesComponent {

  get personajes() {
    return this.dbzService.personajes;
  }

  constructor ( private dbzService: DbzService ) {};

}


