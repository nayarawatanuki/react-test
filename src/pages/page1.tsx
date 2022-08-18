import type { NextPage } from 'next'
import * as React from "react"

import Head from 'next/head'
import Image from 'next/image'
import { TabsOption } from "../components/tabs"
import styles from '../styles/Home.module.css'

const Page1: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>React-test</title>
        <meta name="description" content="Generated by nayarawatanuki" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <TabsOption />
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

export default Page1