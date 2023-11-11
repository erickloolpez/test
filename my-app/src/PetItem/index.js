import React from 'react'
import { myContext } from '../petContext'

function PetItem(props) {
    const { setCreate, setRead, setUpdate, setDelete, del } = React.useContext(myContext)
    return (
        <li onClick={() => {
            if (!del) {
                props.onUpdatePet()
                setCreate(false)
                setRead(false)
                setUpdate(true)
                setDelete(false)
            } else {
                props.onDeletePet()
            }

        }}>
            {props.owner}
            <ul>
                <li>{props.name}</li>
                <li>{props.age}</li>
                <li>{props.breed}</li>
            </ul>

        </li>
    )
}

export { PetItem }