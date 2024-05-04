const startbtn = document.getElementById('startbtn');
const pausebtn = document.getElementById('pausebtn');
const resetbtn = document.getElementById('resetbtn');
const resumebtn = document.getElementById('resumebtn');
startbtn.disabled = false ;
pausebtn.disabled = true ;
resumebtn.disabled = true ;
resetbtn.disabled = true ;

const displaySection = document.getElementById('displaySection') ;
const text = document.getElementById('text') ;

let breakSession = false ;
let hours = 0 , minutes = 25 , seconds= 0 , milliseconds=0 ;

//fonction pour mettre a jour l'affichage
function updateDisplay()
{
    displaySection.innerText = `${hours}: ${minutes}: ${seconds}: ${milliseconds}` ;
}


//je crée une fonction pour decrémenter
function decrement()
{
    if (milliseconds === 0)
    {
        if(seconds ===0)
        {
            if(minutes ===0)
            {
                if (hours ===0)
                {   
                    if (breakSession === false)
                    {
                        clearInterval(intervalID) ;
                        hours = 0 , minutes = 5 , seconds = 0 , milliseconds = 0 ;
                        text.innerText = 'Break Session' ;
                        displaySection.innerText = `${hours}: ${minutes}: ${seconds}: ${milliseconds}` ;
                        startbtn.disabled = false ;
                        pausebtn.disabled = true ;
                        resumebtn.disabled = true ;
                        resetbtn.disabled = true ;
                        breakSession = true ;
                    }
                    else
                    {
                        clearInterval(intervalID) ;
                        hours = 0 , minutes = 25 , seconds = 0 , milliseconds = 0 ;
                        text.innerText = 'Work Session' ;
                        displaySection.innerText = `${hours}: ${minutes}: ${seconds}: ${milliseconds}` ;
                        startbtn.disabled = false ;
                        pausebtn.disabled = true ;
                        resumebtn.disabled = true ;
                        resetbtn.disabled = true ;
                    }
                }
                else 
                {
                    hours--;
                    minutes = 59 ;
                }
            }
            else
            {
                minutes -- ;
                seconds = 59 ;
            }

        }
        else
        {
            seconds -- ;
            milliseconds = 99 ;
        }
    }
    else milliseconds -- ;
    updateDisplay() ;
}

//je crée les focntions pour les bouttons 

function start()
{
    // je créé un interval de 1ms pour la fonction decrémenter
    intervalID = setInterval(decrement , 10) ;

    startbtn.disabled = true ;
    pausebtn.disabled = false ;
    resumebtn.disabled = true ;
    resetbtn.disabled = false ;

}
function reset()
{
    clearInterval(intervalID) ;
    hours = 0 , minutes = 25 , seconds=0 , milliseconds=0 ;
    updateDisplay() ;
    startbtn.disabled = false ;
    pausebtn.disabled = true ;
    resumebtn.disabled = true ;
    resetbtn.disabled = true ;

}
function pause()
{
    clearInterval(intervalID) ;
    updateDisplay() ;
    startbtn.disabled = true ;
    pausebtn.disabled = true ;
    resumebtn.disabled = false ;
    resetbtn.disabled = false ;

}

function resume()
{
    intervalID = setInterval(decrement , 10) ;
    updateDisplay() ;
    startbtn.disabled = true ;
    pausebtn.disabled = false ;
    resumebtn.disabled = true ;
    resetbtn.disabled = false ;

}