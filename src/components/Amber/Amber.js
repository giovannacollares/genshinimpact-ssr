import styles from './amber.module.css'
import Image from 'next/image'


export function AmberButton() {
  return (
    <button
      type="button"
      className={styles.button}
    >
      Amber
    </button>
  )
}

export function AmberGifs() {
  return (
    <div
      className={styles.container}
    >
    <Image className={styles.gif} src="/amber1.gif" width={200} height={200} /><br />
    <Image className={styles.gif} src="/amber2.gif" width={200} height={200} />
    <Image className={styles.gif} src="/amber3.gif" width={200} height={200} />
    </div>
  )
}