import styles from './index.module.css'

import {AmberGifs} from '../../components/Amber/Amber'
import BackButton from '../../components/BackButton/backButton'
import Link from 'next/link'

function Amber() {
    return ( 
        
    <div className={styles.container}>

        <Link href="/">
        <a><BackButton /></a> 
        </Link>

        <AmberGifs />

        <style global jsx>{`
        body {
          background-image: url('/amber.jpg');
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}</style>
    </div>
    )}
  
  export default Amber