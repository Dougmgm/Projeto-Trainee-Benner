
window.onload=function(){
    const botao = document.getElementById('loginEntrada');
    botao.addEventListener('click', function(){
        if(loginUsuario === "Marcelo" && loginSenha === "senha"){
            alert("senha ok");
        } else {
            alert("not ok");
        }
    })
}
