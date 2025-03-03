let searchBtn = document.querySelector('.searchBtn');
let closeBtn = document.querySelector('.closeBtn');
let searchBox = document.querySelector('.searchBox');
let navigation = document.querySelector('.navigation')
let menu = document.querySelector('.menu');
let header = document.querySelector('header');


searchBtn.onclick = function () {
    searchBox.classList.add('active');
    closeBtn.classList.add('active');
    searchBtn.classList.add('active');
    menu.classList.add('hide');
    header.classList.remove('open');
}


closeBtn.onclick = function () {
    searchBox.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBtn.classList.remove('active');
    menu.classList.remove('hide');
}


menu.onclick = function () {
    header.classList.toggle('open');
    searchBox.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBtn.classList.remove('active');
}


// Foca no campo de busca
const searchIcon = document.getElementById('searchIcon');
searchIcon.addEventListener('click', function () {
    const inputBusca = document.getElementById('inputBusca');
    inputBusca.focus();
});


const produtos = [
    {
        codigo: 1,
        nome: "Placa de Vídeo Galax NVIDIA GeForce RTX 4060 1-Click OC, 8GB, GDDR6, DLSS, Ray Tracing, 46NSL8MD8ZOC",
        nominho: "RTX 4060",
        valor: 1700,
        descritivo: "A Placa de Vídeo RTX 4060 possui mecanismo de GPU de 3072 Núcleos CUDA, proporcionando potência de processamento eficiente. Com um Boost Relógio de 2.460MHz, a placa pode lidar com uma variedade de tarefas gráficas. A opção de overclocking é simplificada com o Xtreme Tuner Plus Software, permitindo um aumento adicional no clock para 2.475MHz com apenas um clique. Isso proporciona uma experiência de jogo mais intensa e suave. A memória da RTX 4060 possui uma velocidade impressionante de 17 Gbps, juntamente com uma largura de interface de memória de 128 bits GDDR6.",
        valorPromo: 1500,
        estoque: 10,
        destaque: 1
    },
    {
        codigo: 2,
        nome: "Processador AMD Ryzen 7 5700X, 3.4GHz (4.6GHz Max Turbo), Cache 36MB, AM4, Sem Vídeo - 100-100000926WOF",
        nominho: "7 5700X",
        valor: 1300,
        descritivo: "O Ryzen 7 5700X conta com 8 núcleos incríveis para quem quer apenas jogar. Os processadores AMD Ryzen série 5000 capacitam a próxima geração de jogos exigentes, proporcionando experiências imersivas únicas e dominando qualquer tarefa multithread como 3D e renderização de vídeo e compilação de software.",
        valorPromo: 1000,
        estoque: 10,
        destaque: 1
    },
    {
        codigo: 3,
        nome: "Placa Mãe Gigabyte B550M AORUS Elite, Chipset B550, AMD AM4, mATX, DDR4",
        nominho: "B550M",
        valor: 900,
        descritivo: "AMD B550 Ultra Durable Motherboard com Pure Digital VRM Solution, PCIe 4.0 x16 Slot, Dual PCIe 4.0 / 3.0 M.2 Conectores, GIGABYTE 8118 Gaming LAN, Smart Fan 5 com FAN STOP, RGB FUSION 2.0, Q-Flash Plus",
        valorPromo: 750,
        estoque: 10,
        destaque: 1
    },
    {
        codigo: 4,
        nome: "Placa De Vídeo Galax NVIDIA GeForce RTX 4060 Ti 1-Click OC, 8GB, GDDR6, DLSS, Ray Tracing, 46ISL8MD8COC",
        nominho: "RTX 4060 TI",
        valor: 2700,
        descritivo: "Equipado com NVIDIA DLSS 3, arquitetura Ada Lovelace ultraeficiente e rastreamento de raio completo, o GeForce RTX 4060 Ti 8GB 1-Click OC com dua ventoinhas apresenta 4.352 núcleos CUDA e a memória GDDR6 de 18 Gbps 8 GB 128 bits de hipervelocidade, bem como a exclusivo clock OC de 1 clique de 2.565MHz através de seu software dedicado Xtreme Tuner Plus. Como é equipado com um único conector de alimentação PCI-E de 8 pinos e um cooler super leve de 2 slots, a mais nova GPU oferece uma experiência de atualização perfeita para os usuários.",
        valorPromo: 2250,
        estoque: 10,
        destaque: 1
    },
    {
        codigo: 5,
        nome: "Memória DDR4 Corsair Vengeance RGB PRO SL, 16GB (2x8GB) 3200MHz, White, CMH16GX4M2E3200C16W",
        nominho: "DDR4",
        valor: 420,
        descritivo: "A memória CORSAIR VENGEANCE RGB PRO SL DDR4 destaca seu PC com iluminação RGB dinâmica e endereçável individualmente, enquanto oferece desempenho máximo em um formato compacto.",
        valorPromo: 350,
        estoque: 10,
        destaque: 1
    },
    {
        codigo: 6,
        nome: "Cooler para Processador DeepCool AG400 DIGITAL PLUS, ARGB, 120mm, Intel-AMD, Black, R-AG400-BKADMP-G-1",
        nominho: "AG400",
        valor: 320,
        descritivo: "O DeepCool AG400 DIGITAL PLUS é um refrigerador de CPU de torre única de 120 mm que se baseia no nosso legado para um desempenho de refrigeração de alta qualidade, mas despojado para um pacote simplificado e eficiente.",
        valorPromo: 270,
        estoque: 10,
        destaque: 1
    },
    {
        codigo: 7,
        nome: "SSD XPG GAMMMIX S70 BLADE 1TB, M.2 2280 NVMe, Leitura 7400MBs e Gravação 5500MBs, AGAMMIXS70B-1T-CS",
        nominho: "SSD 1TB",
        valor: 700,
        descritivo: "Dissipador de calor de alumínio resistente a altas temperaturas que é capaz de reduzir as temperaturas em até 20%. Melhorando consideralvemente a sua performance.",
        valorPromo: 630,
        estoque: 10,
        destaque: 1
    },
    {
        codigo: 8,
        nome: "laca Mãe Asus TUF Gaming B650M-PLUS, Chipset B650, AMD AM5, mATX, DDR5, 90MB1BG0-C1BAY0",
        nominho: "B650M",
        valor: 1500,
        descritivo: "A ASUS TUF GAMING B650M-PLUS reúne todos os elementos essenciais dos mais recentes processadores AMD Ryzen série 7000 e os combina com recursos prontos para jogos e durabilidade comprovada. Projetada com componentes de nível militar, uma solução de energia atualizada e um sistema de refrigeração abrangente, esta placa-mãe vai além das expectativas com desempenho sólido e estável para jogos de maratona. ",
        valorPromo: 1200,
        estoque: 10,
        destaque: 1
    },
];


function filtrar() {
    var input,
        filter,
        ul,
        li,
        a,
        i,
        span,
        txtValue,
        count = 0;


    input = document.getElementById('inputBusca');
    ul = document.getElementById('listaProdutos');


    filter = input.value.toUpperCase();


    ul.innerHTML = '';


    produtos.forEach((produto) => {
        if (produto.nome.toUpperCase().includes(filter)) {
            const li = document.createElement("li");
            li.innerHTML = `
                        <a href="#">
                            <img width="80px" src="./assets/imagens/${produto.codigo}.jpg" title="${produto.nome}">
                            <span class="item-name">${produto.nome}</span>
                            <span class="item-nominho">${produto.nominho}</span>
                            <span class="item-preco"><span style="color: black;">R$</span> ${produto.valor}</span>
                            <span class="item-promo"><span style="color: black;">R$</span> ${produto.valorPromo}</span>
                        </a>
                    `;
            ul.appendChild(li);
            count++;
        }
    });


    ul.style.display = filter === "" ? "none" : "block";
}
// Oculta a searchBox quando clica na tela
document.addEventListener('click', function (event) {
    if (event.target !== inputBusca && event.target !== searchIcon) {
        searchBox.classList.remove('active');
        closeBtn.classList.remove('active');
        searchBtn.classList.remove('active');
        inputBusca.value = '';
        listaProdutos.style.display = 'none'
    }
});

checkbox.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});