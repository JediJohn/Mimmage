import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import SideBySideLayout from '../layouts/SideBySideLayout';
import MemorizeOverBar from '../widgets/bars/MemorizeOverBar';
import MemorizeUnderBar from '../widgets/bars/MemorizeUnderBar';
import MemorizeTextSection from '../widgets/MemorizeTextSection';
import MemorizePlayModeOverBar from '../widgets/bars/MemorizePlayModeOverBar'
import PlayTextSection from '../widgets/PlayTextSection'
import {MemoryBoardAPI} from '../../api/api'
import { setTextDivisionsArray } from '../../redux/reducers/textDivisionsSlice.reducer'


const MemorizeView = () => {
    const board_id = useParams()
    const playMode = useSelector((state) => state.playMode.value)
    const dispatch = useDispatch()
    
    const getOverBar = ()=> {
        if (playMode === "playing"){
            return MemorizePlayModeOverBar
        } else if (playMode === "stopped") {
            return MemorizeOverBar
        } else if (playMode === "recording") {
            return "Not implemented yet"
        } else {
            return "Error"
        }
    }
    
    const getTextSection = () => {
        if (playMode === "playing"){
            return PlayTextSection
        } else {
            return MemorizeTextSection
        }
    }

    useEffect(async ()=>{
        if(board_id){
            const data = (await MemoryBoardAPI.getMemoryBoard(board_id)).data
            dispatch(setTextDivisionsArray(data.memoryBoard.textDivisions))
        }
    }, [board_id])
    return (
        <SideBySideLayout
            OverBar={getOverBar()}
            TextSection={getTextSection()}
            UnderBar={MemorizeUnderBar}></SideBySideLayout>
    )
}

export default MemorizeView;
