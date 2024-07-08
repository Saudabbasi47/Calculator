function clearDisplay(){
    document.getElementById("result").value=''
    
}
function deleteDigit(){
    let display=document.getElementById('result')
    display.value=display.value.slice(0,-1)
}

function appendElement(element){
    document.getElementById('result').value+=element;
}
function result(){
    try {
        let display=document.getElementById('result')
        display.value=eval(display.value)
    } catch {
        display.value="Error"
        
    }
}