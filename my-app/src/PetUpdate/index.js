import React from 'react'
import { myContext } from '../petContext'
import './PetUpdate.css'

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
        updateContent,
        item,
        url,
        setUrl,
    } = React.useContext(myContext)

    return (
                <form className='grid-item container-info'>
            <div className='form-container'>
                <div className='first-section'>
                    <div className='first-section--content'>
                        <label>Name:</label>
                        <input
                            value={dogName}
                            onChange={(event) => (
                                setDogName(event.target.value)
                            )}
                        />

                    </div>
                    <div className='first-section--content'>
                        <label>Breed:</label>
                        <input
                            value={dogBreed}
                            onChange={(event) => (
                                setDogBreed(event.target.value)
                            )}
                        />

                    </div>


                </div>
                <div>
                    <label>Url-Image</label>
                    <input 
                    value={url}
                    onChange={(event)=>{
                        setUrl(event.target.value)
                    }}/>

                </div>
                <div className='first-section'>
                    <div className='first-section--content'>
                        <label>Age:</label>
                        <input
                            value={dogAge}
                            onChange={(event) => (
                                setDogAge(event.target.value)
                            )}
                        />

                    </div>
                    <div className='first-section--content'>
                        <label>Owners name:</label>
                        <input
                            value={dogOwner}
                            onChange={(event) => (
                                setDogOwner(event.target.value)
                            )}
                        />

                    </div>

                </div>

            </div>
            <div className='form-button--save'>
                <p>By erickloolpez</p>
                <button
                onClick={(event) => {
                                    event.preventDefault()

                item[updateContent].name = dogName
                item[updateContent].breed = dogBreed
                item[updateContent].age = dogAge
                item[updateContent].owner = dogOwner
                item[updateContent].url = url

                setDogName('')
                setDogBreed('')
                setDogAge('')
                setDogOwner('')
                }}>Save</button>

            </div>
        </form>
    )
}

export { PetUpdate }