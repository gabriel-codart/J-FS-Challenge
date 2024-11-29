import { useState, useEffect } from 'react'
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { ThemeProvider } from "next-themes"
import { AppProps } from "next/app"
import NavBar from "@/components/navbar"

export default function App({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <ChakraProvider value={defaultSystem}>
      <NavBar />
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <Component {...pageProps} />
      </ThemeProvider>
    </ChakraProvider>
  )
}