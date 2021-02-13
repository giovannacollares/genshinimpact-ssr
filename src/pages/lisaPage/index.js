import styles from './index.module.css'

import {LisaGifs} from '../../components/Lisa/Lisa'
import BackButton from '../../components/BackButton/backButton'
import Link from 'next/link'

function Lisa() {
    return ( 
        
    <div className={styles.container}>


        <Link href="/">
        <a><BackButton /></a> 
        </Link>

        <LisaGifs />

        <style global jsx>{`
        body {
          background-image: url('/lisa.jpg');
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}</style>
    </div>
    )}
  
  export default Lisa