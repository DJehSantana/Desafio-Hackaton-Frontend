import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JogadorCriacaoDTO } from '../dto/jogadorDTO';



@Injectable({
  providedIn: 'root'
})
export class JogadorService {

  private readonly API = `${environment.urlBackend}/jogador`
  constructor(private $http: HttpClient) { }

  public salvarJogador(jogadorDTO: JogadorCriacaoDTO) {
    return this.$http.post(`${this.API}`, jogadorDTO);
  }
}
