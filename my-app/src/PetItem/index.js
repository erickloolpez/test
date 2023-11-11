import React from 'react'
import { myContext } from '../petContext'

function PetItem(props) {
    const { setCreate, setRead, setUpdate, setDelete } = React.useContext(myContext)
    return (
        <li onClick={() => {
            props.onUpdatePet()
            setCreate(false)
            setRead(false)
            setUpdate(true)
            setDelete(false)

        }}>
            {props.owner}
            <ul>
                <li>{props.name}</li>
                <li>{props.age}</li>
                <li>{props.name}</li>
            </ul>

        </li>
    )
}

export { PetItem }