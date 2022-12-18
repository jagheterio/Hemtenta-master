// Selectors
// const list = document.querySelector('.list')

// Event Listners
// list.addEventListener('click', createList)

function createList(){

    console.log("function starts")

    var randomList = [];
    var num = 101;
    var length = Math.floor(Math.random()*(10)+1);

    for(var i = 0; i < length; i++){
        randomList.push(Math.floor(Math.random()*num));
    }

    console.log(randomList)
    
    document.querySelector("#resultat").textContent = randomList;

    
}
