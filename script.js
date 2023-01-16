let submit = document.querySelector('#submit')


submit.addEventListener('click', diglet => {
    
    let a = document.querySelector('#number').value
    
    fetch(`https://viacep.com.br/ws/${a}/json/`).then(resposta => {
    return resposta.json()
}).then(body => {
    let a = document.querySelector('#span')
    //  a.innerHTML = body.bairro
   console.log(body.bairro, body.cep)
})
})


