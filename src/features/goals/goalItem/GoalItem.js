import style from './GoalItem.module.css'
import { completeGoal, deleteGoal } from '../goalSlice'
import { useDispatch } from 'react-redux'

const GoalItem = ({ id, title, completed, color }) => {
  const dispatch = useDispatch()

  const handleCompletedGoal = () => {
    dispatch(
      completeGoal({
        id: id,
        completed: !completed,
        color: 'hsla(0, 0%, 28%, 0.7)',
      })
    )
  }

  const handleDeleteGoal = () => {
    dispatch(deleteGoal({ id: id }))
  }

  return (
    <div className={style.goalItem} style={{ backgroundColor: color }}>
      {title}
      <div className={style.buttonContainer}>
        <button className={style.done} onClick={handleCompletedGoal}>
          Done
        </button>
        <button className={style.delete} onClick={handleDeleteGoal}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default GoalItem
