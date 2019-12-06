$(document).ready(function() {
    $('#add').on('click', function(){
        var input = $('#value').val();
        userInput(input);
        
    })
    $('#low').on('click', function(){
        var input = $('#value').val();
        lowInput(input);
    })
})

function userInput(values){
    var getValue = parseInt(values) + 1;
    if(getValue <= 15){
       $('#value').val(getValue);    
       mal(getValue);
    }
}

function lowInput(values){
    var lowValue = parseInt(values) - 1;
    if(lowValue >= 0  ){

    $('#value').val(lowValue);
    mal(lowValue);
    }
    
}

function mal(mal){
    var mals = mal*5;
    output(mals);
if(mals == 0){
    progres(mals);
}else{
    progres(mals+25);
}
   
}

function output(out){
    $('#result').html(out );
}

function progres(pro){
  $('#p_bar').width(pro + "%");
  $('#p_bar').html(pro + "%");
}

