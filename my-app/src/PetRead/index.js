import React from 'react'
import { myContext } from "../petContext"
import { PetItem } from '../PetItem/index'

function PetRead() {
    const { listPets,updatePet } = React.useContext(myContext)
    return (
        <div className='grid-item'>
            <ul>
                {listPets.map((pet, index) => (
                    <PetItem
                        key={index}
                        name={pet.name}
                        owner={pet.owner}
                        age={pet.age}
                        breed={pet.breed}
                        onUpdatePet={()=>updatePet(pet.owner)}
                    />
                ))}
            </ul>

        </div>
    )
}

export { PetRead }