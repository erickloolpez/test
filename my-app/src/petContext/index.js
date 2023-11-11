import React from 'react'
const myContext = React.createContext()

function PetContext({ children }) {
    const[dogName, setDogName]= React.useState('')
    const[dogBreed, setDogBreed]= React.useState('')
    const[dogAge, setDogAge]= React.useState('')
    const[dogOwner, setDogOwner]= React.useState('')

    const[create, setCreate] = React.useState(true)
    const [read, setRead] = React.useState(false)
    const [update, setUpdate] =React.useState(false)
    const [del, setDelete] = React.useState(false)

    const [listPets, setListPets] = React.useState([]) 



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
            }
        }>
            {children}
        </myContext.Provider>
    )
}

export { myContext, PetContext }