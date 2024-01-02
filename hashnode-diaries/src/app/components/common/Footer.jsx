import Link from "next/link";
import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center px-4 py-2 bg-[#020617] text-white sticky bottom-0">
      <p>
        © 2024{" "}
        <Link href="https://www.creowis.com/" target="_blank">
          CreoWis
        </Link>
      </p>
      <div className="flex items-center space-x-4">
        <Socials />
      </div>
    </footer>
  );
}
