const button = document.getElementById('bselect')
button.addEventListener("click", select)


function select(){
    let btnBD = document.getElementById('BD')
    let btnDB = document.getElementById('DB')
    let tnum = document.getElementById('num').value
    if(btnBD.checked){
        let i = tnum.length
        let sum = 0
        while(i--){
            n = Number(tnum.charAt(i))
            sum += n*(2**(tnum.length-i-1))
        }
   
        let result = document.createElement('div')
        result.innerHTML = `O decimal de ${tnum} é: ${sum}`
        document.getElementById('res').appendChild(result)
        result.style.borderRadius = '10px'
        result.style.border = 'solid 1px rgb(102, 100, 231)';
        result.style.width = '400px'
        result.style.margin = 'auto'
        result.style.marginTop = '10px' 

    }
   
    else if(btnDB.checked){
        let res = ''
        let num = Number(tnum)
        console.log(num)
        while(num>0){
            res += ((parseInt(num%2).toString()))
            num = parseInt(num/2)
        }
        
        let j = res.length
        let aux = ''
        while(j--){
            aux += res[j]
        }
        let fim = document.createElement('div')
        fim.innerHTML = `O Binário de ${tnum} é: ${aux}`
        document.getElementById('res').appendChild(fim)
        fim.style.borderRadius = '10px'
        fim.style.border = 'solid 1px rgb(102, 100, 231)';
        fim.style.width = '400px'
        fim.style.margin = 'auto'
        fim.style.marginTop = '10px' 
    }

}