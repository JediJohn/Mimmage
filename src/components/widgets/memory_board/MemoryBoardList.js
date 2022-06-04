import { useEffect, useState } from "react";
import MemoryBoardCard from "./MemoryBoardCard";
import { MemoryBoardAPI } from "../../../api/api"
import example_image from "./play_settings.png"


const MemoryBoardList = () => {

    const [boards, setBoards] = useState([])
    const log = async () => {
        let data = await MemoryBoardAPI.getMemoryBoards();
        console.log(data)
    }

    const boardCards = () => boards.map(board => 
        <span key={board.id}>
            <MemoryBoardCard board_id={board.id} title={board.title} text={board.rawText} image={example_image}></MemoryBoardCard>
        </span>)

    useEffect(async () => {
        const query = await MemoryBoardAPI.getMemoryBoards()
        setBoards(query.data.memoryBoards)
    }, [])
    return (
        <div>
            {boardCards()}
        </div>
    )
}

export default MemoryBoardList;
