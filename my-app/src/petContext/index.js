import React from 'react'
const myContext = React.createContext()

function PetContext({ children }) {
    const[dogName, setDogName]= React.useState('')
    const[dogBreed, setDogBreed]= React.useState('')
    const[dogAge, setDogAge]= React.useState('')
    const[dogOwner, setDogOwner]= React.useState('')

    const listPets = []



    return (
        <myContext.Provider value={
            {
                dogName,
                dogBreed,
                dogAge,
                dogOwner,
                setDogName,
                setDogBreed,
                setDogAge,
                setDogOwner,
            }
        }>
            {children}
        </myContext.Provider>
    )
}

export { myContext, PetContext }