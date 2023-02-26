import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JogadorCriacaoDTO } from 'src/app/dto/jogadorDTO';
import { JogadorService } from 'src/app/services/jogador.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private jogador: JogadorCriacaoDTO = new JogadorCriacaoDTO();

  constructor(
    private router: Router,
    private jogadorService: JogadorService) { }

  ngOnInit(): void {
  }

  public cadastrarJogador(): void {
    this.jogadorService.salvarJogador(this.jogador).subscribe(
      data => console.log("Usuário cadastrado com sucesso!" + data),
      error => console.error(error));
  }

}
