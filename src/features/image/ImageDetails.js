import style from './ImageDetails.module.css'
import { selectUserName, selectLink } from './imageSlice'
import { useSelector } from 'react-redux'

export const ImageDetails = () => {
    const userName = useSelector(selectUserName)
    const link = useSelector(selectLink)

  return (
    <div className={style.imageDetailsContainer}>
      <div className={style.details}>
        Photo by{' '}
        <a
          href={`${link}?utm_source=your_app_name&utm_medium=referral`}
          target='_blank'
          rel='noreferrer'
          className={style.photoLink}>
          {userName}
        </a>{' '}
        on{' '}
        <a
          href='https://unsplash.com/?utm_source=your_app_name&utm_medium=referral'
          target='_blank'
          rel='noreferrer'
          className={style.photoLink}>
          Unsplash
        </a>
      </div>
    </div>
  )
}
