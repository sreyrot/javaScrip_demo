$(document).ready(() => {
    requestApi();
})

// request api

var requestApi = () => {
    $.ajax({
        dataType: "json",
        url: url(),
        success: (data) => getRecipe(data),
        error: () => console.log("error"),
    })
}

// can put function error more to store console

// get url
var url = () => {
    var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    return url;
}

// get recipe loop

var getRecipe = (data) => {
    
    data.recipes.forEach(element => {
    getIngredient(element.ingredients);
  
    });
}

// get ingredient
var getIngredient = (ing) => {
    ing.forEach(item =>{
     computeHTML(item);
    })
}

// compute to html
var computeHTML = (display) => {
    var compute = "";
    compute += `
    <tr>
        <td><img src="${display.iconUrl}" width="250px" height="200px"> </td>
        <td> ${display.name}</td>
        <td> ${display.quantity}</td>
        <td> ${display.unit[0]}</td>
   
    </tr>
    `;
    printOut(compute);
}

// get recipe name
var recipeName = (names) => {
    var recipe = "";
    recipe += `
        <div class="card-header">${names.name}</div>
    `;
    printOut(recipe);
}


// print out 
var printOut = (out) =>{
    $('#ingredient').append(out);
   
}


