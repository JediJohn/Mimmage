import { Button } from "@mui/material";
import { useSelector } from "react-redux";

import styles from './bar_style.module.scss'

const MainNav  = () => {
    const inputTitle = useSelector((state) => state.inputText.title)
    const activeStep = useSelector((state) => state.activeStep.value)
    return (
        <div>
            <div className={styles.mainNav}>
                <span className={styles.mainNavLogo}>Mimmage</span>
                <span className={styles.mainNavTitle}>{activeStep>0?inputTitle:""}</span>
                    
                <span>
                    {/* <Button size="small">Login</Button>
                    <Button size="small">Sign up</Button> */}
                </span>
            </div>
            <hr />
        </div>
    )
}

export default  MainNav;