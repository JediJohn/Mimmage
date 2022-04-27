import MemSegments from '../widgets/MemSegments';
import styles from './layout_style.module.scss'

const SideBySideLayout = ({ title, OverBar, TextSection, UnderBar }) => {
    return (
        <div className={styles.passageMainLayout}>
            <OverBar></OverBar>
            <div className={styles.contentSection}>
                <MemSegments />
                <div className={styles.verticalLine}></div>
                <TextSection verseText={[`1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`,
                    "2 ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                    "3 nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
                    "4 cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"]
                }/>
            </div>
            <UnderBar></UnderBar>
        </div>
    )
}

export default SideBySideLayout