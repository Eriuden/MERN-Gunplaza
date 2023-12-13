import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GunplaCard } from '../components/GunplaCard'
import { useState, useEffect } from 'react'
import { getGunpla } from '../redux/actions/gunpla.action'
import { isEmpty } from '../utils'

export const Home = () => {
  const [loadCard, setLoadCard] = useState(false)
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()
  const gunplas = useSelector((state)=> state.gunplaReducer)

  const loadMore = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >
      document.scrollingElement.scrollHeight
    ) {
      setLoadCard(true)
    }
  }

  useEffect(()=> {
    if (loadCard) {
      dispatch(getGunpla(count))
      setLoadCard(false)
      setCount(count + 10)
    }
    window.addEventListener("scroll", loadMore)
  }, [loadCard, dispatch, count])

  return (
    <div>
      <div>
        <ul>
          {isEmpty((gunplas[0])) &&
          gunplas.map((gunpla)=> {
            return <GunplaCard gunplaProps={gunpla} key={gunpla._id}/>
          })}
        </ul>
      </div>
    </div>
  )
}
