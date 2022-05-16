import { useState } from 'react'
import { Square } from './Square'
import { Status } from './Status'
import { Reset } from './Reset'

export const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isX, setIsX] = useState(true)
  const [winner, setWinner] = useState('')

  const handleClick = (index: number) => {
    if (squares[index] || winner) {
      return
    }

    squares[index] = isX ? 'X' : 'O'
    setSquares(squares)
    setIsX(!isX)
    checkWinner()
  }

  const winningIndices = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const checkWinner = () => {
    winningIndices.forEach(item => {
      if (squares[item[0]] === 'X'
          && squares[item[1]] === 'X'
            && squares[item[2]] === 'X') {
        setWinner('X venceu!')
      }

      if (squares[item[0]] === 'O'
          && squares[item[1]] === 'O'
            && squares[item[2]] === 'O') {
        setWinner('O venceu!')
      }
    })
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="h-96 flex flex-col gap-2">
        <Status isX={isX} winner={winner} />
        <Reset setWinner={setWinner} setSquares={setSquares} />
      </div>
      <div className="w-96 h-96 bg-zinc-100 grid grid-cols-3 grid-rows-3 gap-2">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
    </div>
  )
}
