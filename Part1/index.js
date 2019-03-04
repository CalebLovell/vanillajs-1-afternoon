 console.log('Sup');
 let gameProgress = [null, null, null, null, null, null, null, null, null];
 
 function delayAlert(message) {
     setTimeout(() => {
         window.alert(message)
     }, 1)
 }

 function play(val) {
     const player = document.getElementById('player');
     const square = document.getElementById(val);
     
     if (player.innerText === 'X') {
         player.innerText = 'O';
         square.innerText = 'X';
         gameProgress[val] = 'X';
     } else {
         player.innerText = 'X';
         square.innerText = 'O';
         gameProgress[val] = 'O';
     }
     console.log(gameProgress)

    // Play X wins conditions

    if (gameProgress[0] !== null && gameProgress[0] === 'X' && gameProgress[0] === gameProgress[1] && gameProgress[1] === gameProgress[2]) {
        delayAlert('Player X wins the game!')
    } else if (gameProgress[3] !== null && gameProgress[3] === 'X' && gameProgress[3] === gameProgress[4] && gameProgress[4] === gameProgress[5]) {
        delayAlert('Player X wins the game!')
    } else if (gameProgress[6] !== null && gameProgress[6] === 'X' && gameProgress[6] === gameProgress[7] && gameProgress[7] === gameProgress[8]) {
        delayAlert('Player X wins the game!')
    } else if (gameProgress[1] !== null && gameProgress[1] === 'X' && gameProgress[1] === gameProgress[4] && gameProgress[4] === gameProgress[7]) {
        delayAlert('Player X wins the game!')
    } else if (gameProgress[2] !== null && gameProgress[2] === 'X' && gameProgress[2] === gameProgress[5] && gameProgress[5] === gameProgress[8]) {
        delayAlert('Player X wins the game!')
    } else if (gameProgress[0] !== null && gameProgress[0] === 'X' && gameProgress[0] === gameProgress[4] && gameProgress[4] === gameProgress[8]) {
        delayAlert('Player X wins the game!')
    } else if (gameProgress[2] !== null && gameProgress[2] === 'X' && gameProgress[2] === gameProgress[4] && gameProgress[4] === gameProgress[6]) {
        delayAlert('Player X wins the game!')
    } 

    // Player O wins conditions

      else if (gameProgress[0] !== null && gameProgress[0] === 'O' && gameProgress[0] === gameProgress[1] && gameProgress[1] === gameProgress[2]) {
        delayAlert('Player O wins the game!')
    } else if (gameProgress[3] !== null && gameProgress[3] === 'O' && gameProgress[3] === gameProgress[4] && gameProgress[4] === gameProgress[5]) {
        delayAlert('Player O wins the game!')
    } else if (gameProgress[6] !== null && gameProgress[6] === 'O' && gameProgress[6] === gameProgress[7] && gameProgress[7] === gameProgress[8]) {
        delayAlert('Player O wins the game!')
    } else if (gameProgress[1] !== null && gameProgress[1] === 'O' && gameProgress[1] === gameProgress[4] && gameProgress[4] === gameProgress[7]) {
        delayAlert('Player O wins the game!')
    } else if (gameProgress[2] !== null && gameProgress[2] === 'O' && gameProgress[2] === gameProgress[5] && gameProgress[5] === gameProgress[8]) {
        delayAlert('Player O wins the game!')
    } else if (gameProgress[0] !== null && gameProgress[0] === 'O' && gameProgress[0] === gameProgress[4] && gameProgress[4] === gameProgress[8]) {
        delayAlert('Player O wins the game!')
    } else if (gameProgress[2] !== null && gameProgress[2] === 'O' && gameProgress[2] === gameProgress[4] && gameProgress[4] === gameProgress[6]) {
        delayAlert('Player O wins the game!')
    } else if (!gameProgress.includes(null)) {
        delayAlert(`CAT has won the game!`)
    }
 };