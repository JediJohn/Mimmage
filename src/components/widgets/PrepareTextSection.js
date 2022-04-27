import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { ReactSortable } from "react-sortablejs";
import randomColor from "randomcolor";
import { setTextDivisionsArray } from '../../redux/reducers/textDivisionsSlice.reducer'
import { addSegmentColor } from "../../redux/reducers/segmentColors.reducer";

import styles from './widget_style.module.scss'

const INIT_COLOR = "#FF8080";
export const TEXT_SECTION_BORDER_RADIUS = "4px"
const INIT_KEY = "-1_0"

const PrepareTextSection = ({ verseText }) => {

  const [sortablePassage, setSortablePassage] = useState([]);
  const [segmentIntervals, setSegmentIntervals] = useState([])
  const [activeSeparator, setActiveSeparator] = useState(INIT_KEY);
  const [currColor, setCurrColor] = useState(INIT_COLOR)

  const textDivisions = useSelector((state) => state.textDivisions.value)
  const segmentColors = useSelector((state) => state.segmentColors.value)

  const dispatch = useDispatch()

  useEffect(() => {
    initVerseArray()
  }, [])

  const initVerseArray = () => {
    let chapterVerses = verseText.filter(text => /^\d/.test(text))
    let result = {}
    let sortableList = [{ id: `${-1}_${0}`, text: "" }]
    for (let i in chapterVerses) {
      let verseWords = chapterVerses[i].split(" ")
      result[verseWords[0]] = verseWords.slice(1)
      sortableList = sortableList.concat(verseWords.map((word, index) => { return { id: `${i}_${index}`, text: `${word} ` } }))
    }
    setSortablePassage(sortableList)
  }

  const seperatorHover = (id) => {
    setActiveSeparator(id)
  }

  const generateColor = () => {
    dispatch(addSegmentColor(currColor))
    const color = currColor
    setCurrColor(randomColor({ hue: 'random', luminosity: 'light' }))
    return color
  }

  const idIsGreater = (id1, id2) => {
    // Compare 2 ids from in the format: { id: `${i}_${index}`, text: `${word} ` }
    const id1Split = id1.split("_")
    const id2Split = id2.split("_")
    if (parseInt(id1Split[0]) > parseInt(id2Split[0])) {
      return true
    } else if (parseInt(id1Split[0]) < parseInt(id2Split[0])) {
      return false
    } else {
      if (parseInt(id1Split[1]) > parseInt(id2Split[1])) {
        return true
      } else if (parseInt(id1Split[1]) < parseInt(id2Split[1])) {
        return false
      } else {
        return null
      }
    }
  }

  const idContainingSegmentIndex = (id) => {
    for (let i in textDivisions) {
      if (idIsGreater(id, textDivisions[i].beginKey) &&
        !idIsGreater(id, textDivisions[i].endKey)) {
        return i
      }
    }
    return null
  }

  const generateSectionStrings = (oldIntervals, id, color) => {
    let intervals = [...oldIntervals, id]
    // Create continuous strings based on the selected text from the word array
    let previousKey = oldIntervals.length === 0 ? INIT_KEY : oldIntervals[oldIntervals.length - 1]
    let prevArrayIndex = sortablePassage.findIndex(wordObj => wordObj.id == previousKey) + 1
    let currArrayIndex = sortablePassage.findIndex(wordObj => wordObj.id == id) + 1
    const intervalArr = sortablePassage.slice(prevArrayIndex, currArrayIndex)
    const textDivisionStrings = [...textDivisions, {
      beginKey: previousKey,
      endKey: id,
      color: color,
      text: intervalArr.map(item => item.text).join(" ")
    }]
    setSegmentIntervals(intervals)
    dispatch(setTextDivisionsArray(textDivisionStrings))
  }

  const textClick = (id) => {
    if (segmentIntervals.length > 0 && idContainingSegmentIndex(id)) {
      return
    }
    generateSectionStrings(segmentIntervals, id, generateColor())
  }

  const getRoundedSectionBorders = (item) => {
    let leftB = "0"
    let rightB = "0"
    for (let i in textDivisions) {
      // Must increment the beginning index since it is non-inclusive to the left
      const beginIndex = sortablePassage.findIndex(wordObj => wordObj.id == textDivisions[i].beginKey) + 1
      if (item.id == sortablePassage[beginIndex].id) {
        leftB = TEXT_SECTION_BORDER_RADIUS
      }
      if (item.id == textDivisions[i].endKey) {
        rightB = TEXT_SECTION_BORDER_RADIUS
      }
    }
    return { left: leftB, right: rightB }
  }

  const sortableArray = sortablePassage.map(item => {
    if (!item || !item.id) { return }
    if (item.id.startsWith("DRAGGABLE_")) {
      return <span className="mem-segment-divider verse-text" key={item.id}></span>
    } else {
      let bgColor = "inherit"
      let rounded = getRoundedSectionBorders(item)
      let segIndex = null
      if (segIndex = idContainingSegmentIndex(item.id)) {
        // Already selected text
        bgColor = segmentColors[segIndex];
      } else if (!idIsGreater(item.id, activeSeparator)) {
        // New text to be highlighted
        bgColor = currColor;
      }
      return (
        <span className={`${styles.textSections} noDrag`}
          onMouseEnter={() => seperatorHover(item.id)}
          onClick={() => textClick(item.id)}
          style={{ 
                    backgroundColor: bgColor,
                    borderRadius: `${rounded.left} ${rounded.right} ${rounded.right} ${rounded.left}` }}
          key={item.id}>
          {item.text}
        </span>
      )
    }
  })

  const textSections =
    <ReactSortable
      className={styles.verseContainer}
      filter=".noDrag"
      list={sortablePassage}
      setList={setSortablePassage}
      animation={150}>
      {sortableArray}
    </ReactSortable>

  return (
    <span className={styles.textSection}>
      {textSections}
    </span>
  )
}

export default PrepareTextSection;

