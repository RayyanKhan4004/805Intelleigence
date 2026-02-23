import React from "react"

interface SpinnerProps {
  size?: string
  color?: string
}

const Spinner: React.FC<SpinnerProps> = ({
  size = "w-4 h-4",
  color = "border-white",
}) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`animate-spin rounded-full border-2 border-t-transparent ${color} ${size}`}
        role="status"
      />
    </div>
  )
}

export default Spinner