import style from './GoalList.module.css'
import GoalItem from '../goalItem/GoalItem'
import { useSelector } from 'react-redux'
import { selectGoals } from '../goalSlice'

const GoalList = () => {

    const goals = useSelector(selectGoals)    

    return (
        <ul className={style.goalList}>
            {goals.map((goal) => (
                <GoalItem id={goal.id} key={goal.id} title={goal.title} completed={goal.completed} color={goal.color}/>
            ))}
        </ul>
    )
}

export default GoalList