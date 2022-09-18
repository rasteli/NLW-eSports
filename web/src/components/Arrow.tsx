interface ArrowProps {
  left?: boolean
  onClick(e: any): void
}

export function Arrow({ left, onClick }: ArrowProps) {
  const leftClass = `${left ? "left-[200px]" : "left-auto right-[200px]"}`

  return (
    <svg
      onClick={onClick}
      className={`z-10 w-10 h-20 absolute top-[55%] fill-white cursor-pointer ${leftClass}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!left && <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />}
    </svg>
  )
}
