interface StatusProps {
  isX: boolean
  winner: string
}

export const Status = ({ isX, winner }: StatusProps) => {
  return (
    <div className="w-28 mr-2 p-2 flex flex-col gap-2 bg-zinc-300 text-zinc-800">
      { winner === '' ? `Jogar com ${isX ? 'X' : 'O'}` : winner}
    </div>
  )
}
