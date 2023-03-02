const produtos = [
    {
        id:1,
        nome:"Erminia Perini Blend 2020 750 mL",
        imagem:"./img/produtos/item-1.png",
        historia:"Inspirado em uma personalidade da família, o rótulo Erminia Perini traz um Blend de Merlot e Cabernet Sauvignon agradável para todos os dias!",
        tipo:"Tinto",
        uva:"Blend",
        Olfativo: "Parte do vinho passa 3 meses em carvalho francês.",
        tempeservi: "14°C a 16°C",
        comovejo:"Equilibrado, Frutado",
        teor:"13%",
        harmonizacao: "Harmonize com carnes vermelhas, massas e risotos.",
        vinicola: "Buffon"
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
        vinicola: "Buffon"
    },
    {
        id:2,
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
        vinicola: "Buffon"
    }
]

const cardFront = document.querySelector('.card-front');
const cardBack = document.querySelector('.card-back');
const btnTrocaF = document.querySelector('.btn-troca');
const btnTrocaB = document.querySelector('.btn-trocaB');

btnTrocaF.addEventListener('click',function(){
    cardFront.classList.toggle('hidden');
    cardBack.classList.toggle('hidden');
})

btnTrocaB.addEventListener('click',function(){
    cardFront.classList.toggle('hidden');
    cardBack.classList.toggle('hidden');
})