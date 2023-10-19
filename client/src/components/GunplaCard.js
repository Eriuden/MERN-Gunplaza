import React from 'react'
import {useSelector} from "react-redux"
import { isEmpty } from '../utils'

export const GunplaCard = ({gunplaProps}) => {
  const gunplas = useSelector((state)=> state.allGunplasReducer)

  
  return (
    <div key= {gunplaProps._id}>
      <>
        <div>
          <img src={!isEmpty(gunplas[0] && 
          gunplas.map((gunpla) => {
            if (gunpla._id) return gunpla.picture
          }))}
          />

          <h3>{!isEmpty(gunplas[0] && 
          gunplas.map((gunpla) => {
            if (gunpla._id) return gunpla.name
          }))}
          </h3>

          <h3>{!isEmpty(gunplas[0] && 
          gunplas.map((gunpla) => {
            if (gunpla._id) return gunpla.grade
          }))}
          </h3>

          <h3>{!isEmpty(gunplas[0] && 
          gunplas.map((gunpla) => {
            if (gunpla._id) return gunpla.price
          }))}
          </h3>
        </div>
      </>
    </div>
  )
}
