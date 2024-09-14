let inputEl = document.getElementById("input");
let buttonEl = document.getElementById("button");
let output = document.getElementById("output");

function isVolwer(ch){
    ch = ch.toUpperCase();
    return ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U"
}

buttonEl.addEventListener('click' , ()=>{
    let string = inputEl.value ;
    function countVolwer(str){
        let count = 0 ;
        for(let i = 0 ; i < str.length ; i++){
            if(isVolwer(str[i])){
                count++
            }
        }
        return count
        
    }

    output.innerHTML = `${inputEl.value} has ${(countVolwer(string))} volwes`
})
