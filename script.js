let iptn = document.getElementById('iptn')
let n = Number(iptn.value)
let vetor = []

function adicionar() { //Ao clicar em adicionar
    let res = document.getElementById('res')
    if (iptn.value.length == 0) { //Se o campo numérico estiver vazio
        window.alert(`Impossível adicionar! Campo inválido`)
    } else {
        n = Number(iptn.value)
        if (n <= 0 || n > 100) { //Se o valor estiver fora do intervalo 1 e 100
            window.alert(`Número fora do intervalo`)
            iptn.value = ''
        } else {
            let sel = document.getElementById('sel')
            let opt = document.createElement('option')
            opt.text = `Valor ${n} adicionado`
            if (vetor.indexOf(n) == -1) { //Se o valor não existir no vetor
                vetor.push(n) //Adiciona o valor ao vetor
                sel.appendChild(opt) //Adiciona a mensagem ao <select>
                res.innerHTML = ''
            } else {
                window.alert(`Valor já adicionado`)
            }
            iptn.value = ''
        }
    }
}

function finalizar() { //Ao clicar em finalizar
    if (vetor.length == 0) { //Se nenhum valor tiver sido adicionado ao vetor
        window.alert(`Adicione valores antes de finalizar!`)
    } else {
        vetor.sort(function(a,b) { //Organiza o vetor em ordem crescente
            if (a > b) return 1;
            if (a < b) return -1;
            return 0;
        });
        res.innerHTML = `<p>Ao todo, temos ${vetor.length} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${vetor[vetor.length-1]}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${vetor[0]}</p>`
        var soma = 0
        for (let pos in vetor) { //Faz a soma de todos os valores do vetor
            soma += vetor[pos]
        }
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        let média = soma / vetor.length
        res.innerHTML += `<p>A média dos valores digitados é ${média.toFixed(1).replace('.', ',')}</p>`    
    }
}