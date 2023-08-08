import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {PkApiService} from '../../services/pk-api.service';
import { resultado } from 'src/app/interfaces/pokeapi';
import { Pokemon } from 'src/app/interfaces/pokemon';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private pkApiService: PkApiService) { }
  @ViewChild('targetas') targetasElement!: ElementRef;

  listPokes:resultado[] = []
  pagina:number = 1;
  carga: boolean = false;
  pokemonSelected?:Pokemon;
  detalle: boolean = false;
  ngOnInit(): void {
      this.cargoPokes();
      this.pkApiService.getById("1");
  }

  async cargoPokes(){
    this.carga = true;
    this.listPokes = [...this.listPokes, ...await this.pkApiService.getByPage(this.pagina)];
    this.carga = false;
    this.pagina++;

  }

  onScroll(e:any){
    if(this.carga) return;
    if(
      Math.round(
        this.targetasElement.nativeElement.clientHeight + this.targetasElement.nativeElement.scrollTop
      )
      === e.srcElement.scrollHeight){
        this.cargoPokes()
      }

  }

  async cardClick(id:string){
    if(this.pokemonSelected && id === this.pokemonSelected?.id.toString()){
      return this.cambiarEstadoDetalles();
    }
    this.pokemonSelected = await this.pkApiService.getById(id);
  }

  cambiarEstadoDetalles(){
    if(this.pokemonSelected) this.detalle = !this.detalle;
    console.log(this.detalle)
  }

}
