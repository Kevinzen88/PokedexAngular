import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PkApiService } from 'src/app/services/pk-api.service';

@Component({
  selector: 'app-img-pokemon',
  templateUrl: './img-pokemon.component.html',
  styleUrls: ['./img-pokemon.component.scss']
})
export class ImgPokemonComponent {

  @Input() pokemon?: Pokemon;
}
