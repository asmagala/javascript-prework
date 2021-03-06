{
function playGame(argPlayerInput) {

    clearMessages();

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

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);

    const argComputerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + argComputerMove);
    console.log('Gracz wpisał: ' + argPlayerInput);

    const argPlayerMove = getMoveName(argPlayerInput);
    printMessage('Twój ruch to: ' + argPlayerMove);
    console.log('moves:', argComputerMove, argPlayerMove);
    displayResult(argComputerMove, argPlayerMove);
}

const buttonRock = document.getElementById("play-rock");
buttonRock.addEventListener('click', function() {playGame(1);});

const buttonPaper = document.getElementById("play-paper");
buttonPaper.addEventListener('click', function() {playGame(2);});

const buttonScissors = document.getElementById("play-scissors");
buttonScissors.addEventListener('click', function() {playGame(3);});
}