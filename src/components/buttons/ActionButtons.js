import React from 'react'
import Button from './Button'

export default function ActionButtons(props) {

  return (
    <div className='flex gap-2 mx-auto'>
      <Button onclick={props.removeCompletedTodos} src='/remove_completed.svg' disable={props.disable}/>
      <Button onclick={props.removeAllTodos} src='/bin.png'/>
    </div>
  )
}
