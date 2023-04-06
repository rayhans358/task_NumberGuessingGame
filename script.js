alert(`Selamat datang di game tebak angka.
Disini kamu akan menebak angka 1 - 3,
dan kamu akan bermain dalam 5 ronde.
Player yang berhasil mengumpulkan score terbanyak, maka dia yang menjadi pemenang.
SELAMAT BERMAIN!`);

let scoreP1 = 0;
let scoreP2 = 0;
let ronde = 1;
let box = true;

// Input player name
let nameP1;
let nameP2;
while (!nameP1 || !nameP2 || nameP1 === nameP2) {
  nameP1 = prompt(`Player 1, Please enter your name:`);
  nameP2 = prompt(`Player 2, Please enter your name:`);
  if (nameP1 === nameP2) {
    alert(`The name is already in use. Please enter another name.`);
  }
}

while (box) {
  let player1 = parseInt(prompt(`${nameP1}, Please enter your number :`));
  let player2 = parseInt(prompt(`${nameP2}, Please enter your number :`));

  let random = numRandom();
  let repeat = validate(player1, player2);
  if (!repeat) {
    box = window.confirm(`Try again?`);
  } else {
    if (player1 !== random && player2 !== random) {
      alert(`None of the answers are correct, so the result is a draw`);
    } else {
      if (player1 === random) {
        alert(`${nameP1} win`);
        scoreP1++;
      }
      if (player2 === random) {
        alert(`${nameP2} win`);
        scoreP2++;
      }
    }

    alert(`
    Nilai yang dicari: ${random}
    -----------------------------------
    - ${nameP1} = ${scoreP1}
    - ${nameP2} = ${scoreP2}`);
    ronde++;

    if (ronde <= 5) {
      box = window.confirm(`Do you want to continue to round ${ronde}?`);
    } else {
      if (scoreP1 > scoreP2) {
        alert(`Nice score ${nameP1}`);
        box = false;
      } else if (scoreP1 < scoreP2) {
        alert(`Nice score ${nameP2}`);
        box = false;
      } else {
        alert(`Good game well played`);
        ronde = 1;
        scoreP1 = 0;
        scoreP2 = 0;
        box = window.confirm(`Want to play again?`);
      }
    }
  }
}

function validate(gPlayer1, gPlayer2) {
  if (isNaN(gPlayer1) || isNaN(gPlayer2)) {
    alert(`One of the players had not guessed yet`);
    return false;
  }

  if (gPlayer1 === gPlayer2) {
    alert(`Guesses can't be the same`);
    return false;
  }

  if (gPlayer1 < 1 || gPlayer2 < 1) {
    alert(`Guesses can't be less than 1`);
    return false;
  }

  if (gPlayer1 > 3 || gPlayer2 > 3) {
    alert(`Guesses can't be greater than 3`);
    return false;
  }

  return true;
}

function numRandom() {
  const range = [1, 2, 3];
  let isNotRandom = true;
  let random;
  while (isNotRandom) {
    random = Math.floor(Math.random() * 10);
    let find = false;
    for (let i = 0; i < range.length; i++) {
      if (random === range[i]) {
        find = true;
        break;
      }
    }
    if (find) {
      isNotRandom = false;
    }
  }
  return random;
}

console.log(numRandom());