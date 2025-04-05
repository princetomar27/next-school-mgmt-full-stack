import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* Search bar */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="search" width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] bg-transparent p-2 outline-none"
        />
      </div>

      {/* Icons and User */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" width={20} height={20} alt="message" />
        </div>

        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image
            src="/announcement.png"
            width={20}
            height={20}
            alt="announcement"
          />
          <div className=" rounded-full text-xs absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white">
            8
          </div>
        </div>
        <div className="flex flex-col">
          <span className=" text-sm leading-3 font-medium">Prince Tomar</span>
          <span className=" text-[10px] text-gray-500 text-right">ADMIN</span>
        </div>
        {/* Avatar */}
        <Image
          src="/avatar.png"
          width={36}
          height={36}
          alt="avatar"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
