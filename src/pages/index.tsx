import type { NextPage } from 'next'
import * as React from "react"

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>React-test</title>
        <meta name="description" content="Generated by nayarawatanuki" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ChakraProvider theme={theme}>
          <Box textAlign="center" fontSize="xl">
            <Grid minH="100vh" p={3}>
              <ColorModeSwitcher justifySelf="flex-end" />
              <VStack spacing={8}>
                
                <Text>
                  Bem-vindo(a)!
                </Text>
                <Link
                  color="teal.500"
                  href="/page1"
                  fontSize="2xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Forms
                </Link>
              </VStack>
            </Grid>
          </Box>
        </ChakraProvider>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home