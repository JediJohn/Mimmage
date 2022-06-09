import { useState, useEffect, useRef, useLayoutEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { ReactSortable } from "react-sortablejs";
import randomColor from "randomcolor";
import { setTextDivisionsCompleted} from '../../redux/reducers/textDivisionsSlice.reducer'

import styles from './widget_style.module.scss'
import TextWord from "./TextWord";

const INIT_COLOR = "#FF8080";
export const TEXT_SECTION_BORDER_RADIUS = "4px"
const INIT_KEY = -1


const PrepareTextSection = ({textDivisions, setTextDivisionsArray}) => {
  const [sortablePassage, setSortablePassage] = useState([]);
  const [segmentIntervals, setSegmentIntervals] = useState([])
  const [activeSeparator, setActiveSeparator] = useState(INIT_KEY);
  const [currColor, setCurrColor] = useState(INIT_COLOR)

  // const textDivisions = useSelector((state) => state.textDivisions.value)
  const prepareTextDivisionsToReset = useSelector((state) => state.inputText.reset)
  const inputText = useSelector((state) => state.inputText.text)
  

  const dispatch = useDispatch()

  useEffect(() => {
    initPassageArray()
  }, [inputText])

  const initPassageArray = () => {
    let sortableList = [{ id: `${-1}_${0}`, text: "" }]
    setSortablePassage(sortableList.concat(
      inputText.split(/(\s+)/)
              .filter( function(e) { return e.trim().length > 0; } )
              .map((word, index) => {
        return { id: index, text: `${word} ` }
      })
    ))
  }

  const seperatorHover = (id) => {
    setActiveSeparator(id)
  }

  const generateColor = () => {
    const color = currColor
    setCurrColor(randomColor({ hue: 'random', luminosity: 'light' }))
    return color
  }

  const idContainingSegment = (id) => {
    for (let i in textDivisions) {
      if (id > textDivisions[i].beginKey &&
        id <= textDivisions[i].endKey) {
        return textDivisions[i]
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
    setTextDivisionsArray(textDivisionStrings)
    if(id === sortablePassage.length - 2){
      // Completed highlighting the entire passage
      dispatch(setTextDivisionsCompleted(true))
    }
  }

  const textClick = (id) => {
    if (segmentIntervals.length > 0 && idContainingSegment(id)) {
      return
    }
    generateSectionStrings(segmentIntervals, id, generateColor())
  }

  const sortableArray = sortablePassage.map(item => {
    if (!item || !item.id) { return }
    let bgColor = "inherit"
    let seg = null
    if (seg = idContainingSegment(item.id)) {
      // Already selected text
      bgColor = seg.color;
    } else if (item.id <= activeSeparator) {
      // New text to be highlighted
      bgColor = currColor;
    }
    return (
      <span key={item.id}>
        <TextWord
          seperatorHover={seperatorHover}
          textClick={textClick}
          item={item}
          bgColor={bgColor}
          sortablePassage={sortablePassage}></TextWord>
      </span>
    )
  })

  const resetTextDivisions = () => {
    setSortablePassage([])
    setSegmentIntervals([])
    setActiveSeparator(INIT_KEY)
    setCurrColor(INIT_COLOR)
    setTextDivisionsArray([])
    dispatch(setTextDivisionsCompleted(false))
    initPassageArray()

  }

  const renderRun = useRef(true)
  useLayoutEffect(() => {
    // We dont want to resetTextDivisions if this is the initial render call to useEffect
    if(renderRun.current){
      renderRun.current = false
      return
    }
    resetTextDivisions()
  }, [prepareTextDivisionsToReset])

  return (
    <span className={styles.textSection}>
      {sortableArray}
    </span>
  )
}

export default PrepareTextSection;

