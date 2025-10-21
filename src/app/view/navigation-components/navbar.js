import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-[#FBFBFB] w-full shadow-lg px-4 py-2 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Image
          src="/connect-group.png"
          alt="Connect Group Logo"
          width={40}
          height={40}
          className="h-10 w-auto"
        />
        <span className="text-xl font-semibold text-gray-800 hidden sm:block">
          Connect Group
        </span>
      </div>

      {/* Menu button for mobile (optional for hamburger menu in future) */}
      <div className="sm:hidden">
        <button className="text-gray-800 focus:outline-none">
          {/* Optional: icon or menu toggle */}
        </button>
      </div>
    </nav>
  );
}