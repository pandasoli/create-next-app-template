import Head from 'next/head'
import type { AppProps } from 'next/app'

import { Container, Contents } from '../styles/_app'
import { GlobalStyle } from '../styles/globals'


const App = ({ Component, pageProps }: AppProps) =>
  <Container>
    <Head>
      <title>Initial Next App - Template</title>
    </Head>
    {/* <Header/> */}

    <Contents>
      <Component { ...pageProps }/>
      {/* <Footer/> */}
    </Contents>

    <GlobalStyle/>
  </Container>


export default App