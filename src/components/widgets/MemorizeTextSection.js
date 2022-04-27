import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { ReactSortable } from "react-sortablejs";
import randomColor from "randomcolor";
import { setTextDivisionsArray } from '../../redux/reducers/textDivisionsSlice.reducer'
import { addSegmentColor } from "../../redux/reducers/segmentColors.reducer";

import {TEXT_SECTION_BORDER_RADIUS} from './PrepareTextSection'

import styles from './widget_style.module.scss'


const MemorizeTextSection = () => {

    const textDivisions = useSelector((state) => state.textDivisions.value)

    const dispatch = useDispatch()

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

    return (
        <span className={styles.textSection}>
            {
                textDivisions.map(division => formatWord(division))
            }
        </span>
    )
}

export default MemorizeTextSection;

