import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TEXT_SECTION_BORDER_RADIUS } from './PrepareTextSection'

import styles from './widget_style.module.scss'


const PlayTextSection = () => {

    const textDivisions = useSelector((state) => state.textDivisions.value)
    const activePlaySegment = useSelector((state) => state.activePlaySegment.value)
    const playbackSpeed = useSelector((state) => state.playbackSpeed.value)
    const volume = useSelector((state) => state.volume.value)
    const [displayedTextIndex, setDisplayedTextIndex] = useState(0)

    const dispatch = useDispatch()
    const speechObj = new SpeechSynthesisUtterance()

    speechObj.addEventListener('boundary', (event) => {
        // console.log(event.charIndex, event.elapsedTime, event.name)
        if (event.name === "word") {
            setDisplayedTextIndex(event.charIndex)
        }
    })

    const speak = (msg) => {
        speechObj.text = msg;
        window.speechSynthesis.speak(speechObj)
    }

    const formatWord = (tDiv) => {
        const words = tDiv.text
            .substring(0, tDiv.text.indexOf(' ', displayedTextIndex + 1))
            .split(' ')
            .filter(w => w !== "")
        return words.map((word, index) => {
            let rounded = { left: 0, right: 0 }
            if (index == 0) {
                rounded.left = TEXT_SECTION_BORDER_RADIUS
            } else if (index === words.length - 1) {
                rounded.right = TEXT_SECTION_BORDER_RADIUS
            }
            return <span style={{
                'backgroundColor': tDiv.color,
                'borderRadius': `${rounded.left} ${rounded.right} ${rounded.right} ${rounded.left}`
            }}
                key={`${index}_${word}`}   >
                {`${word} `}
            </span>
        }
        )
    }

    const playText = (text) => {
        if(window.speechSynthesis.paused && speechSynthesis.speaking){
            return speechSynthesis.resume()
        }
        speechObj.volume = volume / 100.0
        speechObj.rate = playbackSpeed
        speak(text)
    }

    const stopText = () => {
        speechSynthesis.resume()
        speechSynthesis.cancel()
    }

    useEffect(() => {
        playText(textDivisions[activePlaySegment].text)
    }, [activePlaySegment, textDivisions])

    useEffect(() => {
        stopText()
        playText(textDivisions[activePlaySegment].text.substring(displayedTextIndex))
    }, [volume, playbackSpeed])

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

