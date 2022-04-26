import React from 'react'
import SideBySideLayout from '../layouts/SideBySideLayout';
import PrepareOverBar from '../widgets/bars/PrepareOverBar';
import PrepareUnderBar from '../widgets/bars/PrepareUnderBar';
import PrepareTextSection from '../widgets/PrepareTextSection';

import styles from './view_style.module.scss'

const PrepareView = () => {

    return (
        <SideBySideLayout
            title="Prepare Title"
            OverBar={PrepareOverBar}
            TextSection={PrepareTextSection}
            UnderBar={PrepareUnderBar}></SideBySideLayout>
    )
}

export default PrepareView;
