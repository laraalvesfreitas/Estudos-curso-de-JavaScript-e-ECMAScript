let amigo = {nome: 'Maria', 
    sexo: 'F', 
    Idade: 22,
     peso: 65.5, 
    engordar(p = 0){
        console.log('Engordou')
        this.peso += p
    }}

    amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)

