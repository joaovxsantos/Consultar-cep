let submit = document.querySelector('#submit')


submit.addEventListener('click', diglet => {
    
    let a = document.querySelector('#number').value
    
    fetch(`https://viacep.com.br/ws/${a}/json/`).then(resposta => {
    return resposta.json()
}).then(body => {
    let span = document.querySelector('#span')
    let span2 = document.querySelector('#span2')
    let span3 = document.querySelector('#span3')
    let span4 = document.querySelector('#span4')
    let div = document.querySelector('.answer')
    
    div.style = 'display:flex'
    
    span.innerHTML = body.logradouro
    span2.innerHTML = body.bairro
    span3.innerHTML = body.localidade + '/' + body.uf
    span4.innerHTML = body.cep
})
})


