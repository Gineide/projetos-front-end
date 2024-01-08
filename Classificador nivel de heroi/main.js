//classificado de nível de herói
const nomeDoHeroi = "Cat girl";
const xpDoHeroi = 6000;
let nivelDoHeroi;
switch (true) {
    case xpDoHeroi <= 1000:
        nivelDoHeroi ="Ferro";
        break;
    case xpDoHeroi >= 1001 && xpDoHeroi <= 2000:
        nivelDoHeroi = "Bronze";
        break;
    case xpDoHeroi >= 2001 && xpDoHeroi <= 5000:
        nivelDoHeroi = "Prata";
        break;
    case xpDoHeroi >= 6001 && xpDoHeroi <= 7000:
        nivelDoHeroi = "Ouro";
        break;
    case xpDoHeroi >= 7001 && xpDoHeroi <= 8000:
        nivelDoHeroi = "Platina";
        break;
    case xpDoHeroi >= 8001 && xpDoHeroi <= 9000:
        nivelDoHeroi = "Ascendente";
        break;
    case xpDoHeroi >= 9001 && xpDoHeroi <= 10000:
        nivelDoHeroi = "Imortal";
        break;
    default:
        nivelDoHeroi = "Radiante";
}

    console.log (`O herói de nome ${nomeDoHeroi} está no nivel de ${nivelDoHeroi}.`)        

