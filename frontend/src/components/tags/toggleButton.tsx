"use client"

import { Plus, Check } from "lucide-react"

interface ToggleButtonProps {
  id: number
  label: string
  isSelected: boolean
  onToggle: (id: number) => void
}

export default function ToggleButton({ id, label, isSelected, onToggle }: ToggleButtonProps) {
  return (
    <button
      onClick={() => onToggle(id)}
      className={`flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        isSelected
          ? "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500"
          : "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
      }`}
    >
      <span className="flex items-center justify-center w-5 h-5 bg-white rounded-full">
        {isSelected ? <Check className="w-4 h-4 text-green-600" /> : <Plus className="w-4 h-4 text-blue-600" />}
      </span>
      {label}
    </button>
  )
}

