function Gameboard(){
    //the board object itself
    let board = [];
    const generateBoard = (rows, cols) => {
        for (let i = 0; i < rows; i++){
            let newRow = [];
            for (let j = 0; j < cols; j++){
                let newCol = [];
                newRow.push(newCol);
            }board.push(newRow);
        }return board;};

                //randNum = Math.ceil(Math.random() * 20);
                //if (randNum === 1)
    return{generateBoard};
}


function Mine(){
    //each tile within the Gameboard is its own instantiation.
    let isHidden = true; // tile isnt uncovered
    let isFlagged = false;


    return{}
}

function nonMine(){
    //each tile within the Gameboard is its own instantiation.
    let isHidden = true; // tile isnt uncovered
    let isFlagged = false;


    return{}
}


function GameController(){
    board = Gameboard();

    let rows = 10;
    let cols = 10;  // dummy datas
    let mines = 20;

    let theBoard = board.generateBoard(rows, cols);
    // place the mines. works
    while (mines > 0){
        theBoard.forEach((row) => {
            row.forEach((col) => {
                let randNum = Math.ceil(Math.random() * 20);
                if (randNum === 1){
                    col.push(Mine());
                    mines--;
                }
            })
        })
    }
    console.log(theBoard);
    // fill in the nonMines.
    theBoard.forEach((row) => {
        row.forEach((col) => {
            if (col.length === 0){
                col.push(nonMine());
            }
        })
    })
    
    


}

game = GameController();