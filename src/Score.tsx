import React from 'react';
import './App.css';

type ScorePropsType = {
    value: number
    text: string
    maxValue: number
    startValue: number
    activeMaxValue: boolean
    activeMinValue: boolean
}

export function Score(props: ScorePropsType) {

    return (
        <div>
            {props.startValue < 0 || props.maxValue < 0 || props.activeMaxValue || props.activeMinValue
                ? <div className={(props.text === 'Incorrect value!') ? 'countEnd' : 'count'}> {props.text}</div>
                : <div className={(props.value === props.maxValue) ? 'countEnd' : 'count'}>{props.value}</div>
            }
        </div>
    )
}