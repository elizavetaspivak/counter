import React from 'react';
import './App.css';

type ButtonPropsType = {
    title: string
    buttonFunction: () => void
    value: number
    disabledButton: (value: number) => boolean
}

export function Button(props: ButtonPropsType) {

    return (
        <div>
            <button className={'button'} onClick={props.buttonFunction}
                    disabled={props.disabledButton(props.value)}>{props.title}</button>
        </div>
    );
}

