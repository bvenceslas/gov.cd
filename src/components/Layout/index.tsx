// import Footer from "../common/Footer";
import Header from "../common/Header";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Layout of the app */}
      <div className="">{children}</div>
      {/* Footer */}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
