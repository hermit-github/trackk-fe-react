export default function Header() {
  return (
    <div className="h-full flex items-center justify-between px-6 bg-white">
      <div>
        <h1 className="text-xl font-bold">My App</h1>
      </div>

      <div className="flex items-center gap-4">
        <button className="px-3 py-2 rounded-md border hover:bg-gray-100">
          Notifications
        </button>

        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-semibold">
          SH
        </div>
      </div>
    </div>
  );
}