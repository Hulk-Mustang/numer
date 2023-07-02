const green = document.getElementById('green')
const inp1 = document.getElementById('oner')
const inp2 = document.getElementById('twoner')
const submitBtn = document.getElementById('lean')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplicationBtn = document.getElementById('ym')
const divisionBtn = document.getElementById('del')
let action = '!'

plusBtn.onclick= function (){
    action = '+'
}

minusBtn.onclick= function (){
    action = '-'
}

multiplicationBtn.onclick = function(){
    action = '*'
}

divisionBtn.onclick = function(){
    action = ':'
}

function printResualt(res){
    if (res < 0) {
        green.style.color = 'rgb(226, 55, 55)'
    }else if(res == 0){
        green.style.color = 'darkorange'
    } 
    else {
        green.style.color = 'rgb(55, 147, 55)'
    }
    green.textContent = res
}

submitBtn.onclick = function(){
    if(action == '+'){
    const sum = Number(inp1.value) + Number(inp2.value)
    printResualt(sum)
    } else if(action == '-'){
        const sum = Number(inp1.value) - Number(inp2.value)
        printResualt(sum)
        }else if(action == '*'){
            const sum = Number(inp1.value) * Number(inp2.value)
            printResualt(sum)
        }else if(action == ':'){
            const sum = Number(inp1.value) / Number(inp2.value)
            printResualt(sum)
        }
}
