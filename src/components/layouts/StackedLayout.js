import Stack from '@mui/material/Stack';
import styles from './layout_style.module.scss'

const StackedLayout = ({ OverBar, overBarProps, MidSection, midSectionProps, UnderBar }) => {
    return (
        <Stack className={styles.passageMainLayout}>
            <OverBar {...overBarProps} />
            <MidSection {...midSectionProps} />
            <UnderBar></UnderBar>
        </Stack>
    )
}

export default StackedLayout