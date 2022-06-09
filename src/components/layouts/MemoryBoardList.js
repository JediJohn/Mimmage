import { useEffect, useState } from "react";
import MemoryBoardCard from "../widgets/memory_board/MemoryBoardCard";
import { MemoryBoardAPI } from "../../api/api"
import example_image from "./play_settings.png"

import styles from "./layout_style.module.scss"
import { BookmarkBorderSharp } from "@mui/icons-material";
import EmptyBoardList from "../widgets/placeholders/EmptyBoardList";


const MemoryBoardList = () => {

    const [boards, setBoards] = useState([])
    const log = async () => {
        let data = await MemoryBoardAPI.getMemoryBoards();
        console.log(data)
    }

    const boardCards = () => boards.map(board => 
        <span key={board.id} className={styles.boardCard}>
            <MemoryBoardCard board_id={board.id} title={board.title} text={board.rawText} image={example_image}></MemoryBoardCard>
        </span>)

    useEffect(async () => {
        const query = await MemoryBoardAPI.getMemoryBoards()
        setBoards(query.data.memoryBoards)
        
    }, [])
    return (
        <div className={styles.memoryBoardList}>
            {boardCards()}
            {boards.length===0?<EmptyBoardList/>:<></>}
        </div>
    )
}

export default MemoryBoardList;
