function Gameboard(){
    //the board object itself
    let board = [];
    
    const generateBoard = (rows, cols, mines) => {
        //create a grid/board of Tile() instances, with given rows and cols.
        for (let i = 0; i < rows; i++){
            //create a new row. 
            let newRow = [];
            //then we fill that mf
            for (let j = 0; j < cols; j++){
                let newTile = Tile();
                newRow.push(newTile);
            }
            board.push(newRow);
            
        };
        // we now have a bunch of rows, containing tile instances,
        // stored in board array.
    };

    const getBoard = () => {
        //returns the board.
        return board;
    }

    return{generateBoard, getBoard};
}

function Tile(){
    //each tile within the Gameboard is its own instantiation.
    let isMine = false;
    let isHidden = true; // tile isnt uncovered
    let isFlagged = false;

    return {};
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
    //create the board itself.
    board.generateBoard(rows, cols, mines)
    console.log(board.getBoard());

}

game = GameController();