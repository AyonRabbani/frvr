import styles from '../styles/Home.module.css';
import Image from 'next/image';

import angel from "../public/angel.png"; 
import logo from "../public/3000FRVR.png"; 
import { useEffect } from 'react';

export default function Home() {
  
  useEffect(() => {
    document.querySelector('video').playbackRate = 0.7;
  })

  return (
    <div className={styles.container}>
        <video className={styles.video} autoPlay muted loop>
          <source src='./blue.webm' type='video/mp4' /> 
        </video>
        <div className={styles.angel}>
          <Image src={angel} layout="responsive" />
        </div>
        <div className={styles.logo}>
          <Image src={logo} height={150} width={550} />
        </div>
        <a className={styles.enter}>&apos;SOON&apos;</a>
    </div>
  )
}
