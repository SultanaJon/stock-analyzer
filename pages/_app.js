import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (

    // Checkout https://chakra-ui.com/guides/getting-started/nextjs-guide for theme customization
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
