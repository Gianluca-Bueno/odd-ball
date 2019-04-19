/**
 * @import countPlayers
 * @param connections - vetor de ponteiros para conexões de WebSocket
 *  - Use a função countPlayers para obter o número de pessoas conectadas
 *  - A função countPlayers recebe o vetor de conexões
 *  - Se não houver conexões ativas, imprima "No players"
 *  - Se houver apenas uma conexão, imprima "1 player"
 *  - Se houver mais de uma conexão, imprima o número de conexões,
 *    seguido de um espaço e da palavra "players", devidamente no plural
 * @export logPartySize
 */

const countPlayers = require('./countPlayers.js');

function logPartySize(connections){
    let n = countPlayers(connections);
    if (n > 1) console.log(`${n} players`);
    else if (n === 1) console.log(`1 player`);
    else console.log(`No players`);
}

module.exports = logPartySize;
