import Socials from "./Socials";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-4 py-2 bg-[#020617] text-white sticky top-0">
      <h1 className="text-lg font-bold">
        <a href="/">Hashnode Diaries</a>
      </h1>
      <nav className="flex items-center space-x-4">
        {/* <a href="/about">About</a> */}
        <Socials />
      </nav>
    </header>
  );
}
