const treasure = document.getElementById("treasure");

const messagebox = document.getElementById("message");

const map = document.getElementById("map");

function speak(text){
    const speech = new SpeechSynthesisUtterance(text);

    window.speechSynthesis.speak(speech);
}

function changePosition(type){
    treasure.style.top = "";

    treasure.style.left = "";

    treasure.style.position = type;

    let message = "";

    switch(type){
        case "static": message = "Static: The treasure stays in its usual place";
        break;

        case "relative": treasure.style.top = "20px"; treasure.style.left = "30px"; message = "Relative: The treasure moves a little from where it normally sits";
        break;

        case "absolute": treasure.style.top = "10px"; treasure.style.left = "20px"; message = "Absolute: The treasure moves inside the map box to an exact spot";
        break;

        case "fixed": treasure.style.top = "50px"; treasure.style.left = "100px"; message = "Fixed: The treasure sticks to the screen and doesnt move when you scroll";
        break;
    }

    messagebox.textContent = message;
    speak(message);
}