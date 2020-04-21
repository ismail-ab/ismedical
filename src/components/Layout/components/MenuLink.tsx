import * as React from "react";
import { Link } from "react-router-dom";

interface IMenuLinkProps {
  resource: string;
  title: string;
}

const MenuLink: React.SFC<IMenuLinkProps> = ({ resource, title }) => (
  <li>
    <Link to={resource}>{title}</Link>
  </li>
);

export default MenuLink;
