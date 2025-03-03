import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from '../model/item';
import { PedidoService } from '../service/pedido.service';

@Component({
  selector: 'app-cesta',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css']
})
export class CestaComponent {
  public lista: Item[] = [];
  public mensagem: string = '';
  public totalCesta: number = 0;
  public dadosEntrega = {
    nome: '',
    endereco: '',
    telefone: ''
  };

  constructor(private pedidoService: PedidoService) {
    let json = localStorage.getItem('cesta');
    if (json == null) {
      this.mensagem = 'Sua cesta de compras está vazia!';
    } else {
      this.lista = JSON.parse(json);
      for (let item of this.lista) {
        this.totalCesta += item.total;
      }
    }
  }

  limpar() {
    this.lista = [];
    localStorage.removeItem('cesta');
  }

  finalizarCompra() {
    const pedido = {
      itens: this.lista,
      total: this.totalCesta,
      dadosEntrega: this.dadosEntrega,
      data: new Date(),
      numeroPedido: Math.floor(Math.random() * 1000000)
    };

    this.pedidoService.gravarPedido(pedido).subscribe(
      (response) => {
        this.mensagem = 'Pedido gravado com sucesso!';
        this.limpar();
      },
      (error) => {
        this.mensagem = 'Erro ao gravar o pedido.';
      }
    );
  }
}
