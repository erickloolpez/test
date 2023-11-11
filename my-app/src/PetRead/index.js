import React from 'react'
import { myContext } from "../petContext"
import { PetItem } from '../PetItem/index'

function PetRead() {
    const { listPets } = React.useContext(myContext)
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
                    />
                ))}
            </ul>

        </div>
    )
}

export { PetRead }