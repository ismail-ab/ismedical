import * as React from "react";
import MenuLink from "./components/MenuLink";

const Layout: React.SFC = ({ children }) => {
  return (
    <>
      <header>
        <h1>IsMedical</h1>
      </header>
      <nav>
        <ul>
          <MenuLink resource="/" title="Home" />
          <MenuLink resource="/doctors" title="Doctors" />
        </ul>
      </nav>
      <section>{children}</section>
    </>
  );
};

export default Layout;
