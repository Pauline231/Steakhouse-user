import React from 'react'
import { levels } from '../constants/static'

const Select = () => {
  return (
    <>
    <div>
    <select >
        {levels.map((level)=>{
            <option key={level}>{level}</option>
        })}
    </select>

    </div>
    </>
  )
}

export default Select