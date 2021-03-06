const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');



function setMovieData(movieIndex,moviePrice) {
    localStorage.setItem('selectedMovieIndex',movieIndex)
    localStorage.setItem('selectedMoviePrice',moviePrice)
}


let ticketPrice = +movieSelect.value

movieSelect.addEventListener('change', e =>{
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex,e.target.value)
    // updateSelectedCount()
})

container.addEventListener('click', e =>{
    if(e.target.classList.contains("seat") && 
    !e.target.classList.contains("occupied")
    ){
        e.target.classList.toggle("selected")
        updateSelectedCount()
    }
})

function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    // console.log(selectedSeats)
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat))
    localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex))
    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice
}

function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if(selectedSeats !== null && selectedSeats.length > 0){
        seats.forEach((seat,index) =>{
            if(selectedSeats.indexOf(index) > -1){
                seat.classList.add('selected')
            }
        })
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex')

    if(selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex
    }
}
populateUI()


function setRandomOccupiedSeats() {
    for(let i = 0; i < 7;i++){
        let index = Math.floor(Math.random() * seats.length)
        
    }
}

updateSelectedCount()