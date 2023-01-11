const txt = document.querySelector('.container h1');

const data = new Date; //instanciando o objeto DATE

txt.innerHTML = formatarData();

 /* Jeito Fácil 
 
 txt.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});
 
 */

function formatarData(){

    const formatarDia = data.getDay();
    const formatarMes = data.getMonth();
    const saberHorario = adicionarZero(data.getHours());

    const dia = getDia(formatarDia);
    const mes = getMes(formatarMes);
    const horario = getHorario(saberHorario);
    const ano = adicionarZero(data.getFullYear());
    const horas = adicionarZero(data.getHours());
    const minutos = adicionarZero(data.getMinutes());
    const segundos = adicionarZero(data.getSeconds());

    
    return (`${dia}, ${data.getDate()} de ${mes} de ${ano} as ${horas}:${minutos}:${segundos} da ${horario}`);
    

}

function getMes(numMes){

    mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro",
    "Outubro", "Novembro", "Dezembro"];

    return mes[numMes];

    /*
    
    let nomeMes;
    switch(numMes){

        case 1:
            nomeMes = "Janeiro";
            return nomeMes;
        case 2:     
            nomeMes = "Fevereiro";
            return nomeMes;
        case 3:     
            nomeMes = "Março";
            return nomeMes;
        case 4:     
            nomeMes = "Abril";
            return nomeMes;
        case 5:     
            nomeMes = "Maio";
            return nomeMes;
        case 6:     
            nomeMes = "Junho";
            return nomeMes;
        case 7:     
            nomeMes = "Julho";
            return nomeMes;
        case 8:     
            nomeMes = "Agosto";
            return nomeMes;
        case 9:     
            nomeMes = "Setembro";
            return nomeMes;
        case 10:     
            nomeMes = "Outubro";
            return nomeMes;
        case 11:     
            nomeMes = "Novembro";
            return nomeMes;
        case 12:     
            nomeMes = "Dezembro";
            return nomeMes;

    }*/

}

function getDia(numDia){

    dia = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    
    return dia[numDia];


   /* 
   let nomeDia;

    switch(numDia){

        case 0:
            nomeDia = "Domingo";
            return nomeDia;
        case 1:     
            nomeDia = "Segunda-Feira";
            return nomeDia;
        case 2:     
            nomeDia = "Terça-Feira";
            return nomeDia;
        case 3:     
            nomeDia = "Quarta-Feira";
            return nomeDia;
        case 4:     
            nomeDia = "Quinta-Feira";
            return nomeDia;
        case 5:     
            nomeDia = "Sexta-Feira";
            return nomeDia;
        case 6:     
            nomeDia = "Sábado";
            return nomeDia;

    }
*/

}

function getHorario(horas){

    let horario;
    if (horas >= 05 && horas < 12){

        horario = "Manhã"
        return horario;

    }
    if (horas >= 12 && horas < 18){

        horario = "Tarde"
        return horario;

    }
    if (horas >= 18 && horas < 0){

        horario = "Noite"
        return horario;

    }
    if (horas >= 00 && horas < 05){

        horario = "Madrugada"
        return horario;

    }

}

function adicionarZero(num){

    return num >= 10 ? num : `0${num}`

}
