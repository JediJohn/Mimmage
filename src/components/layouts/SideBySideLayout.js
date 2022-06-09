import MemSegments from '../widgets/MemSegments';
import styles from './layout_style.module.scss'

const SideBySideLayout = ({ OverBar, TextSection, textDivisions, UnderBar, setTextDivisionsArray }) => {
    return (
        <div className={styles.passageMainLayout}>
            <OverBar></OverBar>
            <div className={styles.contentSection}>
                <MemSegments textDivisions={textDivisions} setTextDivisionsArray={setTextDivisionsArray} />
                <div className={styles.verticalLine}></div>
                <TextSection textDivisions={textDivisions} />
            </div>
            <UnderBar></UnderBar>
        </div>
    )
}

export default SideBySideLayout