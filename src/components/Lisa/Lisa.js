import styles from './lisa.module.css'
import Image from 'next/image'


export function LisaButton() {
  return (
    <button
      type="button"
      className={styles.button}
    >
      Lisa
    </button>
  )
}

export function LisaGifs() {
  return (
    <div
      className={styles.container}
    >
    <Image className={styles.gif} src="/lisa1.gif" width={200} height={200} /><br />
    <Image className={styles.gif} src="/lisa2.gif" width={200} height={200} />
    <Image className={styles.gif} src="/lisa3.gif" width={200} height={200} />
    </div>
  )
}