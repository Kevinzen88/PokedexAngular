import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PkApiService } from 'src/app/services/pk-api.service';

@Component({
  selector: 'app-modal-table',
  templateUrl: './modal-table.component.html',
  styleUrls: ['./modal-table.component.scss']
})
export class ModalTableComponent implements OnInit {


  displayedColumns: string[] = ['position', 'image','name'];
  data: any[] = [];
  dataSource = new MatTableDataSource<any>(this.data);
  pokemons = [];

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  constructor(private pkApiService: PkApiService) { }


  ngOnInit(): void {
    this.getPokesTable();
  }

  getPokesTable(){
    let pokemonData
    for(let i = 1; i <= 500; i++){
      this.pkApiService.getPokes(i).subscribe(
            res => {
              pokemonData ={
                position: i,
                image: res.sprites.front_default,
                name: res.name
              };
              this.data.push(pokemonData);
              this.dataSource = new MatTableDataSource<any>(this.data);
              this.dataSource.paginator = this.paginator;
              console.log(res);
            },
            err =>{
              console.log(err);
            }
      );
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
