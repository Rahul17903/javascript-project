const inputdata = document.querySelectorAll('.btn')
const result = document.getElementById("result")
let expression = ""
const isOperator = (char) => ['+', '-', '*', '/', '%'].includes(char);
inputdata.forEach(button => {
    button.addEventListener("click",function (){
        let value = this.innerText || this.getAttribute("value") 
        if(value === 'AC'){
            expression = ""
            result.innerText = expression
        }
        else if(value==='DEL'){
            expression = expression.slice(0,-1)
            result.innerText = expression
        }
        else if(value === '='){
            try {
                expression = eval(expression).toString()
                result.innerText = expression
            } catch (error) {
                console.log(error.message)
            }
        }
        else{
            if (isOperator(value) && isOperator(expression.slice(-1))) {
                return;
            }
            expression += value
            result.innerText = expression || "0"
        }
    })
});


console.log("good morning")