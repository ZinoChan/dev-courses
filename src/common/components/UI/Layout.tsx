import Navbar from "./Navbar";

type Props = {
  children: JSX.Element;
};

function Layout({ children }: Props) {
  return (
    <main>
      <Navbar />

      {children}
    </main>
  );
}

export default Layout;
