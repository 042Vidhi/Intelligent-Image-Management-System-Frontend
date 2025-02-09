"use client"

import { useState } from "react"
import ToggleButton from "./toggleButton"

// interface ButtonData {
//   id: number
//   label: string
// }

// interface ButtonArrayProps {
//   buttons: ButtonData[]
// }
const buttonData = [
    { id: 1, label: "Cat" },
    { id: 2, label: "Pussy" },
    { id: 3, label: "Billi" },
    { id: 4, label: "meow" },
  ]
export default function Tags() {
  const [selectedButtons, setSelectedButtons] = useState<number[]>([])

  const handleToggle = (id: number) => {
    setSelectedButtons((prev) => (prev.includes(id) ? prev.filter((buttonId) => buttonId !== id) : [...prev, id]))
  }

  return (
    <div className="flex flex-wrap gap-4">
      {buttonData.map((button) => (
        <ToggleButton
          key={button.id}
          id={button.id}
          label={button.label}
          isSelected={selectedButtons.includes(button.id)}
          onToggle={handleToggle}
        />
      ))}
    </div>
  )
}

