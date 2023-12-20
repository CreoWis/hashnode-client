
import Socials from './Socials';

export default function Footer() {
  return (
    <footer className="flex justify-between items-center px-4 py-2 bg-[#020617] text-white">
      <p>© 2023 tapaScript</p>
      <div className="flex items-center space-x-4">
        <Socials />
      </div>
    </footer>
  );
}