// //3 MODI PER SCRIVERE LA STESSA COSA --> 1,2 USANDO JQUERY - 3 USANDO JAVASCRIPT:

// $( document ).ready(function(){
//     console.log("ciao");
// });


// $(document).ready(() => {
//     console.log("ciao");
// })


// window.addEventListener('load', () => console.log("ciao"));

// ///////////////////////////////////////////////////////////////////////////////////////////////////////

// //MANIPOLARE IL DOM CON 1,2-JQUERY E 3,4-JS:

// // $( document ).ready(function(){  //prendo l'elemento per ID
// //     $('#ciao').html('pluto');
// // });

// $( document ).ready(function(){  //prendo l'elemento per tag name

//     console.log('JQUERY', $('p').html('pluto'));

//     $('p').html('pluto');

//     $('.container p').html('paperino'); //prendo il p contenuto nel div con classe 'container'
// });



// // window.addEventListener('load', () =>{   //prendo l'elemento per ID
// //     document.getElementById('ciao').innerHTML = 'pippo';
// // });

// window.addEventListener('load', () =>{  //prendo l'elemento per tag name

//     console.log('JAVASCRIPT', document.querySelector('p'));

//     document.querySelector('p');
//     document.getElementsByTagName('p');

//     [...document.getElementsByName('p')].forEach(p => p.innerHTML = 'paperino');
//     [...document.querySelectorAll('p')].forEach(p => p.innerHTML = 'paperino');  //prendo tutti i p del documento
// });

// ///////////////////////////////////////////////////////////////////////////////////////////////////////


// $(document).ready(() => { //al click sui paragrafi, scompaiono dalla pagina
//     $('p').on('click', function () {
//         $('p').hide();
//     })
// })


// window.addEventListener('load', () => { 

//     document.getElementById('ciao').className = 'ciao';  //metodo js per assegnare una classe
//     document.getElementById('ciao').className = document.getElementById('ciao').className + ' mondo'; //vecchio metodo js per assegnare una ULTERIORE classe

//     document.getElementById('ciao').classList.add('ciaone');  //nuovo metodo js per assegnare una ULTERIORE classe
// })

////////////////////////////// ESERCITAZIONE /////////////////////////////////////////////////////////////////////////


//evidenzio tutti quelli con lo stesso nome on mouse over
//elimino tutti quelli con lo stesso nome on click

let content;

$.ajax({
    type: "GET", //rest Type
    dataType: 'json', //mispelled
    url: "./assets/array.json",
    async: false,
    contentType: "application/json; charset=utf-8",
    success: function (data) {
        content = data;
    }
});



$(document).ready(function(){
    for (const cont of content) {
        $(".par").append('<div class="' + cont + '">' + cont + '</div>'); 
        if (cont === 'clarabella') {
            $('.clarabella').on('click', function () {
                $('.clarabella').hide();
            })
        }
        if (cont === 'pippo') {
            $('.pippo').on('click', function () {
                $('.pippo').hide();
            })
        }
        if (cont === 'pluto') {
            $('.pluto').on('click', function () {
                $('.pluto').hide();
            })
        }
        if (cont === 'paperina') {
            $('.paperina').on('click', function () {
                $('.paperina').hide();
            })
        }
    }  
    
}); 



$(document).ready(function() {
    if ('.clarabella') {
        $(".clarabella").hover(function() {
            $(this).css("background", "#F00");
        },
        function(){
            $(this).css("background", "#FFF");
        })
    }
    if ('.pippo') {
        $(".pippo").hover(function() {
            $(this).css("background", "##ffff00");
        },
        function(){
            $(this).css("background", "#FFF");
        })
    }
    if ('.pluto') {
        $(".pluto").hover(function() {
            $(this).css("background", "#0080ff");
        },
        function(){
            $(this).css("background", "#FFF");
        })
    }
    if ('.paperina') {
        $(".paperina").hover(function() {
            $(this).css("background", "#40ff00");
        },
        function(){
            $(this).css("background", "#FFF");
        })
    }
});
