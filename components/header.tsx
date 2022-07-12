import {FC} from "react";
import {GiHamburger} from 'react-icons/gi'
import Link from "next/link";

const Header: FC = () => {
  return (
    <header>
      <div>
        <GiHamburger/>
      </div>
      <nav>
        <Link href="/">To home</Link>
        <Link href="/aboutUs">About Us</Link>
        <Link href="/reviews">Reviews</Link>
        <Link href="/burgers">Burgers</Link>
      </nav>
    </header>
  )
}

export default Header