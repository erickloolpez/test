import React from 'react'
import { myContext } from "../petContext"
import { PetItem } from '../PetItem/index'
import './PetRead.css'

function PetRead() {
    const { item,updatePet, deletePet } = React.useContext(myContext)
    return (
        <div className='grid-item'>
            <ul className ='list-pets'>
                {item.map((pet, index) => (
                    <PetItem
                        key={index}
                        name={pet.name}
                        owner={pet.owner}
                        age={pet.age}
                        breed={pet.breed}
                        url ={pet.url}
                        onUpdatePet={()=>updatePet(pet.owner)}
                        onDeletePet={()=>deletePet(pet.owner)}
                    />
                ))}
            </ul>

        </div>
    )
}

export { PetRead }