import React, { useState, useEffect } from 'react';

import ActivityStep from './ActivityStep';
import ActivityUpload from './ActivityUpload';
import ActivityWin from './ActivityWin';
import Loading from '../../components/Loading';

import axios from 'axios';

const Activity = props => {

    const [activity, setActivity] = useState({});
    const [steps, setSteps] = useState([]);
    const [stepsCount, setStepsCount] = useState(0);
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [currentStep, setCurrentStep] = useState({});
    const [kid, setKid] = useState({});

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

        let currentKid = JSON.parse(sessionStorage.getItem('currentKid'));
        let kidId = 0;
        if(currentKid) {
            kidId = currentKid.id;
        }
        
        axios.get('/api/kid/' + kidId)
        .then(json => {
            if(json.data.success) {
                setKid(json.data.kid);
            }
        })

    }, [])

    const prevStep = e => {
        e.preventDefault();

        if(currentStepIndex - 1 < 0) {
            setCurrentStepIndex(0);
        } else {
            setCurrentStepIndex(currentStepIndex - 1);
        }
    }

    const nextStep = e => {
        e.preventDefault();

        if(currentStepIndex + 1 > Object.keys(steps).length - 1) { // If last step
            nextPage();
        } else {
            setCurrentStepIndex(currentStepIndex + 1);
        }
    }

    const prevPage = () => {
        currentPageIndex - 1 < 0 ?
        setCurrentPageIndex(0) : 
        setCurrentPageIndex(currentPageIndex - 1);
    }

    const nextPage = () => {

        currentPageIndex + 1 > pages.length - 1 ?
        setCurrentPageIndex(pages.length-1) : 
        setCurrentPageIndex(currentPageIndex + 1);
    }

    const pages = [
        <ActivityStep
            count = {stepsCount}
            step = {steps[currentStepIndex]}
            previous = {prevStep}
            next = {nextStep}
        />,
        <ActivityUpload
            next={nextPage}
            kid={kid}
            activityId={activity.id}
        />,
        <ActivityWin
            kid={kid}
            trophy_id={activity.trophy_id}
        />
    ];

    let component = pages[currentPageIndex];

    if (Object.keys(steps).length > 0) {
        return (
            <div>
                {component}
            </div>
        );
    } else {
        return <Loading />;
    }

}

export default Activity;