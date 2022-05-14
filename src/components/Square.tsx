interface SquareProps {
  value: 'X' | 'O' | null
  onClick: () => void
}

export const Square = ({ value, onClick }: SquareProps) => {
  return (
    <button
      className="w-full h-full bg-zinc-300 hover:bg-zinc-400 flex items-center justify-center"
      onClick={onClick}
    >
      <p className="text-6xl text-zinc-800">{value}</p>
    </button>
  )
}
