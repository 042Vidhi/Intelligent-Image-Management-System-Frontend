import { Plus } from "lucide-react"

interface AddButtonProps {
  onClick?: () => void
  label?: string
}

export default function AddButton({ onClick, label = "Add Item" }: AddButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      <span className="flex items-center justify-center w-5 h-5 bg-white rounded-full">
        <Plus className="w-4 h-4 text-blue-600" />
      </span>
      {label}
    </button>
  )
}

