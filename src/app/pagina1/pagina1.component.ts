import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';


@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.scss']
})
export class Pagina1Component implements OnInit {

  formulario = new FormGroup({
    veiculo: new FormControl(null, [Validators.required, Validators.maxLength(32)]),
    descricao: new FormControl(null, [Validators.required, Validators.maxLength(16)]),
    quilometragem: new FormControl(null, [Validators.required, Validators.maxLength(16)]),
    valor: new FormControl(null, [Validators.required, Validators.maxLength(16)]),
    receberNovidades: new FormControl(false)
  });


  esconderSenha = true;
  veiculo: string;

  jsonDados: string;

  constructor(public appService: AppService, private router: Router) { }

  ngOnInit(): void {
  }
  cadastrar() {

    if (!this.veiculo) {
      return;
    }
  }

  limpar() {
    this.jsonDados = null;
  }

  enviar() {

    if (this.formulario.invalid) {
      return;
    }

    const dados = this.formulario.value;

    this.jsonDados = JSON.stringify(dados);

  }

}
