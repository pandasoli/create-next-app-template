import Head from 'next/head'
import type { AppProps } from 'next/app'

import { Container, Contents } from '../styles/_app'
import { GlobalStyle } from '../styles/globals'
import 'bootstrap/dist/css/bootstrap.min.css'


const App = ({ Component, pageProps }: AppProps) =>
  <Container>
    <Head>
      <title>Initial Next App - Template</title>
    </Head>

    <Contents>
      <Component { ...pageProps }/>
    </Contents>

    <GlobalStyle/>
  </Container>


export default App