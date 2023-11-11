import React from 'react'
import { PetNav } from '../PetNav/index'
import { PetInfo } from '../PetInfo/index'
import { myContext } from '../petContext'
import {PetRead} from '../PetRead/index'
import {PetUpdate} from '../PetUpdate/index'
import {PetDelete} from '../PetDelete/index'

function AppUI() {
    const { create, read, update, del} = React.useContext(myContext)
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
                <PetUpdate />
            )}
            {del && (
                <PetDelete />
            )}
        </>
    )
}

export { AppUI }