import { Component, EventEmitter, Input ,OnChanges, Output, SimpleChanges} from '@angular/core';
import { resultado } from 'src/app/interfaces/pokeapi';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PkApiService } from 'src/app/services/pk-api.service';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.scss']
})
export class CardPokemonComponent implements  OnChanges{

  constructor(private pkApiService: PkApiService) {

  }

  ngOnChanges(): void{
    this.extraInfo();
  }
  @Input() data?:resultado
  @Input() seleccionado:boolean = false;
  @Input() fullData?:Pokemon;
  @Output() clickeado = new EventEmitter<string>();
  id:string ="0";


  extraInfo(){
    if(this.data && this.data.url !== ""){
      this.id = this.data.url.substring(34,this.data.url.length-1)
      return
    }
    if(this.fullData){
      this.id = this.fullData.species.url.substring(42,this.fullData.species.url.length-1)
      this.data = {
        name:this.fullData.species.name,
        url:""
      }

    }
  }
}
