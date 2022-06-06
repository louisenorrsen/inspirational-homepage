import style from './ImageDetails.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { selectImages, selectCurrentImageIndex, prevImage, nextImage } from './imageSlice'

export const ImageDetails = () => {
  const dispatch = useDispatch()
  const images = useSelector(selectImages)
  const currentImageIndex = useSelector(selectCurrentImageIndex)
  const currentUserName = images[currentImageIndex].userName
  const currentLink = images[currentImageIndex].link

  const handleNextImage = () => {
    dispatch(nextImage())
  }

  const handlePrevImage = () => {
    dispatch(prevImage())
  }

  return (
    <div className={style.imageDetailsContainer}>
      <button className={style.arrow} onClick={handlePrevImage}>&#x219E;</button>
      <div className={style.details}>
        Photo by{' '}
        <a
          href={`${currentLink}?utm_source=your_app_name&utm_medium=referral`}
          target='_blank'
          rel='noreferrer'
          className={style.photoLink}>
          {currentUserName}
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
      <button className={style.arrow} onClick={handleNextImage}>&#8608;</button>
    </div>
  )
}
