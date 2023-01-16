//Botao de de enviar
let submit = document.querySelector('#submit')

//Adicionando evento de click com uma função 
submit.addEventListener('click', diglet)

//Se o enter for acionado, a função diglet sera utilizada
document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        diglet()
    }
})


//Inicio da função que será executada com o clique no botão
function diglet() {


    let a = document.querySelector('#number').value

    //Caso o campo fiquei vazio
    if (!a) {
        alert('Campo vazio!')
    }
    //Caso tenha a quantidade de números inválida
    if (a.length > 0 && a.length < 8) {
        alert('Cep inválido!')
    } if (a.length > 9) {
        alert('Cep inválido!')
    }//Fim if
    else {
        //pegando oq tem dentro da API e passando pra uma função resposta, que retorna ela msm, ou seja oq ta na API
        fetch(`https:viacep.com.br/ws/${a}/json/`).then(resposta => {
            return resposta.json()
        }).then(body => { //pegando uma parte doq tem dentro da API e colocando na função body

            //Caso o número do cep esteja errado
            if (body.erro == true) {
                alert('Cep não encontrado!')
            }//Fim if 

            else { //Colocando as informaçoes nos devidos lugares
                let div = document.querySelector('.answer').style = 'display:flex'
                let span = document.querySelector('#span').innerHTML = body.logradouro
                let span2 = document.querySelector('#span2').innerHTML = body.bairro
                let span3 = document.querySelector('#span3').innerHTML = body.localidade + '/' + body.uf
                let span4 = document.querySelector('#span4').innerHTML = body.cep

            }
        })
    }
}









