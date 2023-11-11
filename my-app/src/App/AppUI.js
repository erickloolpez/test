import React from 'react'
import { PetNav } from '../PetNav/index'
import { PetInfo } from '../PetInfo/index'
import { myContext } from '../petContext'
import {PetRead} from '../PetRead/index'

function AppUI() {
    const { create, read, update, del, setCreate, setRead, setUpdate, setDelete } = React.useContext(myContext)
    return (
        <>
            <PetNav />
            {create && (
                <PetInfo />
            )}
            {read && (
                <PetRead />
            )}
            {update && (
                <PetInfo />
            )}
            {del && (
                <PetInfo />
            )}
        </>
    )
}

export { AppUI }