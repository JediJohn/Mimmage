import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActivePlaySegment } from '../../redux/reducers/activePlaySegment.reducer'


import styles from './widget_style.module.scss'

const MemSegments = () => {
  const textDivisions = useSelector((state) => state.textDivisions.value)
  const segmentColors = useSelector((state) => state.segmentColors.value)
  const activePlaySegment = useSelector((state) => state.activePlaySegment.value)
  const playMode = useSelector((state) => state.playMode.value)
  
  const dispatch = useDispatch()

  const segmentIsActivePlay = (index) => {
    return index === activePlaySegment
  }

  const getActiveSegmentStyle = (index) => {
    if (playMode !== 'playing'){
      return ""
    }
    return segmentIsActivePlay(index)?styles.segmentPillActive:styles.segmentPillOther
  }

  const clickSegment = (index) => {
    if(index === activePlaySegment){return}
    window.speechSynthesis.cancel()
    dispatch(setActivePlaySegment(index))
  }

  const segmentPills = textDivisions.map((textDiv, index) =>
    <div className={`${styles.segmentPill} ${getActiveSegmentStyle(index)}`}
      style={{ backgroundColor: segmentColors[index] }}
      key={`${textDiv.text}_${segmentColors[index]}`}
      disabled={segmentIsActivePlay(index)}
      onClick={()=>clickSegment(index)}>
      {textDiv.text}
    </div>
  )

  return (
    <div className={styles.segmentContainer}>
      {segmentPills}
    </div>
  )
}

export default MemSegments;
