import React from 'react';
import styles from './Footer.module.css';
import img from '../assests/footerl.png';
import img1 from '../assests/footerr.png';

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <img src={img} alt="" className={styles.image} />
      <img src={img1} alt="" className={styles.image} />
    </div>
  );
}

export default Footer