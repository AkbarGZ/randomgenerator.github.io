function generateNumber() {
    // Generate a random number between 1 and 100
    const randomNum = Math.floor(Math.random() * 100) + 1;
    
    // Display the random number on the page
    document.getElementById('number-display').textContent = randomNum;
}
