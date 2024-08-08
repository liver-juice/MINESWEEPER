Tile;

function Gameboard(){
    //the board object itself
    let board = [];
    const generateBoard = (rows, cols) => {
        for (let i = 0; i < rows; i++){
            let newRow = [];
            for (let j = 0; j < cols; j++){
                let newCol = [];
                newRow.push(newCol);
            }
            board.push(newRow);
        }
        return board;
    };
    
                //randNum = Math.ceil(Math.random() * 20);
                //if (randNum === 1)
    const getBoard = () => {
        //returns the board.
        return board;
    }

    return{generateBoard, getBoard};

}


function Tile(isMine){
    //each tile within the Gameboard is its own instantiation.
    let isHidden = true; // tile isnt uncovered
    let isFlagged = false;

    const generateMine = () => {
        // called at start, creates the mine tiles.
        // 1 in 20 chance of turning this tile to a mine. (isMine = true;)

        //gen random num 1-20
        randNum = Math.ceil(Math.random() * 20); // rand num 1-20;

        // isMine = true;
        // return true;
    }

    

    const clicked = () => {
        if (isMine === true){
            console.log('game over.');
        }
    }


    return {generateMine, clicked};
}


function GameController(){
    //the logos
    
    //create the board object
    board = Gameboard();

    // grab the board input data from the user.
    // let rows = document.querySelector('.rowsinput').innerHTML;
    // let cols = document.querySelector('.colsinput').innerHTML;
    // let mines = document.querySelector('.minesinput').innerHTML;
    let rows = 10;
    let cols = 10;
    let mines = 20;

    //create the board itself. applies the mines.
    board.generateBoard(rows, cols, mines)

    console.log(board.getBoard());

}

game = GameController();