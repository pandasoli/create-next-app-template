import type { NextPage } from 'next'

import Link from '../components/Link'


const Home: NextPage = () =>
  <>
    <h1>Home</h1>
    <br/>

    <div>
      <Link link='/signin' text='Sign in' preLoad/>
      <Link link='/signup' text='Sign up' preLoad/>
    </div>
  </>


export default Home