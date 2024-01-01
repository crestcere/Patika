import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

export const ExampleComponent = ({ text }) => {
  return <div className='example-component'>{text}</div>
}
export const Button = (props) => {
  return (
    <button {...props} className='button'>
      {props.text}
    </button>
  )
}
