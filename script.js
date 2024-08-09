function Gameboard(){
    //the board object itself: 3D ARRAY
    let board = [];
    const generateBoard = (rows, cols) => {
        for (let i = 0; i < rows; i++){
            let newRow = [];
            for (let j = 0; j < cols; j++){
                let newCol = [];
                newRow.push(newCol);
            }board.push(newRow);
        }return board;};

    return{generateBoard};
}


function Mine(){
    //each tile within the Gameboard is its own instantiation.
    let isHidden = true; // tile isnt uncovered
    let isFlagged = false;

    let tileType = () => {
        return 'mine';
    }

    return{tileType}
}

function nonMine(){
    //each tile within the Gameboard is its own instantiation.
    let isHidden = true; // tile isnt uncovered
    let isFlagged = false;

    let tileType = () => {
        return 'nonmine';
    }

    return{tileType}
}


function GameController(){
    board = Gameboard();

    let rows = 10;
    let cols = 10;  // dummy datas
    let mines = 20;
    //CREATES INITIAL BOARD
    let theBoard = board.generateBoard(rows, cols);
    // places bombs at a random number
    while (mines > 0){
        theBoard.forEach((row) => {
            row.forEach((col) => {
                let randNum = Math.ceil(Math.random() * 20);
                if (randNum === 1){
                    let tile = Mine();
                    col.push(tile);
                    mines--;
                }
            })
        })              
    }
    console.log(theBoard);
    // fill in the nonMines.
    theBoard.forEach((row) => {
        row.forEach((col) => {
            if (col.length < 1){
                col.push(nonMine());
            }
        })
    })

    let displayBoard = () => {
        let boardcontainer = document.querySelector('.boardcontainer');
        theBoard.forEach((row) => {
            let newDivRow = document.createElement('div');
            newDivRow.classList.add('row');
            theBoard.forEach((col) => {
                let newDivCol = document.createElement('div');
                newDivCol.classList.add('tile');

                newDivRow.append(newDivCol);
            })
            boardcontainer.append(newDivRow);
        })

    }


    displayBoard()
    
}

game = GameController();