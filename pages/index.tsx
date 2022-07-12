import type {NextPage} from 'next'
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <h1>Main page</h1>
      <Link href="/burgers">All burgers</Link>
    </div>
  )
}

export default Home
