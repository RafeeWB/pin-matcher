function generatePin (){
    var upperValue = 9999;
    var lowerValue = 1000;
    var resultValue = Math.ceil( Math.random() * (upperValue - lowerValue) + lowerValue)
    document.getElementById("pin").value = resultValue
}
function showNumber (x){
    var display = document.getElementById("firstForm")
    display.value = document.getElementById("firstForm").value + x;
}
function submitButton (){
    if(document.getElementById("pin").value === document.getElementById("firstForm").value){
        document.getElementById("notify2").style.display = "block"
        document.getElementById("notify1").style.display = "none"
    }
    else{
        document.getElementById("notify1").style.display = "block"
        document.getElementById("notify2").style.display = "none"
    }
}
function clearDisplay (){
    document.getElementById("firstForm").value = null
}
function backspace (){
    document.getElementById("firstForm").value = document.getElementById("firstForm").value.slice(0,-1)
}