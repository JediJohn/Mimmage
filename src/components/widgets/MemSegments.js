import React from 'react'
import { useSelector } from 'react-redux'

import styles from './widget_style.module.scss'

const MemSegments = () => {
  const textDivisions = useSelector((state) => state.textDivisions.value)
  const segmentColors = useSelector((state) => state.segmentColors.value)

  const segmentPills = textDivisions.map((textDiv, index) =>
    <div className={styles.segmentPill}
      style={{ backgroundColor: segmentColors[index] }}
      key={`${textDiv.text}_${segmentColors[index]}`}>
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
