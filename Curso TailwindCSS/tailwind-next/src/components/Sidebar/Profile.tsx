import { LogOut } from 'lucide-react'

const Profile = () => {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/diego3g.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />
      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Gabriel Maia
        </span>
        <span className="truncate text-sm text-zinc-500">gsm23@gmail.com</span>
      </div>
      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}

export default Profile
