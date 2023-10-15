import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { getAllGunpla } from '../redux/actions/gunpla.action'
import { useSelector, UseSelector } from 'react-redux/es/hooks/useSelector'
import { GunplaCard } from './GunplaCard'

export const Searcher = () => {

  const [search, setSearch] = useState("")
  const gunplas = useSelector((state) => state.gunplaReducer)
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(getAllGunpla)
  }, [search])

  const handleSearchChange = (e) => {
    setSearch(e.target.value)

    const result = gunplas.filter((gunpla)=> gunpla.name.toLowerCase()
    .includes(search.toLowerCase()) || gunpla.grade.toLowerCase()
    .includes(search.toLowerCase))

    setSearch(result)
  }


  return (
    <div>
      <form action='' className='my-4'>
        <input type="text"
        placeholder='Entrez un nom' id="search-input"
        onChange={handleSearchChange} value={search}/>
      </form>

      <div>
        {search ? (
          gunplas.map((gunpla)=> {
            if (gunpla.name.includes(search)){
              <GunplaCard gunplaProps={gunpla} key={gunpla._id}/>
            }
          })
        ): ""}
      </div>
    </div>
  )
}
