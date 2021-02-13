import styles from './jean.module.css'
import Image from 'next/image'


export function JeanButton() {
  return (
    <button
      type="button"
      className={styles.button}
    >
      Jean
    </button>
  )
}

export function JeanGifs() {
  return (
    <div
      className={styles.container}
    >
    <Image className={styles.gif} src="/jean1.gif" width={200} height={200} /><br />
    <Image className={styles.gif} src="/jean2.gif" width={200} height={200} />
    <Image className={styles.gif} src="/jean3.gif" width={200} height={200} />
    </div>
  )
}