//função para calcular a taxa de vitórias
function taxaDeVitorias (vitorias, derrotas){
    return vitorias- derrotas
}

//função para determinar o Elo
function determinarElo (elo){
    if (elo <= 10){
        return "Ferro"
    } else if (elo >= 11 && elo <=20){
        return "Bronze"
    } else if (elo >= 21 && elo <=50){
        return "Prata"
    } else if (elo >= 51 && elo <=80){
        return "Ouro"
    } else if (elo >= 81 && elo <=90){
        return "Diamante"
    } else if (elo >= 91 && elo <=100){
        return "Lendário"
    } if (elo >= 101){
        return "Imortal"
    } 
}

//Definição das variáveis de vitórias e derrotas
let vitorias = 235
let derrotas = 140
//Calculando as vitórias e os níveis
let elo = taxaDeVitorias(vitorias, derrotas)
let nivel = determinarElo(elo)

//resultado
console.log("O Heroi tem saldo de", elo, "e está no nível", nivel)