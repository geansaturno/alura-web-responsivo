$(".menu-abrir").click(function(){
    abrirMenu();
});

$(".menu-fechar").click(function(){
    fecharMenu();
});

$("html").click(function(e){
    if(e.target == $("html")[0]){
        fecharMenu();
    }
});

function fecharMenu(){
    // console.log('fechar menu');
    $('html').removeClass('menu-ativo');
}

function abrirMenu(){
    // console.log('abrir menu');
    $('html').addClass('menu-ativo');
}
