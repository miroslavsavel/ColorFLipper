//alert( 'Color flipper!' );

const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

//here we select button by html ID
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

// and add event listener, we will listen to click event
btn.addEventListener('click', function(){
    console.log(document.body);
    // const randomNumber = 2;
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    //we will get random number between 0-3
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    //it takes the number of elements of array colors
    return Math.floor(Math.random() * colors.length);
}