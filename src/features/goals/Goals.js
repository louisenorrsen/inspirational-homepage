import style from './Goals.module.css'
import AddGoalForm from './addGoalForm/AddGoalForm'
import GoalList from './goalList/GoalList'

export const Goals = () => {
  return (
    <div className={style.goalsContainer}>
      <AddGoalForm />
      <GoalList />
    </div>
  )
}
