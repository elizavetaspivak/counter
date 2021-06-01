import React, {useState} from 'react'
import './App.css'
import {Button} from './Button'
import {SetBoard} from './SetBoard'
import {Score} from './Score';

export type TextType = `enter value and press 'set'` | `Incorrect value!`

export const App: React.FC = () => {

    const start = localStorage.getItem('start')
    const end = localStorage.getItem('end')

    const [maximumValue, setMaximumValue] = useState<number>(Number(end))
    const [startValue, setStartValue] = useState<number>(Number(start))

    const [value, setValue] = useState<number>(0)
    const [text, setText] = useState<TextType>(`enter value and press 'set'`)

    const [activeMaxValue, setActiveMaxValue] = useState<boolean>(true)
    const [activeMinValue, setActiveMinValue] = useState<boolean>(true)

    const setFunc = () => {
        setValue(startValue)
        setActiveMinValue(false)
        setActiveMaxValue(false)

    }

    const setToLocalStorage = (key: string, value: number) => {
        localStorage.setItem(key, value.toString())
    }
    const incFunc = () => {
        if (value >= startValue && value <= maximumValue) {
            setValue(value + 1)
        }
    }
    const resFunc = () => {
        setValue(0)
    }

    const disabledSetButton = (value: number) => {
        if (maximumValue && startValue >= 0 && maximumValue > startValue && maximumValue !== startValue && maximumValue > 0 && startValue >= 0) {
            return false
        } else {
            return true
        }
    }
    const disabledIncButton = (value: number) => {
        if (value >= 0 && value < maximumValue && value >= startValue && (!activeMaxValue && !activeMinValue)) {
            return false
        } else {
            return true
        }
    }
    const disabledResButton = (value: number) => {
        return value <= 0;
    }

    const setTxt = (text: string) => {
        (startValue === 0 && maximumValue > 0) || (maximumValue > 0 && maximumValue > startValue && startValue >= 0)
            ? setText(`enter value and press 'set'`)
            : setText('Incorrect value!')
    }

    return (
        <div className={'App'}>
            <div className={'border'}>
                <SetBoard value={value}
                          setFunc={setFunc}
                          disabledSetButton={disabledSetButton}
                          maximumValue={maximumValue}
                          setMaximumValue={setMaximumValue}
                          startValue={startValue}
                          setStartValue={setStartValue}
                          setActiveMaxValue={setActiveMaxValue}
                          setActiveMinValue={setActiveMinValue}
                          text={text}
                          setText={setTxt}
                          setToLocalStorage={setToLocalStorage}
                />
            </div>
            <div className={'border'}>
                <Score value={value}
                       maxValue={maximumValue}
                       startValue={startValue}
                       text={text}
                       activeMaxValue={activeMaxValue}
                       activeMinValue={activeMinValue}
                />
                <div className={'btnBorder'}>
                    <Button title={'inc'}
                            buttonFunction={incFunc}
                            value={value}
                            disabledButton={disabledIncButton}/>
                    <Button title={'reset'}
                            buttonFunction={resFunc}
                            value={value}
                            disabledButton={disabledResButton}/>
                </div>
            </div>
        </div>
    )
}
