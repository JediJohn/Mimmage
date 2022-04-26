
import {FC, useState} from "react"
import { ReactSortable } from "react-sortablejs";
import { getBibleChapter } from "bible-gateway-wrapper"
import ExpandIcon from '@mui/icons-material/Expand';

import './PassageSearchView.css';


function PassageSearchView() {
    const [sortablePassage, setSortablePassage] = useState([]);
    const [separatorList, setSeparatorList] = useState(["-1_0"]);
    const [segmentIntervals, setSegmentIntervals] = useState([])
    const [activeSeparator, setActiveSeparator] = useState("-1_0");
    const [passageTextObj, setPassageTextObj] = useState()
    const [passageText, setPassageText] = useState("")
    const [selectedPassages, setSelectedPassages] = useState([])
    const [currentSelection, setCurrentSelection] = useState("")
    const [selectedBook, setSelectedBook] = useState("Ephesians")
    const [selectedChapter, setSelectedChapter] = useState("1")
    // const [selectedVerseStart, setSelectedVerseStart] = useState(-1)
    // const [selectedVerseEnd, setSelectedVerseEnd] = useState(-1)

    const getVerse = async () =>{
        const rawText = await getBibleChapter(selectedBook, selectedChapter, "NKJV", "text-array", false)
        let chapterVerses = rawText.filter(text => /^\d/.test(text))
        let result = {}
        let sortableList = [{ id: `${-1}_${0}`, text: "" }]
        for(let i in chapterVerses){
            let verseWords = chapterVerses[i].split(" ")
            result[verseWords[0]] = verseWords.slice(1)

            sortableList = sortableList.concat(verseWords.map((word, index) =>{return { id: `${i}_${index}`, text: `${word} ` }} ))
            // sortableList = [...sortableList, { id: `DRAGGABLE_${i}`, text: ""}]
            // [
            //     ...sortableList,
            //     {id: `${i}`, text: `item ${i}`}
            //     // verseWords.map((word, index) =>{return { id: `${i}_${index}`, text: word }} ), 
            //     // { id: `DRAGGABLE_${i}`, text: ""}

            // ]
        }
        setSortablePassage(sortableList)
        console.log(sortablePassage)
        setPassageTextObj(result)
    }

    const seperatorHover = (id, text, enter) => {
        setActiveSeparator(id)
    }

    const textClick = (id) => {
        if(segmentIntervals.length > 0 && idIsGreater(segmentIntervals[segmentIntervals.length-1], id)){
            return
        }
        setSegmentIntervals([...segmentIntervals, id])
    }

    const idIsGreater = (id1, id2) => {
        const id1Split = id1.split("_")
        const id2Split = id2.split("_")
        if (parseInt(id1Split[0]) > parseInt(id2Split[0])){
            return true
        } else if (parseInt(id1Split[0]) < parseInt(id2Split[0])){
            return false
        } else{
            if (parseInt(id1Split[1]) > parseInt(id2Split[1])){
                return true
            } else if (parseInt(id1Split[1]) < parseInt(id2Split[1])){
                return false
            } else {
                return null
            }
        }
    }

    const sortableArray = sortablePassage.map(item => {
        if(!item || !item.id){return}
        if (item.id.startsWith("DRAGGABLE_")){
            return <span className="mem-segment-divider verse-text" key={item.id}></span>
        } else {
            let bgColor = "inherit"
            if(segmentIntervals.length > 0 &&
                    !idIsGreater(item.id, segmentIntervals[segmentIntervals.length-1])){
                bgColor = "green";
            } else if (!idIsGreater(item.id, activeSeparator)){
                bgColor = "red"
            }
            return (
                <span className="verse-text" 
                    onMouseEnter={()=>seperatorHover(item.id, item.text, true)}
                    onClick={()=>textClick(item.id)}
                    style={{backgroundColor: bgColor }}
                    key={item.id}>
                    {item.text}
                    {/* <ExpandIcon className="divider-add-button separator-icon" 
                        onMouseEnter={()=>seperatorHover(item.id, item.text, true)} /> */}
                </span>
            )
        }
    })

    const textSections =
        <ReactSortable 
            className="verse-container"
            filter=".verse-text" 
            list={sortablePassage} 
            setList={setSortablePassage}
            animation={150}>
            {sortableArray}
        </ReactSortable>
    
    const textBetweenInterval = (first, second) => {
        return <div>
            {sortablePassage.slice(sortablePassage.findIndex(item=>item.id==first),
                                    sortablePassage.findIndex(item=>item.id==second))
                                    .map(word=>word.text)}
        </div>
    }

    const segmentsList = segmentIntervals.map((wordId, index) =>{
        if(index == 0){
            return textBetweenInterval("-1_0", wordId)
        } else {
            return textBetweenInterval(segmentIntervals[index-1], wordId)
        }
    }
    )

  return (
    <div >
        <h1>{selectedBook} {selectedChapter}</h1>
        <button onClick={getVerse}>Get Passage</button> <br/>
        {textSections}
        <h3>Segments</h3>
        <div>
            {segmentsList}
        </div>
    </div>
  );
}

export default PassageSearchView;
