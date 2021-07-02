import { Fragment } from 'react';
import MainHeader from './main-header';

const Header = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Header;
