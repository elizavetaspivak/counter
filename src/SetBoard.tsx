import React, {ChangeEvent} from 'react'
import { Button } from './Button'

type SetBoardPropsType = {
    value: number
    setFunc: () => void
    disabledSetButton: (value: number) => boolean
    maximumValue: number
    setMaximumValue: (value: number) => void
    startValue: number
    setStartValue: (value: number) => void
    setActiveMaxValue: (value: boolean) => void
    setActiveMinValue: (value: boolean) => void
    text: string
    setText: (text: string) => void
    setToLocalStorage: (key: string, value: number) => void
}

export const SetBoard: React.FC<SetBoardPropsType> = (props: SetBoardPropsType) => {
    (props.startValue === 0 && props.maximumValue > 0) || (props.maximumValue > 0 && props.maximumValue > props.startValue && props.startValue >= 0)
        ? props.setText(`enter value and press 'set'`)
        : props.setText('Incorrect value!')

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setActiveMaxValue(true)
        let maxCurrentValue: number = Number(e.currentTarget.value)
        props.setToLocalStorage('end', maxCurrentValue)
        props.setMaximumValue(maxCurrentValue)
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setActiveMinValue(true)
        props.setStartValue(0)
        let startCurrentValue = Number(e.currentTarget.value)
        props.setToLocalStorage('start', startCurrentValue)
        props.setStartValue(startCurrentValue)
    }

    return (
        <div>
            <div>
                <div className={'start'}>
                    <span className={'max'}>max value: </span>
                    <input onFocus={()=> {props.setActiveMaxValue(true)}}
                           className={(props.text === 'Incorrect value!') ? 'inputRed' : `startInput`}
                           onChange={(e) => {onChangeMaxValue(e)}} type="number"
                           value= {props.maximumValue}/>
                </div>
                <div className={'end'}>
                    <span className={'min'}>start value:</span>
                    <input onFocus={()=> {props.setActiveMinValue(true)}}
                           className={(props.text === 'Incorrect value!') ? `inputRed` : `endInput`}
                           onChange={(e) => {onChangeStartValue(e)}} type="number"
                           value={props.startValue}/>
                </div>
            </div>
            <div>
                <Button title={'set'} buttonFunction={props.setFunc} value={props.value}
                        disabledButton={props.disabledSetButton} />
            </div>
        </div>
    )
}