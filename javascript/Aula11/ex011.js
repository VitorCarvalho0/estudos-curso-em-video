var idade = 15

if (idade < 18) {
    console.log('Você é menor de idade, e não pode tirar a CNH')
} else {
    if (idade <= 65) {
        console.log('Você é maior de idade e pode tirar a CNH')
    } else {
        console.log('Você tem uma idade avançada e precisa receber uma autorização para ter CNH')
    }
}

/* var idade = 26

if (idade < 16) {
    console.log('Não pode votar')
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatório')
} */