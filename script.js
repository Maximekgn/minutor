startbtn = document.getElementById('startbtn')
pausebtn = document.getElementById('pausebtn')
resetbtn = document.getElementById('resetbtn')

mindisplay = document.getElementById('mindisplay')
secdisplay = document.getElementById('secdisplay')

let min = 2 ;
let sec = 0 ;
let rest = 5 ;


function updatedisplay ()
{
    mindisplay.innerText = min ;
    secdisplay.innerText = sec ;
}

function decrement()
{
    if (sec == 0)
    {
        if (min > 0)
        {
            min-- ;
            sec = 59 ;
        }
    }
    else sec-- ;
    updatedisplay() ;
}


startbtn.addEventListener('click', ()=>
{
    setInterval(decrement, 1000) ; 
})