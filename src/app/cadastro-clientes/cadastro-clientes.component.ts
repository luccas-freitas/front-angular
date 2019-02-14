import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {
  formCadastro;
  valoresForm: Object;
  conversao;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formCadastro = this.fb.group({
      nome: [''],
      cpf: [''],
      email: [''],
      telefone: [''],
      endereco: ['']
    });
    setTimeout(() => {
      this.formCadastro.patchValue({
        nome: 'Luccas Freitas',
        cpf: '091.668.199-89',
        email: 'ff.luccas@gmail.com',
        telefone: '(43) 99644-0942',
        endereco: 'Rua Paulo Sérgio Grisotto, 39'
      });
    }, 2000);
    console.log(this.valoresForm);
    this.formCadastro.valueChanges.pipe(
      debounceTime(1000))
      .subscribe(res => {
        console.log(res);
        this.valoresForm = res;
      });
  }
  cadastro() {
    this.conversao = JSON.stringify(this.valoresForm);
    console.log(this.conversao);
    localStorage.setItem('cadastro', this.conversao);
  }

}
