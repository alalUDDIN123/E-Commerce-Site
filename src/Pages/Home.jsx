import React, { useContext } from 'react';
import { Link} from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

import styles from "./styles.module.css"


export default function Home() {

  const {isAuth,toggleAuth}= useContext(AuthContext)
 
 
    return (
    <div className={styles.baner}>
        <h1 className={styles.wel}> <span className={styles.welcome}>Welcome</span> to shopping cart</h1>
        <Link to='/products'>
        <button className={styles.bu}>See Products</button>
        </Link> <br />
       {
        isAuth ? <button className={styles.bu} onClick={toggleAuth} >Sign Out</button>:''
       }
    </div>
  )
}
