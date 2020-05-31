import React, { useState } from 'react';

const Activity = props => {

    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const [currentStepIndex, setCurrentStepIndex] = useState(1);

    

    const pages = [
        'activityStep',
        'activityUpload',
        'activityWin'
    ]

    component = pages[currentPageIndex];

    return (
        <div>
            {component}
        </div>
    );
}

export default Activity;