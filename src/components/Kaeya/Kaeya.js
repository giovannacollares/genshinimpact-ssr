import styles from './kaeya.module.css'
import Image from 'next/image'


export function KaeyaButton() {
  return (
    <button
      type="button"
      className={styles.button}
    >
      Kaeya
    </button>
  )
}

export function KaeyaGifs() {
  return (
    <div
      className={styles.container}
    >
    <Image className={styles.gif} src="/kaeya1.gif" width={200} height={200} /><br />
    <Image className={styles.gif} src="/kaeya2.gif" width={200} height={200} />
    <Image className={styles.gif} src="/kaeya3.gif" width={200} height={200} />
    </div>
  )
}