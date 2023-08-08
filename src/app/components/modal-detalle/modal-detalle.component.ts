import { Component, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PkApiService } from 'src/app/services/pk-api.service';

@Component({
  selector: 'app-modal-detalle',
  templateUrl: './modal-detalle.component.html',
  styleUrls: ['./modal-detalle.component.scss']
})
export class ModalDetalleComponent implements OnChanges {

    constructor(private pkApiService: PkApiService){}

    ngOnChanges(): void {
      if(this.pokemon){
        this.pkApiService.getDescripcion(this.pokemon?.id).then(res =>{
        this.descripcion = res
      })
      }

    }
    @Input() abierto: boolean = false;
    @Output() cambioAbierto = new EventEmitter();
    @Input() pokemon?: Pokemon;
    descripcion: string = "";
}
