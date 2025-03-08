function numberGuessingGame() {
    var num = Math.floor(Math.random() * 10) + 1;
  
    alert("Guess the number from 1 to 10: ");
  
    let count = 3;
  
    while (count > 0) {
      let guessNumber = +prompt(
        `You have ${count} attempts left. Please Guess the Number : `
      );
      if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 10) {
        alert("Please Enter a valid number between 1 and 10!");
        continue;
      }
      if (guessNumber === num) {
        alert("You Guess The Right Number ");
        break;
      } else if (guessNumber < num) {
        alert("Too Low");
      } else if (guessNumber > num) {
        alert("Too High");
      }
      count--;
      if (count === 0) {
        alert(`You have reached the limit. The right number is ${num}`)
      }
    }
  }
  
  numberGuessingGame()