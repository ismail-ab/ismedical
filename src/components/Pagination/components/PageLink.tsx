import React from "react";
import { Link } from "react-router-dom";

interface IPageLinkProps {
  linkStyle?: string;
  goto: string;
}

const PageLink: React.SFC<IPageLinkProps> = ({ linkStyle, goto, children }) => (
  <Link className={linkStyle} to={goto}>
    {children}
  </Link>
);

export default PageLink;
