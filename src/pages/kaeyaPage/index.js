import styles from './index.module.css'

import {KaeyaGifs} from '../../components/Kaeya/Kaeya'
import BackButton from '../../components/BackButton/backButton'
import Link from 'next/link'

function Kaeya() {
    return ( 
        
    <div className={styles.container}>

        <Link href="/">
        <a><BackButton /></a> 
        </Link>

        <KaeyaGifs />


        <style global jsx>{`
        body {
          background-image: url('/kaeya.jpg');
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}</style>
    </div>
    )}
  
  export default Kaeya