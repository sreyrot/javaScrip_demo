$(document).ready(() => {
    $('#recipe').on('change',() =>{
        var recipe = $('#recipe').val();
       choose(recipe);   
    })
})

var choose= (fruits) => {
    switch(parseInt(fruits)){
        case 1:
           getApple();
            break;
        case 2:
           getBanana();
            break;
        case 3:
            getCoconut();
            break;
    }
}

// get apple
var getApple= () => {
    var apple = "I love Apple";
    printOut(apple);
}

// get banana
var getBanana= () => {
    var banana = "I love banana";
    printOut(banana);
}

// get coconut
var getCoconut= () => {
    var coconut = "I love coconut";
    printOut(coconut);
}

// display or print out to html 
var printOut= (out) =>{
    $('#done').html(out);
}