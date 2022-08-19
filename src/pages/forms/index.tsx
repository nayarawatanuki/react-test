import type { NextPage } from 'next'
import * as React from "react"

import Head from 'next/head'
import Image from 'next/image'
import { TabsOption } from "../../components/tabs"
import styles from '../../styles/Home.module.css'
import { Heading } from '@chakra-ui/react'

const Forms: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>React-test</title>
        <meta name="description" content="Generated by nayarawatanuki" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Heading as='h2' size='3xl' noOfLines={1}>
          Formulários
        </Heading>
        <TabsOption />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/nayarawatanuki"
          target="_blank"
          rel="noopener noreferrer"
        >
          CatFact Project by {'nayarawatanuki'}
          <span className={styles.logo}>
            
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Forms