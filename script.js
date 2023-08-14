var board = [];
var boardSize = 5;
let flag = 0;
var display = document.querySelector('.display');
let time = boardSize * 1.4

console.log(time)
boardSpawn(board)


display.addEventListener('click', (obj) => {
    if (obj.target.id == flag + 1) {
        //ete chishta sxme
        document.getElementById(obj.target.id).innerHTML = ''
        flag = +obj.target.id
        obj.target.id = ''


        if(flag == 25){
            // ete haxtec
            display.innerHTML = ''
            flag = 0
            board = boardSpawn(new Array())
        }
    }
    else if (obj.target.id == '') {
        // ete empty a sxme
        alert('empty')
    }
    else {
        // ete sxala sxme
        display.innerHTML = ''
        flag = 0
        alert('Oops!')
        board = boardSpawn(new Array())
    }
})



function boardSpawn(board) {
    var shuffledArray = shuffle(boardSize);




    for (i = 0; i < boardSize; i++) {
        board[i] = new Array();
        for (j = 0; j < boardSize; j++) {
            board[i][j] = shuffledArray[(5 * i) + j];
            var blockNum = document.createElement("div");
            blockNum.id = shuffledArray[(5 * i) + j]
            blockNum.innerHTML = shuffledArray[(5 * i) + j];
            display.appendChild(blockNum);
        }
    }
    console.log('Shufled by shuffle algorithm ' + shuffledArray)

    return board
}
function shuffle(arraySize) {
    var array = [];
    for (var i = 0; i < (arraySize * arraySize); i++) {
        array[i] = i+1;

    }
    // berelua math random@ 0.1 ic minchev 0.9 heto haneluya 0.5 vor tiv@ lini kam -0.5 kam 0.5 
    //heto erbvor sort metod@ galisa inq@ stanuma funkcia vor@ mer mot  amen angam tarber sortavorman paymannera
    // ete linuma -0.5 inq@  sotavoruma @st achman isk ete 0.5 toxuma nuyn@ u tenc inq@ hastat poxuma saxi texer@
    array = array.sort(() => Math.random() - 0.5);

    return array;
}

//yimr