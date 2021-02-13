import styles from './index.module.css'

import {JeanGifs} from '../../components/Jean/Jean'
import BackButton from '../../components/BackButton/backButton'
import Link from 'next/link'

function Jean() {
    return ( 
        
    <div className={styles.container}>
        
        <Link href="/">
        <a><BackButton /></a> 
        </Link>

        <JeanGifs />

        <style global jsx>{`
        body {
          background-image: url('/jean.jpg');
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}</style>
    </div>
    )}
  
  export default Jean