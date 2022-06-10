import { Html, Head, Main, NextScript } from 'next/document'

const MyDocument = () =>
  <Html>
  <Head>
    <script src='https://cdn.jsdelivr.net/npm/pace-js@latest/pace.min.js'/>

    <link rel='icon' href='/favicon.ico'/>
  </Head>
  <body>
    <Main/>
    <NextScript/>
  </body>
  </Html>


export default MyDocument