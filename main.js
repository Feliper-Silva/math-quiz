let quiz = [
    {
        pergunta: 'Quanto é 20+20X3 ?',
        alternativas: ['80','4','6','10'],
        correta: '80',
    },
    {
        pergunta:'Quanto é 32x9 ?',
        alternativas: ['121','120','288','380'],
        correta: '288',
    },
    {
        pergunta:'Quanto é 14x5 ?',
        alternativas: ['17', '50', '70', '49'],
        correta: '70',
    },
    {
        pergunta:'Quanto é 2x6 ?',
        alternativas: ['12', '8','10','13'],
        correta:'12',
    },
    {
        pergunta:'Quanto é 20x54 ?',
        alternativas: ['402','650','1.160','1.080'],
        correta:'1.080',
    }
];
let contaPerguntas=0;
let pontosdoJogo=0;
function exibePerguntas(){
    if(contaPerguntas<quiz.length){
        $("#respostas").append("<h1>"+quiz[contaPerguntas].pergunta+"</h1>");
        for (let alt in quiz[contaPerguntas].alternativas) {
            $("#respostas").append("<input value=\""+quiz[contaPerguntas].alternativas[alt]+"\" type=\"radio\" name=\"questao\">"  + quiz[contaPerguntas].alternativas[alt]);
            $("#respostas").append("<br>");
        }
    }
    else {
        $("#respostas").append("<h1>Você ganhou "+pontosdoJogo+" pontos, meus parabéns!</h1>");
    };
};
function verificaEscolha(){
    let escolhida = $("input:checked").val();
    if (escolhida==quiz[contaPerguntas].correta){
        pontosdoJogo++;
        $('#acertoeErro').css(
            {
                color: 'green'
        });
        $('#acertoeErro').text('Acertou');
    }
    else {
        $('#acertoeErro').css(
            {
                color: 'red'
        });
        $('#acertoeErro').text('Errouuu, Tente na proxima')
    }
    $("#respostas").html("");
    contaPerguntas++;
    exibePerguntas();
};
//chamadas de funções, para organizar a página antes da interação do usuário
reinicia();
fechar();
function inicia(){
    $("#reinicia").show();
    $("#resposta").show();
    $("#inicia").hide();
    $('nav').hide();
    exibePerguntas();
}
function reinicia(){
    $("#inicia").show();
    $('nav').show();
    $("#resposta").hide();
    $("#reinicia").hide();
    $("#respostas").html('');
    $('#acertoeErro').html('');
    contaPerguntas=0;
    pontosdoJogo=0;
};
function autores(){
    $("#autores").show();
    $("#fechar").show();
};
function sobre(){
    $("#sobre").show();
    $("#fechar").show();
};
function fechar(){
    $("#autores").hide();
    $("#sobre").hide();
    $("#fechar").hide();
};
