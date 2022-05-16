interface ResetProps {
  setSquares: React.Dispatch<React.SetStateAction<any[]>>
  setWinner: React.Dispatch<React.SetStateAction<string>>
}

export const Reset = ({ setWinner, setSquares }: ResetProps) => {
  const handleReset = () => {
    setSquares(Array(9).fill(null))
    setWinner('')
  }

  return (
    <button
      className="w-28 mr-2 p-2 flex flex-col gap-2 bg-green-200 text-zinc-800"
      onClick={handleReset}
    >
      Reiniciar
    </button>
  )
}
