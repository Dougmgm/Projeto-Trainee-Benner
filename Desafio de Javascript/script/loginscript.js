const entrarTela = document.querySelector("#loginEntrada")
const botao = document.querySelector('#loginEntrada');

function limpar(){
    inputUsuario.value = ''
    inputSenha.value = ''
}

botao.addEventListener('click', ()=>{
    let dadosLogin = async function (){
        
        const nomeUser = document.querySelector('#inputUsuario')
        const senhaUser = document.querySelector('#inputSenha')
        let x = false

        let dadosFetch = await fetch("./script/usuario.json");

        let loginJson = await dadosFetch.json();

        for(i of loginJson.users) {
            
                if(nomeUser.value === i.user && senhaUser.value === i.pws){
                    x = true
                    document.querySelector('#formulario').submit();
                } 
        }    

        if(x == false){
            alert('Favor, preencher com os dados corretos')
            limpar()
        }
    }

    dadosLogin();
})

