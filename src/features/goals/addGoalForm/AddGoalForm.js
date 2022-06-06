import { useState } from 'react'
import style from './AddGoalForm.module.css'
import { useDispatch } from 'react-redux'
import { addGoal } from '../goalSlice'

const AddGoalForm = () => {
  const [value, setValue] = useState('')
  const [color, setColor] = useState(0)

  const dispatch = useDispatch()  

  function onSubmit(event) {
    event.preventDefault()
    setColor(color + 40)
    const newColor = (`hsla(${color}, 59%, 31%, 0.6)`)
    dispatch(
      addGoal({
        title: value,
        color: newColor
      })
    )
    setValue('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        className={style.goalInput}
        placeholder='Write your goals here'
        value={value}
        onChange={(e) => setValue(e.target.value)}></input>
    </form>
  )
}

export default AddGoalForm
