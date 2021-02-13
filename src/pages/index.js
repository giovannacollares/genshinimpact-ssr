import styles from './index.module.css'

import { KaeyaButton } from '../components/Kaeya/Kaeya'
import { JeanButton } from '../components/Jean/Jean'
import { LisaButton } from '../components/Lisa/Lisa'
import { AmberButton } from '../components/Amber/Amber'

import Link from 'next/link'
import Head from 'next/head'


function HomePage() {
    return ( 
    <div>
      <Head>
      <title>Genshin Impact SSR</title>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
    
    <div className={styles.container}>



        <Link href="./kaeyaPage">
        <a><KaeyaButton /></a> 
        </Link>
        <Link href="./jeanPage">
        <a><JeanButton /></a> 
        </Link>
        <Link href="./lisaPage">
        <a><LisaButton /></a> 
        </Link>
        <Link href="./amberPage">
        <a><AmberButton /></a> 
        </Link>


        <style global jsx>{`
        body {
          background: url('homeBackground.jpg');
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}</style>
    </div>
    </div>
    )}
  
  export default HomePage