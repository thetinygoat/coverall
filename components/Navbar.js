import Link from "next/link";

const Navbar = () => (
  <div className="shadow-md col-span-12 bg-white">
    <div className="py-4 flex justify-between w-4/5 mx-auto items-center">
      <Link href="/">
        <img src="/coverall.svg" alt="coverall logo" />
      </Link>
      <Link href="/search">
        <ion-icon
          name="search-outline"
          size="large"
          className="cursor-pointer"
        />
      </Link>
    </div>
  </div>
);

export default Navbar;
