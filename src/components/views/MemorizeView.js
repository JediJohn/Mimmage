import React from 'react'
import SideBySideLayout from '../layouts/SideBySideLayout';
import MemorizeOverBar from '../widgets/bars/MemorizeOverBar';
import MemorizeUnderBar from '../widgets/bars/MemorizeUnderBar';
import MemorizeTextSection from '../widgets/MemorizeTextSection';

const PrepareView = () => {

    return (
        <SideBySideLayout
            OverBar={MemorizeOverBar}
            TextSection={MemorizeTextSection}
            UnderBar={MemorizeUnderBar}></SideBySideLayout>
    )
}

export default PrepareView;
