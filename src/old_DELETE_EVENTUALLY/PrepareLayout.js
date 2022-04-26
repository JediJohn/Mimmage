import PassageLayout from '../components/views/prepare_view/PassageLayout'
import styles from './style.module.scss'
import { Button } from '@mui/material';


const PrepareLayout = () => {
  return (
    <div className={styles.passageMainLayout}>
        <h1 className={styles.passageReferenceTitle}>{"Ephesians 1"}</h1>
        <PassageLayout></PassageLayout>
        <div className={styles.underNavButtons}>
          <Button variant="outlined" color="primary">{'< Choose Text'}</Button>
          <Button variant="contained">{'Memorize >'}</Button>
        </div>
    </div>
  )
}

export default PrepareLayout