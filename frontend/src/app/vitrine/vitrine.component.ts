import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Item } from '../model/item';
import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.css'
})
export class VitrineComponent {
  public mensagem: String;
  public lista: Produto[] = [];
  /*[{codigo:1,nome:"Placa de Vídeo Galax NVIDIA GeForce RTX 4060 1-Click OC, 8GB, GDDR6, DLSS, Ray Tracing, 46NSL8MD8ZOC",valor:1700, descritivo:"A Placa de Vídeo RTX 4060 possui mecanismo de GPU de 3072 Núcleos CUDA, proporcionando potência de processamento eficiente. Com um Boost Relógio de 2.460MHz, a placa pode lidar com uma variedade de tarefas gráficas. A opção de overclocking é simplificada com o Xtreme Tuner Plus Software, permitindo um aumento adicional no clock para 2.475MHz com apenas um clique. Isso proporciona uma experiência de jogo mais intensa e suave. A memória da RTX 4060 possui uma velocidade impressionante de 17 Gbps, juntamente com uma largura de interface de memória de 128 bits GDDR6.",promo:1500, estoque:10, destaque:1, frete:23},
  {codigo:2,nome:"Processador AMD Ryzen 7 5700X, 3.4GHz (4.6GHz Max Turbo), Cache 36MB, AM4, Sem Vídeo - 100-100000926WOF",valor:1300, descritivo:"O Ryzen 7 5700X conta com 8 núcleos incríveis para quem quer apenas jogar. Os processadores AMD Ryzen série 5000 capacitam a próxima geração de jogos exigentes, proporcionando experiências imersivas únicas e dominando qualquer tarefa multithread como 3D e renderização de vídeo e compilação de software.",promo:1000, estoque:10, destaque:1, frete:10},
  {codigo:3,nome:"Placa Mãe Gigabyte B550M AORUS Elite, Chipset B550, AMD AM4, mATX, DDR4",valor:900, descritivo:"AMD B550 Ultra Durable Motherboard com Pure Digital VRM Solution, PCIe 4.0 x16 Slot, Dual PCIe 4.0 / 3.0 M.2 Conectores, GIGABYTE 8118 Gaming LAN, Smart Fan 5 com FAN STOP, RGB FUSION 2.0, Q-Flash Plus",promo:750, estoque:10, destaque:1, frete:15},
  {codigo:4,nome:"Placa De Vídeo Galax NVIDIA GeForce RTX 4060 Ti 1-Click OC, 8GB, GDDR6, DLSS, Ray Tracing, 46ISL8MD8COC",valor:2700, descritivo:"Equipado com NVIDIA DLSS 3, arquitetura Ada Lovelace ultraeficiente e rastreamento de raio completo, o GeForce RTX 4060 Ti 8GB 1-Click OC com dua ventoinhas apresenta 4.352 núcleos CUDA e a memória GDDR6 de 18 Gbps 8 GB 128 bits de hipervelocidade, bem como a exclusivo clock OC de 1 clique de 2.565MHz através de seu software dedicado Xtreme Tuner Plus. Como é equipado com um único conector de alimentação PCI-E de 8 pinos e um cooler super leve de 2 slots, a mais nova GPU oferece uma experiência de atualização perfeita para os usuários.",promo:2250, estoque:10, destaque:1, frete:20},
  {codigo:5,nome:"Memória DDR4 Corsair Vengeance RGB PRO SL, 16GB (2x8GB) 3200MHz, White, CMH16GX4M2E3200C16W",valor:420, descritivo:"A memória CORSAIR VENGEANCE RGB PRO SL DDR4 destaca seu PC com iluminação RGB dinâmica e endereçável individualmente, enquanto oferece desempenho máximo em um formato compacto.",promo:350, estoque:10, destaque:1, frete:10},
  {codigo:6,nome:"Cooler para Processador DeepCool AG400 DIGITAL PLUS, ARGB, 120mm, Intel-AMD, Black, R-AG400-BKADMP-G-1",valor:320, descritivo:"O DeepCool AG400 DIGITAL PLUS é um refrigerador de CPU de torre única de 120 mm que se baseia no nosso legado para um desempenho de refrigeração de alta qualidade, mas despojado para um pacote simplificado e eficiente.",promo:270, estoque:10, destaque:1, frete:12},
  {codigo:7,nome:"SSD XPG GAMMMIX S70 BLADE 1TB, M.2 2280 NVMe, Leitura 7400MBs e Gravação 5500MBs, AGAMMIXS70B-1T-CS",valor:700, descritivo:"Dissipador de calor de alumínio resistente a altas temperaturas que é capaz de reduzir as temperaturas em até 20%. Melhorando consideralvemente a sua performance.",promo:630, estoque:10, destaque:1,frete:10},
  {codigo:8,nome:"Placa Mãe Asus TUF Gaming B650M-PLUS, Chipset B650, AMD AM5, mATX, DDR5, 90MB1BG0-C1BAY0",valor:1500, descritivo:"A ASUS TUF GAMING B650M-PLUS reúne todos os elementos essenciais dos mais recentes processadores AMD Ryzen série 7000 e os combina com recursos prontos para jogos e durabilidade comprovada. Projetada com componentes de nível militar, uma solução de energia atualizada e um sistema de refrigeração abrangente, esta placa-mãe vai além das expectativas com desempenho sólido e estável para jogos de maratona. ",promo:1200, estoque:10, destaque:1, frete:20}
  ];*/

  public constructor(private service: ProdutoService) {
    this.mensagem = "";
    this.service.listar().subscribe(
      (data: Produto[]) => {
        if (data == null) {
          this.mensagem = "Produtos não encontrados!";
        } else {
          this.lista = data;
        }
      },
      (error) => {
        this.mensagem = "Ocorreu um erro no carregamento da vitrine !" + error;
      }
    )
  }

  public comprar(produto: Produto) {
    let novo: Item = new Item();
    novo.codigoProduto = produto.codigo;
    novo.nomeProduto = produto.nome;
    novo.valor = produto.valor;
    novo.qtd = 1;
    novo.total = produto.valor;
    let lista: Item[] = [];
    let json = localStorage.getItem("cesta");
    if (json == null) {
      lista.push(novo);
      console.log(JSON.stringify(lista));
    } else {
      lista = JSON.parse(json);
      lista.push(novo);
    }
    localStorage.setItem("cesta", JSON.stringify(lista));
    window.location.href = "./cesta";
  }

  public abrirDetalhe(produto: Produto) {
    localStorage.setItem("detalhe", JSON.stringify(produto.codigo));
    window.location.href = "./detalhe";
  }
}
