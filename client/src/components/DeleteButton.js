//Lorsque j'aurais crée un système d'admin plus efficace en MERN, revenir ici et l'incorporer au code

import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteGunpla } from '../redux/actions/gunpla.action'

export const DeleteButton = ({deleteProps}) => {
    const dispatch = useDispatch()
    const destroyGunpla = () => dispatch(deleteGunpla(deleteProps._id))

  return (
    <div onClick={()=> {
        if (window.confirm("Le modèle a subi trop de dommage ?")){
            destroyGunpla()
        }        
    }}>
        <img src="../img/icons/trash.svg" alt="supprimer"/>
    </div>
  )
}
