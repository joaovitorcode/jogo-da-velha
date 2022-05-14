interface StatusProps {
  isX: boolean
  winner: string
  setSquares: React.Dispatch<React.SetStateAction<any[]>>
  setWinner: React.Dispatch<React.SetStateAction<string>>
}

export const Status = ({ isX, winner, setWinner, setSquares }: StatusProps) => {
  const handleReset = () => {
    setSquares(Array(9).fill(null))
    setWinner('')
  }

  return (
    <div className="h-96 flex flex-col gap-2">
      <div className="w-28 mr-2 p-2 flex flex-col gap-2 bg-zinc-300 text-zinc-800">
        { winner === '' ? `Jogar com ${isX ? 'X' : 'O'}` : winner}
      </div>
      <button
        className="w-28 mr-2 p-2 flex flex-col gap-2 bg-green-200 text-zinc-800"
        onClick={handleReset}
      >
        Reiniciar
      </button>
    </div>
  )
}
