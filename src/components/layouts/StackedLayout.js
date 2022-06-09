import Stack from '@mui/material/Stack';
import styles from './layout_style.module.scss'

const StackedLayout = ({ OverBar, overBarProps, MidSection, midSectionProps, UnderBar }) => {
    return (
        <Stack className={styles.passageMainLayout}>
            <h2>New Memory Board</h2>
            <OverBar {...overBarProps} />
            <MidSection {...midSectionProps} />
            <UnderBar></UnderBar>
        </Stack>
    )
}

export default StackedLayout