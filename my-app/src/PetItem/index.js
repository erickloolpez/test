import React from 'react'
import { myContext } from '../petContext'
import './PetItem.css'

function PetItem(props) {
    const { setCreate, setRead, setUpdate, setDelete } = React.useContext(myContext)
    return (
        <div className='list-pets--x'
        >
            <li
            className='list-space'
            >
               <span>Owner:</span> {props.owner}
                <div className='list-pets--container'

                    onClick={() => {
                        props.onUpdatePet()
                        setCreate(false)
                        setRead(false)
                        setUpdate(true)
                        setDelete(false)

                    }}
                >
                    <ul className='list-pets--inside'>
                        <li><span>Name:</span>{props.name}</li>
                        <li><span>Age:</span>{props.age}</li>
                        <li><span>Breed:</span>{props.breed}</li>
                    </ul>
                    <div className='list-pets--img'>
                        <img src={props.url} alt={props.name} />
                    </div>

                </div>

            </li>
            <svg onClick={() => setDelete(true)} width='20' height='20' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>

        </div>
    )
}

export { PetItem }