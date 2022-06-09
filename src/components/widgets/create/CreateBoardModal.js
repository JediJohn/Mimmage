import { useState } from "react"
import TextInputView from "../../views/TextInputView";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';

import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from "@mui/material";

import styles from "./create_style.module.scss"



const CreateBoardModal = ({handleClose, open}) => {
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 200,
                }}
            >
                <Fade in={open}>
                    <Box className={styles.createModalStyle}>
                    <span className={styles.closeModalButton}><IconButton onClick={handleClose}><CloseIcon/></IconButton></span>
                    <TextInputView></TextInputView>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}

export default CreateBoardModal;
