import React from 'react'
import './PetNav.css'
import { myContext } from '../petContext'
function PetNav() {
    const { setCreate, setRead, setUpdate, setDelete } = React.useContext(myContext)
    return (
        <div className='grid-item navbar'>
            <p onClick={() => {
                setCreate(true)
                setRead(false)
                setUpdate(false)
                setDelete(false)
            }} >Create</p>
            <p onClick={() => {
                setCreate(false)
                setRead(true)
                setUpdate(false)
                setDelete(false)
            }}>Read</p>
            <p onClick={() => {
                setCreate(false)
                setRead(false)
                setUpdate(true)
                setDelete(false)
            }}>Update</p>
            <p onClick={() => {
                setCreate(false)
                setRead(false)
                setUpdate(false)
                setDelete(true)
            }}>Delete</p>
        </div>

    )
}

export { PetNav }