document.addEventListener('DOMContentLoaded', function(){

    document.querySelectorAll('.sair').forEach(function(button){

        button.onclick = function(){

            document.querySelectorAll('.sair');
            alert('teste');
            console.log('teste');
        }
    })
});

