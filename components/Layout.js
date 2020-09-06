import Head from 'next/head';

const Layout = ({ children }) => (
  <div className="grid grid-cols-12">
    <Head>
      <title>News Zen | Get latest and trusted news stories</title>
      <script src="https://unpkg.com/ionicons@5.1.2/dist/ionicons.js" />

    </Head>
    {children}
  </div>
);

export default Layout;
