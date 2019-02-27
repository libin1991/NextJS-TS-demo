import Link from 'next/link';

const Navbar = () => (
  <div>
    <header>
      <div className="container">
        <Link href="/">
          <a className="logo">NextJS Demo</a>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
);

export default Navbar;
