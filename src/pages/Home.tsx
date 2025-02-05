import ContextList from "@/components/ContextList";

export default function Home() {
  return (
    <>
    {/* contact list */}
    <ContextList />
      {/* Utility Class */}
      <div className="flex items-center max-w-sm bg-white mx-auto rounded-xl shadow-lg outline-black/5 p-4 gap-x-2.5 dark:bg-slate-800 dark:shadow-none">
        <img className="size-14" src="/images/reshot-icon-chat.svg" alt="" />
        <div>
          <div className="text-xl font-medium text-black dark:text-white">
            Faatchat
          </div>
          <p className="text-gray-500 dark:text-gray-300">
            You have new Mesage
          </p>
        </div>
      </div>
      {/* Create Button */}
      <div className="flex flex-col items-center gap-4 p-6">
        <button className="px-10 w-40 py-2 bg-amber-700 text-white rounded-sm cursor-pointer">
          Primary
        </button>
        <button className="px-10 w-40 py-2 bg-green-600 text-white rounded-sm cursor-pointer">
          Primary
        </button>
        <button className="px-10 w-40 py-2 bg-purple-600 text-white hover:bg-purple-400 rounded-sm cursor-pointer">
          Primary
        </button>
        {/* Create Gradeint */}
        <button className="px-10 w-40 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-sm cursor-pointer">
          Gradeint
        </button>
        {/* Create Gradeint with shadow */}
        <button className="px-5 w-49 py-2 bg-gradient-to-r from-red-600 to-orange-400 text-white rounded-sm cursor-pointer shadow-2sm'">
          Gradeint shadow
        </button>

        {/* Create Full button */}
        <button className="px-5 w-49 py-2 bg-gradient-to-r from-yellow-500 to-orange-400 text-white rounded-full cursor-pointer shadow-2sm'">
          Full button
        </button>

        {/* Create button size */}
        <button className="px-5 min-w-36 text-sm py-2 bg-gradient-to-r from-blue-500 to-green-400 text-white rounded cursor-pointer shadow-2sm'">
          Button size
        </button>

        {/* Create button size */}
        <button className="px-5 min-w-36 text-sm py-2 bg-blue-400 text-white rounded cursor-not-allowed shadow-2sm'">
          Button size
        </button>

        {/* Create button with icon */}
        <button className="flex items-center gap-2 px-5 min-w-35 text-sm py-2 bg-blue-400 text-white rounded cursor-not-allowed shadow-2sm'">
          <img className="size-5" src="/images/reshot-icon-chat.svg" alt="" />
          button with ico
        </button>

        {/* Button Animation */}
        <button className="px-4 py-2 text-lg min-w-36 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer hover:scale-95 transition-transform">
          Small
        </button>
      </div>
    </>
  );
}
