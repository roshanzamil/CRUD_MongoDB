import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-pink px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>
        DiaFlower
      </Link>
      <Link className="bg-white p-2" href={"/addFlower"}>
        Add Flower
      </Link>
    </nav>
  );
}
