let alunos = ["Ana", "Maria", "João", "Marcelo", "Felipe", "Carlos"]
alunos.sort()

// for(let perc in alunos){
//     console.log(`Os alunos da escola são ${alunos[perc]}`)
// }


// for(let ordem in alunos){
//     console.log(`A ordem dos alunos da escola é: ${alunos[ordem]}`)
// }

alunos.sort()

let perc = alunos.indexOf('Marcia')
if(perc == -1){
    console.log('O valor não foi encontrado')
} else{
    console.log(`O valor está na posição ${perc}`)
}




