import MemSegments from '../widgets/MemSegments';
import styles from './layout_style.module.scss'

const SideBySideLayout = ({ title, OverBar, TextSection, UnderBar }) => {
    return (
        <div className={styles.passageMainLayout}>
            <OverBar></OverBar>
            <div className={styles.contentSection}>
                <MemSegments />
                <div className={styles.verticalLine}></div>
                <TextSection />
            </div>
            <UnderBar></UnderBar>
        </div>
    )
}

export default SideBySideLayout