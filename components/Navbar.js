import Link from 'next/link';

const Navbar = () => (
  <div className="shadow-md col-span-12">
    <div className="py-4 flex justify-between w-4/5 mx-auto items-center">
      <Link href="/">
        <h2 className="text-xl font-bold">COVERALL</h2>
      </Link>
      <Link href="/search">
        <ion-icon name="search-outline" size="large" />
      </Link>
    </div>
  </div>
);

export default Navbar;
