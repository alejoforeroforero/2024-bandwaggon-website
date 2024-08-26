import logoType from '@/assets/imgs/logo-type-footer.svg';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles['footer-inner']} >
      <div><img src={logoType} alt="" /></div>
      <div>Man</div>
      <div>How</div>
      <div>Cont</div>
      <div>Linkedin</div>
    </div>
  )
}

export default Footer
