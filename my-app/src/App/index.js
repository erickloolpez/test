import React from 'react'
import {PetContext} from '../petContext/index'
import {AppUI} from './AppUI'

function App() {
  return (
    <PetContext>
        <AppUI/>
    </PetContext>
  );
}

export default App;