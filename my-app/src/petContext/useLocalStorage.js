import React from 'react'

function useLocalStorage(itemName, initValue){
    const [item, setItem] = React.useState(initValue)

    React.useEffect(()=>{
        try{
            const localStorageItem = localStorage.getItem(itemName)
            let parsedItem 

            if(!localStorageItem){
                localStorage.setItem(itemName, JSON.stringify(initValue))
                parsedItem = initValue
            }else{
                parsedItem = JSON.parse(localStorageItem)
                setItem(parsedItem)
            }
        }catch(error){
            console.log("error",error)
        }
    },[])

    const saveItem = (newItem)=>{
        localStorage.setItem('PETS_V1', JSON.stringify(newItem))
        setItem(newItem)
    }

    return{item, saveItem }
}

export {useLocalStorage}
