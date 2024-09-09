// Sélection des btns
const buttons = document.querySelectorAll('.btn');
const btnDay = document.getElementById('btn-day');
const btnNight = document.getElementById('btn-night');
// Sélection de la couleur de fond
const bgHexCode = document.getElementsByClassName('bg-hex-code');
const container = document.getElementsByClassName('container')[0];


//clique sur btn day = écouteur

btnDay.addEventListener('click', function() {
    console.log('clicked btnDay!');
    // change le background-color => background-image: --light-grey;
    document.body.style.backgroundColor = 'var(--light-grey)';
    //change color en =>  color: --dark-purple;
    document.body.style.color = 'var(--dark-purple)';
    
    //change le background-color de container
    container.style.backgroundColor = 'var(--ligth-purple)';
    //change le color de container
    container.style.color = 'var(--dark-purple)';
    //  content: "This is the day mode";
    container.innerHTML ='This is the day mode';
});

//--------------------------------------------------------------

//clique sur btn night
btnNight.addEventListener('click', function() {
    console.log('clicked btnNight!');
    // change le background-color => background-image: --dark-purple;
    document.body.style.backgroundColor = 'var(--dark-purple)';
    //change color en =>  color: --light-grey;
    document.body.style.color = 'var(--light-grey)';
    //change le background-color de container
    container.style.backgroundColor = 'var(--grey)';
    //change le color de container
    container.style.color = 'var(--light-grey)';
    // content: "This is the night mode";
    container.innerText = "This is the night mode";
});


