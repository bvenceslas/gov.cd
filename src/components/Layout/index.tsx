type Props = {
  children: any;
};

const Layout: React.FunctionComponent<Props> = ({ children }) => {
  return <div className="px-10 py-10">{children}</div>;
};

export default Layout;
