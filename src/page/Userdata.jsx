import React from 'react';
import styles from './Userdata.module.css';
import logo from '../assests/png-03.png'

const Userdata = () => {
  const handleclick = () => {
    console.log("hello world")
  }
  return (
    <div className={styles.userform}>

      {/* <div className={styles.userform__labels}> */}
        
      {/* </div> */}

      <form action="" className={styles.userform__form}>
        <div>
          <label htmlFor="" required />
        </div>
        <div>
          <label htmlFor="">Company Name</label>
          <input type="text" />

        </div>
          <div>
          <label htmlFor="">Designation</label>
          <input type="text" />

          </div>
          <div>
          <label htmlFor="">Email ID</label>
          <input type="email" />

          </div>
          <div>
          <label htmlFor="">Phone No</label>
          <input type="number" />
          </div>
          {/* <input className={styles.btn} type="submit" value="submit" /> */}
          <div className={styles.userform__form_btn}>
            <button className={styles.btn} onClick={handleclick}>Submit</button>
          </div>
      </form>
    </div>
  )
}

export default Userdata;