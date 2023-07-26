export default function NavBar() {
  return (
    <nav className="mb-0 w-full h-[59px] left-0 top-0 absolute bg-[#8ae79a] flex items-center justify-end pr-4">

      <a href="/" className="text-black text-xl font-light tracking-tight mr-4 hover:underline">home</a>

      <a href="/about" className="text-black text-xl font-light tracking-tight mr-4 hover:underline">about</a>

      <a href="/" className="text-black text-xl font-light tracking-tight mr-4 hover:underline">signup</a>

      <a href="/" className="relative justify-start items-center">
        <img className="w-[45px] h-[45px] relative" src="/images/favicon.png" alt="Logo" />
      </a>

    </nav>
  );
}
