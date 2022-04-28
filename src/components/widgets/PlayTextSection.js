import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {TEXT_SECTION_BORDER_RADIUS} from './PrepareTextSection'

import styles from './widget_style.module.scss'


const PlayTextSection = () => {

    const textDivisions = useSelector((state) => state.textDivisions.value)
    const activePlaySegment = useSelector((state) => state.activePlaySegment.value)

    
    const dispatch = useDispatch()
    const speechObj = new SpeechSynthesisUtterance()
    
    const speak = (msg) => {
        speechObj.text = msg;
        window.speechSynthesis.speak(speechObj)
    }
    
    const formatWord = (tDiv) => {
        const words = tDiv.text.split(' ').filter(w => w !== "")
        return words.map((word, index) => {
            let rounded = {left:0, right: 0}
            if (index == 0){
                rounded.left = TEXT_SECTION_BORDER_RADIUS
            } else if(index === words.length-1){
                rounded.right = TEXT_SECTION_BORDER_RADIUS
            }
            return <span style={{'backgroundColor':tDiv.color,
            'borderRadius': `${rounded.left} ${rounded.right} ${rounded.right} ${rounded.left}` }}
            key={`${index}_${word}`}   >
                {`${word} `}
            </span>
            }
            )
        }
        
        useEffect(()=>{
            if(activePlaySegment !== null){
                speak(textDivisions[activePlaySegment].text)
            }
        }, [activePlaySegment, textDivisions])

    return (
        <span className={styles.textSection}>
            {
                // textDivisions.map(division => formatWord(division))
                formatWord(textDivisions[activePlaySegment])
            }
        </span>
    )
}

export default PlayTextSection;

