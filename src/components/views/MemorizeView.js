import SectionView from './prepare_view/SectionView'
import TextView from '../widgets/TextSection';
import { Button } from '@mui/material';
import PassageLayout from './prepare_view/PassageLayout';

// import gstyles from '../../GlobalStyles.module.scss'
import styles from '../prepare/style.module.scss'


const MemorizeLayout = () => {
    return (
        <div >
            <div>
                <SectionView />
                <div className={styles.verticalLine}></div>
                <TextView verseText={[`1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`,
                    "2 ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                    "3 nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
                    "4 cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"]
                } />

            </div>
        </div>
    )
}

export default MemorizeLayout