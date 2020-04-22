import React from "react";
import { Link } from "react-router-dom";

interface IPageLinkProps {
  linkStyle?: string;
  goto: string;
}

const PageLink: React.SFC<IPageLinkProps> = ({ linkStyle, goto, children }) => {
  if (linkStyle) {
    return <span className={linkStyle}>{children}</span>; // eslint-disable-line no-use-before-define
  }

  return (
    <Link className={linkStyle} to={goto}>
      {children}
    </Link>
  );
};

export default PageLink;
