//Meme topo que pour DeleteButton, j'attendrais de trouver un système admin
//en MERN qui me satisfasse

import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { updateGunpla } from '../redux/actions/gunpla.action'

export const EditButton = (gunplaId) => {
    const [name, setName] = useState(false)
    const [pics, setPics] = useState(false)
    const [grade, setGrade] = useState(false)
    const [price, setPrice] = useState(false)
    const [edit, setEdit] = useState(true)
    const dispatch = useDispatch()

    const editGunpla = (e) => {
        e.preventDefault()
        if (name || pics || grade || price) {
            dispatch(updateGunpla(gunplaId, name, pics, grade, price))
            setName("")
            setPics("")
            setGrade("")
            setPrice("")
            setEdit(true)
        }
    }

  return (
    <div>
        {edit == "false" && (
            <form action='' onSubmit={editGunpla}>
                <input 
                    type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                />

                <input 
                    type="file"
                    name="pics"
                    onChange={(e) => setPics(e.target.value)}
                />

                <input 
                    type="text"
                    name="grade"
                    onChange={(e) => setGrade(e.target.value)}
                />

                <input 
                    type="text"
                    name="price"
                    onChange={(e) => setPrice(e.target.value)}
                />

                <input type="submit" value="valider les modifications"/>
            </form>
        )}
    </div>
  )
}
