function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;
    switch (true) {
        case saldoVitorias <= 10:
            nivel = "Ferro";
            break;
        case saldoVitorias >= 11 && saldoVitorias <= 20:
            nivel = "Bronze";
            break;
        case saldoVitorias >= 21 && saldoVitorias <= 80:
            nivel = " Ouro";
            break;
        case saldoVitorias >= 81 && saldoVitorias <= 90:
            nivel = " Diamante";
            break;
        case saldoVitorias >= 91 && saldoVitorias <= 100:
            nivel = "Lendário";
            break;
        default:
            nivel = "Imortal";
    }
    console.log(`O herói com o saldo de ${saldoVitorias}, está no nível de "${nivel}."`);
}
const resutado = calcularNivel(100, 51);