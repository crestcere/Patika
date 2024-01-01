import React from 'react'

import { ExampleComponent, Button } from 'crestbutton'
import 'crestbutton/dist/index.css'

const App = () => {
  return (
    <>
      <ExampleComponent text='Crest Button' />
      <Button text={'Click'} onClick={() => alert('Crestcere Button')}></Button>
    </>
  )
}

export default App
