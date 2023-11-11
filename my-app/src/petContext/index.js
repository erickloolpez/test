import React from 'react'
const myContext = React.createContext()

function PetContext({ children }) {
    const [dogName, setDogName] = React.useState('')
    const [dogBreed, setDogBreed] = React.useState('')
    const [dogAge, setDogAge] = React.useState('')
    const [dogOwner, setDogOwner] = React.useState('')

    const [create, setCreate] = React.useState(true)
    const [read, setRead] = React.useState(false)
    const [update, setUpdate] = React.useState(false)
    const [del, setDelete] = React.useState(false)

    const [listPets, setListPets] = React.useState([])

    const [updateContent, setUpdateContent] = React.useState(0)

    const updatePet = (owner) => {
        const petIndex = listPets.findIndex(pet => pet.owner === owner)

        setUpdateContent(petIndex)
        setDogName(listPets[petIndex].name)
        setDogBreed(listPets[petIndex].breed)
        setDogAge(listPets[petIndex].age)
        setDogOwner(listPets[petIndex].owner)

    }

    const deletePet = (owner) => {
        const newList = [...listPets]
        const petIndex = newList.findIndex(pet => pet.owner === owner)

        newList.splice(petIndex, 1)
        setListPets(newList)
    }

    return (
        <myContext.Provider value={
            {
                dogName,
                dogBreed,
                dogAge,
                dogOwner,
                create,
                read,
                update,
                del,
                setDogName,
                setDogBreed,
                setDogAge,
                setDogOwner,
                listPets,
                setCreate,
                setRead,
                setUpdate,
                setDelete,
                setListPets,
                updatePet,
                updateContent,
                setUpdateContent,
                deletePet,
            }
        }>
            {children}
        </myContext.Provider>
    )
}

export { myContext, PetContext }