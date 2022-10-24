import React from 'react'
import FAQ from '../Pages/FAQ'
import styles from "../Pages/styles.module.css"
function Footer() {
  return (
    <div className={styles.footer}>
       <div> <h1>Social Media</h1>
         <p>LindeIn
         <span><i class="fa-brands fa-linkedin"></i></span>
         </p>
         <p>You Tube <span> <i class="fa-brands fa-youtube"></i></span></p>
         <p>Facebook <span> <i class="fa-brands fa-square-facebook"></i> </span></p>
         <p>Twitter <span> <i class="fa-brands fa-square-twitter"></i> </span></p>
         
       </div>

       <div className={styles.faq}> <h1 style={{marginLeft:'5%'}}>FAQ</h1>
         <FAQ />
       </div>

       <div> <h1> Job Oppertunities</h1>
       <p>Freelancer</p>
         <p>Digital marketing</p>
         <p>Influncer</p>
         <p>Software Developer</p>
         
       </div>
    </div>
  )
}

export default Footer
