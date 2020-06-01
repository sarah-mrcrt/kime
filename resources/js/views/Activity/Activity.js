import React, { useState, useEffect } from 'react';

import ActivityStep from './ActivityStep';
import ActivityUpload from './ActivityUpload';
import ActivityWin from './ActivityWin';

import axios from 'axios';

const Activity = props => {

    const [activity, setActivity] = useState({});
    const [steps, setSteps] = useState([]);
    const [stepsCount, setStepsCount] = useState(0);
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [currentStep, setCurrentStep] = useState({});

    let activityId = parseInt(props.match.params.activityId);

    // Getting activity data and steps
    useEffect(() => {

        axios.get('/api/activity/' + activityId)
        .then(json => {
            if(json.data.success) {
                setActivity(json.data.activity);
                setStepsCount(json.data.steps.length);

                // Sort steps by position
                let tmp = json.data.steps.sort((a, b) => (a.position > b.position) ? 1 : -1 );
                setSteps(tmp);

                // Setting first step component
            }
        }).catch(error => {
            console.log(error);
        })

    }, [])

    
    //console.log(activity);

    const prevStep = e => {
        e.preventDefault();

        currentStepIndex - 1 < 0 ?
        setCurrentStepIndex(0) : 
        setCurrentStepIndex(currentStepIndex-1);
    }

    const nextStep = e => {
        e.preventDefault();

        currentStepIndex + 1 > stepsCount - 1 ?
        setCurrentStepIndex(stepsCount) : 
        setCurrentStepIndex(currentStepIndex+1);
    }

    const prevPage = () => {
        currentPageIndex - 1 < 0 ?
        setCurrentPageIndex(0) : 
        setCurrentPageIndex(currentPageIndex - 1);
    }

    const nextPage = () => {
        currentPageIndex + 1 > pages.length - 1 ?
        setCurrentStepIndex(pages.length-1) : 
        setCurrentStepIndex(currentPageIndex + 1);
    }

    const pages = [
        <ActivityStep
            count = {stepsCount}
            step = {steps[currentStepIndex]}
            previous = {prevStep}
            next = {nextStep}
        />,
        <ActivityUpload/>,
        <ActivityWin/>
    ];

    let component = pages[currentPageIndex];

    if (Object.keys(steps).length > 0) {
        return (
            <div>
                {component}
            </div>
        );
    } else {
        return (
            <div>
                Chargement...
            </div>
        )
    }

}

export default Activity;