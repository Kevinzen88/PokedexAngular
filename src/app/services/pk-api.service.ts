import { Injectable } from '@angular/core';
import { resultado } from '../interfaces/pokeapi';
import { Pokemon } from '../interfaces/pokemon';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PkApiService {

  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  getPokes(index: number){
    return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`);
  }

  async getByPage(page: number,limit: number = 40):Promise<resultado[]>{
    if(page > 10) return[];
    const offset = limit*(page - 1);
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
    const resjson = await res.json();
    if(resjson.results.length > 0) return resjson.results
    return [];
  }

  async getById(id:string):Promise<Pokemon>{
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return await res.json();
  }

  async getDescripcion(id:string | number):Promise<string>{
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    const resJson = await res.json();
    const texto = resJson.flavor_text_entries.find((texto:any) =>  texto.language.name === "es")
    return texto.flavor_text;
  }
}
