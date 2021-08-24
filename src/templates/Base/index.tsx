import styles from './styles.module.scss'
import {Header} from '../../components/Header'
import {Footer} from '../../components/Footer'

export const Layout = ({children}) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
