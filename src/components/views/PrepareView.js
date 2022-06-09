import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import SideBySideLayout from '../layouts/SideBySideLayout';
import PrepareOverBar from '../widgets/bars/PrepareOverBar';
import PrepareUnderBar from '../widgets/bars/PrepareUnderBar';
import PrepareTextSection from '../widgets/PrepareTextSection';
import { useParams } from 'react-router-dom';
import {MemoryBoardAPI} from '../../api/api'


const PrepareView = () => {
    const [textDivisions, setTextDivisions] = useState([])

    const board_id = useParams()

    useEffect(async ()=>{
        if(board_id){
            const data = (await MemoryBoardAPI.getMemoryBoard(board_id)).data
            setTextDivisions(data.memoryBoard.textDivisions)
        }
    }, [board_id])

    const setTextDivisionsArray = async (newTextDivs) => {
        const result = await MemoryBoardAPI.setTextDivisions(board_id, newTextDivs)
        console.log(result)
    }

    return (
        <SideBySideLayout
            OverBar={PrepareOverBar}
            TextSection={PrepareTextSection}
            textDivisions={textDivisions}
            setTextDivisionsArray={setTextDivisionsArray}
            UnderBar={PrepareUnderBar}></SideBySideLayout>
    )
}

export default PrepareView;
