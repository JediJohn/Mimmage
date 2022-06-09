import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCurrentRepeatNumber, setCurrentRepeatNumber } from "../../redux/reducers/currentRepeatNumber.reducer";
import { setRepeatsPerSegment } from "../../redux/reducers/repeatsPerSegment.reducer";

import { TEXT_SECTION_BORDER_RADIUS } from './PrepareTextSection'

import styles from './widget_style.module.scss'


const PlayTextSection = ({textDivisions}) => {

    // const textDivisions = useSelector((state) => state.textDivisions.value)
    const activePlaySegment = useSelector((state) => state.activePlaySegment.value)
    const repeatsPerSegment = useSelector((state) => state.repeatsPerSegment.value)
    const playbackSpeed = useSelector((state) => state.playbackSpeed.value)
    const volume = useSelector((state) => state.volume.value)
    const currentRepeatNumber = useSelector((state) => state.currentRepeatNumber.value)
    const [displayedTextIndex, setDisplayedTextIndex] = useState(0)

    const dispatch = useDispatch()
    const speechObj = new SpeechSynthesisUtterance()
    const synth = window.speechSynthesis;

    const handleBoundary = (event) => {
        // console.log(event.charIndex, event.elapsedTime, event.name)
        if (event.name === "word") {
            setDisplayedTextIndex(event.charIndex)
        }
    }

    const handleEnd = () => {
        console.log(`got to end of one seg... ${currentRepeatNumber} < ${repeatsPerSegment} is:`,currentRepeatNumber < repeatsPerSegment)
        if(currentRepeatNumber < repeatsPerSegment){
            dispatch(incrementCurrentRepeatNumber(currentRepeatNumber + 1))
            synth.cancel()
            playText(textDivisions[activePlaySegment].text)
        } else {
            console.log("got to end and should cancel...")
            resetRead()
        }
    }



    const getVoices = () => { // OS voices get loaded into the browser asynchronously
        return new Promise(resolve => {
            let voices = synth.getVoices()
            if (voices.length) {
              resolve(voices)
              return
            }
            const voiceschanged = () => {
              voices = synth.getVoices()
              resolve(voices)
            }
            synth.onvoiceschanged = voiceschanged
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
        if(synth.paused && synth.speaking){
            return synth.resume()
        }
        const voices = await getVoices()
        speechObj.voice = voices[1] || voices[0]
        speechObj.volume = volume / 100.0
        speechObj.rate = playbackSpeed
        speechObj.text = text
        speechObj.lang = 'en-US'
        synth.speak(speechObj)
    }

    const stopRead = () => {
        console.log("stop read is called")
        speechObj.removeEventListener('boundary', handleBoundary)
        speechObj.removeEventListener('end', handleEnd)
        synth.cancel()
    }

    const resetRead = () => {
        setDisplayedTextIndex(0)
        dispatch(setCurrentRepeatNumber(1))
        stopRead()
    }

    useEffect(() => {
        console.log("INITIAL useEffect was called!!!")
        speechObj.addEventListener('boundary', handleBoundary)
        speechObj.addEventListener('end', handleEnd)
        playText(textDivisions[activePlaySegment].text)
        return () => {
            // cleanup
            resetRead()
        }
    }, [activePlaySegment, textDivisions, volume, playbackSpeed])

    return (
        <span className={styles.textSection}>
            {
                formatWord(textDivisions[activePlaySegment])
            }
        </span>
    )
}

export default PlayTextSection;

