import Link from 'next/link';

import classes from '@styles/Navbar.module.css';

function Navbar() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/issues">Issues</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;