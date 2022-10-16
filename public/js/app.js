


// const display = document.getElementById('display');
const buttons =  Array.from(document.getElementsByClassName('button'));
const display = document.getElementById("input").value;
buttons.map(button =>{
    button.addEventListener('click', (e) =>{

        switch(e.target.innerText){
         
                
            default:
                
                document.getElementById("input").value += e.target.innerText;
                console.log(display.innerHtml);

        }
    })
})

function genere(){
    let off = document.getElementById("int");
    let on = document.getElementById("int2");
    off.style.display = 'none';
    on.style.display = 'initial';

    
}

function done(){
    let off = document.getElementById("intmain");
    off.style.display = 'none';
}

