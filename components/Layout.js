import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children }) => (
  <div className="grid grid-cols-12 bg-transparent">
    <Head>
      <title>Coverall | Get latest and trusted news stories</title>
      <script src="https://unpkg.com/ionicons@5.1.2/dist/ionicons.js" />
    </Head>
    <Navbar />
    {children}
  </div>
);

export default Layout;
