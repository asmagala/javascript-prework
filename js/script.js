function getMoveName(argMoveId) {
	if (argMoveId == 1) {
		return 'kamień';
	} else if (argMoveId == 2) {
		return 'papier';
	} else if (argMoveId == 3) {
		return 'nożyce';
	} 

	printMessage('Nie znam ruchu o id = ' + argMoveId + '.');
	return 'nieznany ruch';
}

function displayResult(argComputerMove, argPlayerMove) {
    if (argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        printMessage('Remis!')
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Wygrałeś!');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('JA wygrałem! :))))');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('JA wygrałem!')
    } else if (argComputerMove == 'papier' && argPlayerMove == 'papier'){
        printMessage('Remis!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('TY wygrałeś!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('TY wygrałeś!!')
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('JA wygrałem!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
        printMessage('REMIS!');
    } else {
        printMessage('Oszukujesz! Podałeś błędną wartość!!!');
    }
}


let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

/*
if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2) {
    computerMove = 'papier';
} else {
    computerMove = 'nożyce';
}
*/

printMessage('Mój ruch to: ' + argComputerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);

/*
if(playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == '2') {
    playerMove = 'papier'; 
} else if(playerInput == '3') {
    playerMove = 'nożyce';
}
*/
printMessage('Twój ruch to: ' + argPlayerMove);

/*
if (computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis!')
} else if (computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Wygrałeś!');
} else if (computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('JA wygrałem! :))))');
} else if (computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('JA wygrałem!')
} else if (computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis!');
} else if (computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('TY wygrałeś!');
} else if (computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('TY wygrałeś!!')
} else if (computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('JA wygrałem!');
} else if (computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('REMIS!');
} else {
    printMessage('Oszukujesz! Podałeś błędną wartość!!!');
}
*/
console.log('moves:', argComputerMove, argPlayerMove);
displayResult(argComputerMove, argPlayerMove);