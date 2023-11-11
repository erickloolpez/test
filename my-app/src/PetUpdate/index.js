import React from 'react'
import { myContext } from '../petContext'

function PetUpdate() {
    const {
        dogName,
        dogBreed,
        dogAge,
        dogOwner,
        setDogName,
        setDogBreed,
        setDogAge,
        setDogOwner,
        listPets,
        updateContent,
    } = React.useContext(myContext)

    return (
        <form className='grid-item container-info'>
            <label>Name:</label>
            <input
                value={dogName}
                onChange={(event) => (
                    setDogName(event.target.value)
                )}
            />

            <label>Breed:</label>
            <input
                value={dogBreed}
                onChange={(event) => (
                    setDogBreed(event.target.value)
                )}
            />
            <label>Age:</label>
            <input
                value={dogAge}
                onChange={(event) => (
                    setDogAge(event.target.value)
                )}
            />
            <label>Owners name:</label>
            <input
                value={dogOwner}
                onChange={(event) => (
                    setDogOwner(event.target.value)
                )}
            />
            <button onClick={(event) => {
                event.preventDefault()

                listPets[updateContent].name = dogName
                listPets[updateContent].breed = dogBreed
                listPets[updateContent].age = dogAge
                listPets[updateContent].owner = dogOwner

                setDogName('')
                setDogBreed('')
                setDogAge('')
                setDogOwner('')
            }}>Save</button>
        </form>

    )
}

export { PetUpdate }