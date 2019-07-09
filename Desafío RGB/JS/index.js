//onload:
$(document).ready(function () {


//variables


let colorTexto = $('#rbgText')

let bt1 = $('#bt1')
let bt2 = $('#bt2')
let bt3 = $('#bt3')



//initialize

asignaColorBoton(bt1)
asignaColorBoton(bt3)
asignaColorBoton(bt2)

colorTexto.html('RGB:' + '(' + color + ')')


})


//constants


//bottones





//validations & events


//Functions

colorAleatorio = function(){
    return [(parseInt(Math.random()* (256 - 0))),(parseInt(Math.random()* (256 - 0))),(parseInt(Math.random()* (256 - 0)))]
}

comparaColor = function () {
 return true
 
}

asignaColorBoton = function(bt){

    color = colorAleatorio() 

return bt.css({backgroundColor: 'rgb('+color+')'})

}


//Render Functions

//Data Manipulation

//Local Storage Functions

