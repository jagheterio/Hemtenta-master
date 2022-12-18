function checkValue(){

    let inputValue = document.querySelector(".input").value;

    if(!isNaN(inputValue)){
        document.querySelector("#result").textContent = Math.pow(inputValue,2);
    }else{
        document.querySelector("#result").textContent = "The value is not a number.";
    }
}