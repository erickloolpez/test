import React from 'react'
import './PetInfo.css'
import { myContext } from '../petContext'
function PetInfo() {
    const {
        dogName,
        dogBreed,
        dogAge,
        dogOwner,
        setDogName,
        setDogBreed,
        setDogAge,
        setDogOwner,
        item,
        saveItem,
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
                    <input />

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
            <div className='form-button'>
                <p>By erickloolpez</p>
                <button onClick={(event) => {
                    event.preventDefault()
                    const newList = [...item]

                    newList.push({ name: dogName, breed: dogBreed, age: dogAge, owner: dogOwner })

                    saveItem(newList)

                    console.log(newList)

                    setDogName('')
                    setDogBreed('')
                    setDogAge('')
                    setDogOwner('')
                }}>+</button>

            </div>
        </form>

    )
}

export { PetInfo }