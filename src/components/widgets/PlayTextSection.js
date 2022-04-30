import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentRepeatNumber } from "../../redux/reducers/currentRepeatNumber.reducer";
import { setRepeatsPerSegment } from "../../redux/reducers/repeatsPerSegment.reducer";

import { TEXT_SECTION_BORDER_RADIUS } from './PrepareTextSection'

import styles from './widget_style.module.scss'


const PlayTextSection = () => {

    const textDivisions = useSelector((state) => state.textDivisions.value)
    const activePlaySegment = useSelector((state) => state.activePlaySegment.value)
    const repeatsPerSegment = useSelector((state) => state.repeatsPerSegment.value)
    const playbackSpeed = useSelector((state) => state.playbackSpeed.value)
    const volume = useSelector((state) => state.volume.value)
    const currentRepeatNumber = useSelector((state) => state.currentRepeatNumber.value)
    const [displayedTextIndex, setDisplayedTextIndex] = useState(0)

    const dispatch = useDispatch()
    const speechObj = new SpeechSynthesisUtterance()

    speechObj.addEventListener('boundary', (event) => {
        // console.log(event.charIndex, event.elapsedTime, event.name)
        if (event.name === "word") {
            setDisplayedTextIndex(event.charIndex)
        }
    })

    speechObj.addEventListener('end', (event) => {
        if(currentRepeatNumber < repeatsPerSegment){
            dispatch(setCurrentRepeatNumber(currentRepeatNumber + 1))
           
            // stopText()
            playText(textDivisions[activePlaySegment].text)
        } else {
            resetState()
        }
    })

    const getVoices = () => { // OS voices get loaded into the browser asynchronously
        return new Promise(resolve => {
            let voices = window.speechSynthesis.getVoices()
            if (voices.length) {
              resolve(voices)
              return
            }
            const voiceschanged = () => {
              voices = window.speechSynthesis.getVoices()
              resolve(voices)
            }
            window.speechSynthesis.onvoiceschanged = voiceschanged
        })
    }

    const formatWord = (tDiv) => {
        const words = tDiv.text
                        //.substring(0, tDiv.text.indexOf(' ', displayedTextIndex + 1))
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

    const playText = async (text) => {
        if(window.speechSynthesis.paused && speechSynthesis.speaking){
            return speechSynthesis.resume()
        }
        const voices = await getVoices()
        speechObj.voice = voices[1] || voices[0]
        speechObj.volume = volume / 100.0
        speechObj.rate = playbackSpeed
        speechObj.text = text
        window.speechSynthesis.speak(speechObj)
    }

    const stopText = () => {
        speechSynthesis.resume()
        speechSynthesis.cancel()
    }

    const resetState = () => {
        speechSynthesis.resume()
        speechSynthesis.cancel()
        setDisplayedTextIndex(0)
        dispatch(setCurrentRepeatNumber(1))
        speechObj.removeEventListener('boundary')
        speechObj.removeEventListener('end')
    }

    useEffect(() => {
        stopText()
        playText(textDivisions[activePlaySegment].text)
    }, [activePlaySegment, textDivisions, volume, playbackSpeed])

    return (
        <span className={styles.textSection}>
            {
                formatWord(textDivisions[activePlaySegment])
            }
        </span>
    )
}

export const reset = () => {
    PlayTextSection.resetState()
}
export default PlayTextSection;

