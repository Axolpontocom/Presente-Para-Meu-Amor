function relogio(){

const dataincio = new Date(2025, 8, 9, 16, 45, 0); // Data e hora de início (ano, mês, dia, hora, minuto, segundo)
const agora = new Date(); // Data e hora atual

const diferenca = agora - dataincio; // Diferença em milissegundos

const diastotal = Math.floor(diferenca / (1000 * 60 * 60 * 24));
const horastotal = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutostotal = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
const segundostotal = Math.floor((diferenca % (1000 * 60)) / 1000);


let anos = agora.getFullYear() - dataincio.getFullYear();
let meses = agora.getMonth() - dataincio.getMonth();
if (meses < 0) {
    anos--;
    meses += 12;
                }
let dias = agora.getDate() - dataincio.getDate();
if (dias < 0) {
    meses--;
    const ultimoDiaMesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
    dias += ultimoDiaMesAnterior;
                }
const textoano = (anos === 1) ? "ano" : "anos";
const textomes = (meses === 1) ? "mês" : "mêses";
const textodia = (dias === 1) ? "dia" : "dias";
const textohora = (horastotal === 1) ? "hora" : "horas";
const textomin = (minutostotal === 1) ? "minuto" : "minutos";
const textoseg = (segundostotal === 1) ? "segundo" : "segundos";

const tempoJuntos = document.getElementById("Tempojuntos");


tempoJuntos.innerHTML = `
        <h2>NOSSO TEMPO</h2>
        <p id="tempo">
            <span><b>${anos}</b> ${textoano} </span><br>
            <span><b>${meses}</b> ${textomes} </span>
            <span><b>${dias}</b> ${textodia}<br> </span>
            <span><b>${horastotal}</b> ${textohora} </span>
            <span><b>${minutostotal}</b> ${textomin} e </span>
            <span><b>${segundostotal}</b> ${textoseg}</span>
        </p>
    `;


}

setInterval(relogio, 1000);
relogio();


