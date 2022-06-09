
import { Link } from 'react-router-dom'
import IconButton  from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import styles from './bar_style.module.scss'


const BoardListOverBar = ({openCreateModal}) => {
    return (
        <div className={styles.boardListOverBar}>
            <IconButton 
                onClick={()=>openCreateModal()}
                variant="contained" 
                endIcon={<AddIcon/>} size="">New</IconButton>
        </div>
    )
}

export default BoardListOverBar;
