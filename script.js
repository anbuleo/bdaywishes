// function changeMessage() {
//     var messages = [
//         "Wishing you a day filled with joy and laughter!",
//         "May this year be the best one yet!",
//         "Happy Birthday! Enjoy every moment of your special day!",
//         "May all your wishes come true!",
//         "Cheers to another year of amazing adventures!",
//     ];

//     var randomIndex = Math.floor(Math.random() * messages.length);
//     var birthdayMessage = document.getElementById("birthdayMessage");

//     // Remove and re-add the 'animate' class to trigger the animation
//     birthdayMessage.classList.remove("animate");
//     void birthdayMessage.offsetWidth; // Force reflow
//     birthdayMessage.classList.add("animate");

//     birthdayMessage.textContent = messages[randomIndex];

//     // Play the music
//     var birthdayMusic = document.getElementById("birthdayMusic");
//     birthdayMusic.play();
// }
// Initialize the birthdate
var birthDate = new Date("1999/01/18"); // Replace with your birthdate in "YYYY-MM-DD" format



function calculateAge() {
    var currentDate = new Date();
    var age = currentDate.getFullYear() - birthDate.getFullYear();

    if (
        currentDate.getMonth() < birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    return age;
}

function updateAgeCounter() {
    var ageElement = document.getElementById("age");
    var minutesElement = document.getElementById("minutes");
    var secondsElement = document.getElementById("seconds");

    var currentDate = new Date();
    var elapsedTime = currentDate - birthDate;
    var seconds = Math.floor(elapsedTime / 1000);
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;

    ageElement.textContent = calculateAge();
    minutesElement.textContent = minutes;
    secondsElement.textContent = remainingSeconds;
}

function changeMessage() {
    var messages = [
        "Wishing you a day filled with joy and laughter!",
        "May this year be the best one yet!",
        "Happy Birthday! Enjoy every moment of your special day!",
        "May all your wishes come true!",
        "Cheers to another year of amazing adventures!",
    ];

    var randomIndex = Math.floor(Math.random() * messages.length);
    var birthdayMessage = document.getElementById("birthdayMessage");

    birthdayMessage.classList.remove("animate");
    void birthdayMessage.offsetWidth;
    birthdayMessage.classList.add("animate");

    birthdayMessage.textContent = messages[randomIndex];

    var birthdayMusic = document.getElementById("birthdayMusic");
    birthdayMusic.play();

    updateAgeCounter();
}

updateAgeCounter();
