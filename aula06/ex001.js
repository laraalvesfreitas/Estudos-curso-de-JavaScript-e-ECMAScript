//Formatação de Number
        var n1 = 1543.5.toFixed(2);
        console.log(n1)

        var n2 = 1253.5.toFixed(2).replace('.',',')
        console.log(n2)

        var salario = 1621.0.toLocaleString('pt-BR',{style:"currency", currency:'BRL'})
        console.log(salario)