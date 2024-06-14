AOS.init();

const dataDoEvento = new Date("junho 22, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    //A cada 1 seg. a const agora será atualizada//
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    //Verificar a distancia do timeStampDoEvento para o timeStampAtual//
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
    //Buscando os dias até o evento//
    const diasAteOEvento = Math.floor(distanciaAteOEvento / (1000 * 60 * 60 * 24))
    const horasAteOEvento = Math.floor((distanciaAteOEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % (1000 * 60 * 60) / (1000 * 60)))
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % (1000 * 60) / (1000)))

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    if(diasAteOEvento < 0){
        clearInterval(contaAsHoras)
        document.getElementById('contador').innerHTML =  'Evento expirado!'
    }
}, 1000)