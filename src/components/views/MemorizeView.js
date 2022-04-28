import React from 'react'
import { useSelector } from 'react-redux'
import SideBySideLayout from '../layouts/SideBySideLayout';
import MemorizeOverBar from '../widgets/bars/MemorizeOverBar';
import MemorizeUnderBar from '../widgets/bars/MemorizeUnderBar';
import MemorizeTextSection from '../widgets/MemorizeTextSection';
import MemorizePlayModeOverBar from '../widgets/bars/MemorizePlayModeOverBar'
import PlayTextSection from '../widgets/PlayTextSection'

const MemorizeView = () => {
    const playMode = useSelector((state) => state.playMode.value)
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
    return (
        <SideBySideLayout
            OverBar={getOverBar()}
            TextSection={getTextSection()}
            UnderBar={MemorizeUnderBar}></SideBySideLayout>
    )
}

export default MemorizeView;
