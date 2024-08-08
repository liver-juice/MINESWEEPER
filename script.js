function Gameboard(){
    //the board object itself
    
    const generateBoard = (rows, cols, mines) => {
        // reference the board object itself.
        let boardcontainer = document.querySelector('.boardcontainer');
        //create a grid of the given rows and cols.
        // each slot in the grid needs to be a Tile() instance but also an html div..
        for (let i = 0; i < rows; i++){
            //create a new row. 
            let newRow = document.createElement('div');
            newRow.classList.add('row');
            //then we fill that mf
            for (let j = 0; j < cols; j++){
                let newTile = document.createElement('div');
                newTile.classList.add('tile')
                newRow.appendChild(newTile);
            }
            boardcontainer.appendChild(newRow);
        };
        // we now have a bunch of rows, containing tile nodes, stored in boardcontainer.
    };

    return{generateBoard};
}

function Tile(){
    //each tile within the Gameboard is its own instantiation.
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
}

game = GameController();