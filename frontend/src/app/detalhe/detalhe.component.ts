import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-detalhe',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './detalhe.component.html',
  styleUrl: './detalhe.component.css'
})
export class DetalheComponent {
  public mensagem: String = "";
  public obj: Produto = new Produto();

  public constructor(private service: ProdutoService) {
    let codigo = localStorage.getItem("detalhe");
    if (codigo == null) {
      this.mensagem = "produto não encontrado!!!";
    } else {
      this.service.carregar(codigo).subscribe(
        (data: Produto) => {
          if (data == null) {
            this.mensagem = "Produto não encontrado!";
          } else {
            this.obj = data;
          }
        },
        (error) => {
          this.mensagem = "ocorreu um erro no carregamento do detalhe !" + error;
        }
      )
    }
  }

}
