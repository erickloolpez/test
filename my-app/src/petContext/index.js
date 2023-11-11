import React from 'react'
import { useLocalStorage } from './useLocalStorage'
const myContext = React.createContext()

function PetContext({ children }) {

    const {item, saveItem}= useLocalStorage('PETS_V1',[])

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
        const petIndex = item.findIndex(pet => pet.owner === owner)

        setUpdateContent(petIndex)
        setDogName(item[petIndex].name)
        setDogBreed(item[petIndex].breed)
        setDogAge(item[petIndex].age)
        setDogOwner(item[petIndex].owner)

    }

    const deletePet = (owner) => {
        const newList = [...item]
        const petIndex = newList.findIndex(pet => pet.owner === owner)

        newList.splice(petIndex, 1)
        saveItem(newList)
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
                saveItem,
                item,
            }
        }>
            {children}
        </myContext.Provider>
    )
}

export { myContext, PetContext }