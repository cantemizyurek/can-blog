interface SwitchProps {
  checked: boolean
  onChange: (checked: boolean) => void
}

export default function Switch({ checked, onChange }: SwitchProps) {
  return (
    <div
      className={`${
        checked ? 'bg-green-500' : 'bg-yellow-500'
      } w-12 h-6 rounded-full flex items-center transition-colors duration-300 overflow-hidden cursor-pointer`}
      onClick={() => onChange(!checked)}
    >
      <div
        className={`${
          checked ? 'translate-x-6' : 'translate-x-0'
        } w-6 h-6 rounded-full bg-white transform transition-transform duration-300`}
      />
    </div>
  )
}
