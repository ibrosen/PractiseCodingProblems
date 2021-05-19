designing favourite board game - chess

root application
    initialise 2 *Players*
    initialise *Board*
    some while loop that runs until end condition is met
        "play round loop"

play round loop:
    iterate through the players
        ask the player for an input
        update the board - make the move
            check win condition here, if met, update some state and break 



intToPieceMapping: {1:"pawn"...}

Colours = "white" | "black"

Player:
    colour: Colours
    name: string
    ranking: number


ChessPiece:
    value:int
    colour: Colours

Board:
    boardArray: int[][]
    takenPieces: ChessPiece[]
    isOver: boolean

    init function:
        initialise an 8 x 8 array of integers with starting position of pieces
        0 -> empty
        Z+ -> some piece, eg: 1->pawn
        [2,3,4,5,6,4,3,2],
        [1,1,1,1,1,1,1,1]
        [0,0,0,0,0,0,0,0]
        [0,0,0,0,0,0,0,0]

        boardArray = 
        takenPieces = []
        isOver = false
    

    move(a,b):
        call checkValidMove()
        move the piece to that part of the board
        update the board, potentially adding a piece to takenPieces
        call calculateWinCondition()
            if met, update isOver 

    
    
