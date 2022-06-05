import style from './Quote.module.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchQuote, selectQuote, selectAuthor } from './quoteSlice'

export const Quote = () => {
    const dispatch = useDispatch()
    const quote = useSelector(selectQuote)
    const author = useSelector(selectAuthor) 

    useEffect(() => {
        dispatch(fetchQuote())
    }, [dispatch])

    return (
      <div className={style.quoteContainer}>
        <blockquote className={style.quote}>
          &ldquo;{quote}&rdquo; &mdash;{' '}
          <footer className={style.author}>{author}</footer>
        </blockquote>
      </div>
    )
}
