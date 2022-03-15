import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  children: JSX.Element;
};

function Layout({ children }: Props) {
  return (
    <main>
      <Navbar />

      {children}
      <Footer />
    </main>
  );
}

export default Layout;
