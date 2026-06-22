import logo from '@/assets/logo-icon.svg'

function Footer() {
  return (
    <div className="border-t border-gray-800 px-6 py-8 flex flex-col items-center gap-2">
      <img src={logo} alt="DevBoard" className="h-7 w-7" />
      <p className="text-sm text-gray-600">
        Built with React, TypeScript & Tailwind CSS
      </p>
    </div>
  )
}

export default Footer
