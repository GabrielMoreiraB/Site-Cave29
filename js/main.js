const produtos = [
    {
        id:1,
        nome:"Erminia Perini Blend 2020 750 mL",
        imagem:'./img/produtos/item-1.png',
        historia:"Inspirado em uma personalidade da família, o rótulo Erminia Perini traz um Blend de Merlot e Cabernet Sauvignon agradável para todos os dias!",
        tipo:"Tinto",
        uva:"Blend",
        Olfativo: "Parte do vinho passa 3 meses em carvalho francês.",
        tempeservi: "14°C a 16°C",
        comovejo:"Equilibrado, Frutado",
        teor:"13%",
        harmonizacao: "Harmonize com carnes vermelhas, massas e risotos.",
        vinicola: "Buffon",
        preco: 89.90,
    },
    {
        id:2,
        nome:"Espumante Victoria Geisse Moscato Rose Demi Sec 750 mL",
        imagem:"./img/produtos/item-2.png",
        historia:"Diferente dos métodos usuais para se produzir um espumante Moscato, este é feito pelo método tradional, elevando sua complexidade aromática.",
        tipo:"Espumante",
        uva: "Moscato De Hamburgo",
        Olfativo: "Notas florais, cítrico e frutas vermelhas frescas.",
        temperaturaserv:"6°C a 8°C",
        comovejo:"Doce, Equilibrado, Fresco, Leve",
        teor:"10%",
        harmonizacao:"Culinária asiática, salada de frutas e sobremesas à base de cremes.",
        vinicola: "Buffon",
        preco: 89.90,
    },
    {
        id:3,
        nome:"Espumante Victoria Geisse Extra Brut Vintage Rose",
        imagem:"./img/produtos/item-3.png",
        historia:"Com coloração cereja claro, este espumante rosé traz boa formação de espuma em taça, assim como excelente perlage.",
        tipo:"Espumante",
        uva: "Moscato De Hamburgo",
        Olfativo: "Notas florais, cítrico e frutas vermelhas frescas.",
        temperaturaserv:"6°C a 8°C",
        comovejo:"Doce, Equilibrado, Fresco, Leve",
        teor:"10%",
        harmonizacao:"Culinária asiática, salada de frutas e sobremesas à base de cremes.",
        vinicola: "Buffon",
        preco: 89.90,
    }
]

window.addEventListener('DOMContentLoaded',function(){
    mostraVinhos(produtos);

    const btnsTrocaF = document.querySelectorAll('.btn-trocaF');
    let btnsTrocaB = document.querySelectorAll('.btn-trocaB');

    btnsTrocaF.forEach(btn => btn.addEventListener('click',troca))

    btnsTrocaB.forEach(btn => btn.addEventListener('click',troca))

    
    
})

function troca(){
    const elementoBtn = document.getElementById(this.id);
    const eltManipula = elementoBtn.parentNode.parentNode.parentNode.parentNode;

    const front = eltManipula.querySelector('.card-front');
    const back = eltManipula.querySelector('.card-back');

    //console.log(produtos[this.id - 1].imagem);
    back.style.backgroundImage = `url(${produtos[this.id - 1].imagem})`;

    front.classList.toggle('hidden');
    back.classList.toggle('hidden');
    
}



const espacoCards = document.querySelector('.card-space');

function mostraVinhos(produtos){
    espacoCards.innerHTML = " ";
    produtos.forEach(vinhos => {
        espacoCards.innerHTML += `<div class="cardP">
        <div class="card-inner">
            <div class="card-front " >
                <img src="${vinhos.imagem}" alt="">
                <div class="card-info">
                    <h2 class="card-name">${vinhos.nome}</h2>
                    <div class="card-info">
                        <div class="card-info-cabecalho">
                            <div >
                                <img src="img/produtos/icons/barril.png" alt=""><span>${vinhos.vinicola}</span>
                                </div>
                                <img src="img/produtos/icons/001-grapes.png" alt="">
                                <span>${vinhos.uva}</span>
                            </div>
                        </div>
                        <p class="card-history">${vinhos.historia}</p>
                        <div class="card-front-info-valor">
                            <button class="btn-troca btn-trocaF" id="${vinhos.id}"><img src="img/produtos/icons/info.png" alt=""></button>
                            <div class="valor-front"><div class="bola"></div><h2>R$${vinhos.preco}</h2></div>
                        </div>
                </div>
            </div>
            <div class="card-back hidden" >
                <div class="cabecalho-card-back">
                    <h2 class="card-name">${vinhos.nome}</h2>
                    <button class="btn-troca btn-trocaB" id="${vinhos.id}"><img src="img/produtos/icons/info.png" alt=""></button>
                </div>
                <div class="card-back-space">
                    <div class="inner-back">
                        <img src="img/produtos/icons/001-grapes.png" alt="">
                        <div class="card-back-info">
                            <h4 class="title-inner-back">Uva</h4>
                            <div class="value-inner-back">${vinhos.uva}</div>
                        </div>
                    </div>
                    <div class="inner-back">
                        <img src="img/produtos/icons/barril.png" alt="">
                        <div class="card-back-info">
                            <h4 class="title-inner-back">Vinícola</h4>
                            <div class="value-inner-back">${vinhos.vinicola}</div>
                        </div>
                    </div>
                    <div class="inner-back">
                        <img src="img/produtos/icons/008-copo-de-vinho.png" alt="">
                        <div class="card-back-info">
                            <h4 class="title-inner-back">Tipo de vinho</h4>
                            <div class="value-inner-back">${vinhos.tipo}</div>
                        </div>
                    </div>
                    <div class="inner-back">
                        <img src="img/produtos/icons/003-celsius.png" alt="">
                        <div class="card-back-info">
                            <h4 class="title-inner-back">Temp. de Serviço</h4>
                            <div class="value-inner-back">${vinhos.tempeservi}</div>
                        </div>
                    </div>
                    <div class="inner-back">
                        <img src="img/produtos/icons/006-garfo.png" alt="">
                        <div class="card-back-info">
                            <h4 class="title-inner-back">Harmoni<span>zação</span></h4>
                            <div class="value-inner-back">${vinhos.harmonizacao}</div>
                        </div>
                    </div>
                    <div class="inner-back">
                        <img src="img/produtos/icons/barril.png" alt="">
                        <div class="card-back-info">
                            <h4 class="title-inner-back">Como Vejo</h4>
                            <div class="value-inner-back">${vinhos.comovejo}</div>
                        </div>
                    </div>
                    
                    <div class="inner-back">
                        <img src="img/produtos/icons/002-nariz.png" alt="">
                        <div class="card-back-info">
                            <h4 class="title-inner-back">Olfativo</h4>
                            <div class="value-inner-back">${vinhos.Olfativo}</div>
                        </div>
                    </div>
                    <div class="inner-back">
                        <img src="img/produtos/icons/004-pingo-dagua.png" alt="">
                        <div class="card-back-info">
                            <h4 class="title-inner-back">Teor</h4>
                            <div class="value-inner-back">${vinhos.teor}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    });
}



