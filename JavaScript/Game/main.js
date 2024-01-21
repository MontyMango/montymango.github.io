let numText = document.getElementById("num");
let nice = document.getElementById("nice")
let button = document.getElementById("newButton");



function random_int()   {
    return num = Math.floor(Math.random() * 100);
}

function sleep(ms)    {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function start_timer()  {
    await sleep(3000);
    numText.innerHTML = "A random number will appear here";

}

button.addEventListener("click", function() {
    numText.innerHTML = random_int();
    if(numText.innerHTML == 69)  nice.style.color = "green";
    else nice.style.color = "white";
});


button.addEventListener("mouseover", function() {
    button.style.color = "white";
    button.style.backgroundColor = "red";
    button.innerHTML = "Click me! Get your number!";
})

button.addEventListener("mouseout", function() {
    button.style.color = "black";
    button.style.backgroundColor = "white";
    button.innerHTML = "Find your new number!"
});

button.addEventListener("mousedown", function() {
    button.style.color = "white";
    button.style.backgroundColor = "green";
    button.innerHTML = "Here we goooo!";
    start_timer();
});

button.addEventListener("mouseup", function()   {
    button.innerText = "Enjoy your number!";
})