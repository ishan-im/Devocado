import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Loader from '../components/Loader'

import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Devocado</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        
        <Loader show={true}/>
      </main>

      
    </div>
  )
}
