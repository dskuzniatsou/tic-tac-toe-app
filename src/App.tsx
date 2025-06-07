import { useState } from 'react'

import './App.css'
import Board from "./components/Board.tsx";
import GameInfo from "./components/GameInfo.tsx";

function calculateWinner(squares: Array<string>){
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for (let i = 0; i < lines.length; i++) {
        const [a,b,c] = lines[i]
        if(squares[a] && squares[a]===squares[b]&& squares[a]=== squares[c]) {
            return squares[a]
        }
    }
    return null
}
function App() {
const [squares, setSquares] = useState(Array(9).fill(null))
    const [XisNext, setXisNext] = useState(true)
   const  handleClick = (index:number) => {
     const  newSquares = squares.slice()
        if (calculateWinner(newSquares)||newSquares[index] ) {
            return
        }
        newSquares[index]= XisNext ? "X" : "0"
        setSquares(newSquares)
        setXisNext(!XisNext)
    }

    const winner = calculateWinner(squares)
    let status
    if (winner) {
        status = 'WINNER: ' + winner
    }else {
        status = 'Next player: ' + (XisNext ? 'X' : '0')
    }
    const resetGame = () => {
        setSquares(Array(9).fill(null))
            setXisNext(true)
    }
return <div className='App'>
    <h1>Tic-Tac-Toe</h1>
    <Board squares={squares} onClick = {handleClick} />
    <GameInfo status={status} onReset={resetGame} />
</div>
}

export default App