import { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from 'styles/theme'
import { ListProvider } from 'context/list'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider resetCSS theme={theme}>
        <ListProvider>
          <Head>
            <title>Faz a Meta</title>

            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
              rel="stylesheet"
            />

            <meta name="description" content="A simple project" />
            <link rel="shortcut icon" href="/img/icon-512.png" />
            <link rel="apple-touch-icon" href="/img/icon-512.png" />
            <link rel="manifest" href="/manifest.json" />
          </Head>

          <Component {...pageProps} />
        </ListProvider>
      </ChakraProvider>
    </>
  )
}

export default App
