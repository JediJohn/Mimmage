import { useDispatch, useSelector } from 'react-redux'
import { setActivePlaySegment } from '../../redux/reducers/activePlaySegment.reducer'
import IconButton from '@mui/material/IconButton';
import PaletteIcon from '@mui/icons-material/Palette';
import randomColor from "randomcolor";


import styles from './widget_style.module.scss'

const MemSegments = ({textDivisions, setTextDivisionsArray}) => {
  const activePlaySegment = useSelector((state) => state.activePlaySegment.value)
  const playMode = useSelector((state) => state.playMode.value)

  const dispatch = useDispatch()

  const segmentIsActivePlay = (index) => {
    return index === activePlaySegment
  }

  const getActiveSegmentStyle = (index) => {
    if (playMode !== 'playing') {
      return ""
    }
    return segmentIsActivePlay(index) ? styles.segmentPillActive : styles.segmentPillOther
  }

  const clickSegment = (index) => {
    if (index === activePlaySegment) { return }
    window.speechSynthesis.cancel()
    dispatch(setActivePlaySegment(index))
  }

  const newColor = (index) => {
    
    const newDivisions = [...textDivisions]
    newDivisions[index] = {...newDivisions[index], color:randomColor({ hue: 'random', luminosity: 'light' })}
    setTextDivisionsArray(newDivisions)
    // dispatch(setTextDivisionsArray(newDivisions))
  }

  const segmentPills = textDivisions.map((textDiv, index) => {
    if (playMode === 'playing') {
      return <div className={`${styles.segmentPill} ${getActiveSegmentStyle(index)}`}
        style={{ backgroundColor: textDiv.color }}
        key={`${textDiv.text}_${textDiv.color}`}
        disabled={segmentIsActivePlay(index)}
        onClick={() => clickSegment(index)}>
        {textDiv.text}
      </div>
    } else {
      return <div className={styles.segmentPillPrep}>
        <div className={`${styles.segmentPill}`}
            style={{ backgroundColor: textDiv.color }}
            key={`${textDiv.text}_${textDiv.color}`}>
          {textDiv.text}
        </div>
        <span>
          <IconButton onClick={()=>newColor(index)}><PaletteIcon /></IconButton>
        </span>
      </div>
    }
  })


  return (
    <div className={styles.segmentContainer}>
      {segmentPills}
    </div>
  )
}

export default MemSegments;
