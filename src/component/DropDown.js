import React from 'react'
import style from './MainStyle.css'

function DropDown() {
    return (
        <div>
            <select>
                <optgroup label='언어선택'>
                    <option name='Cpp' value={'Cpp'} selected>CPP</option>
                    <option name='Java' value={'Java'}>Java</option>
                    <option name='Python' value={'Python'}>Python</option>
                </optgroup>
            </select>
        </div>
    )
}

export default DropDown