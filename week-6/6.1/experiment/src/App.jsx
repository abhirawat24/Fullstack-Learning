import React from 'react'
import { useState } from 'react'

function App() {

  return (
    <div>
      <HeaderWithButton></HeaderWithButton>
      <Header title="Hello React1" />
      <Header title="Hello React2" />
      <Header title="Hello React3" />
      <Header title="Hello React4" />
    </div>
  )
}



const Header = React.memo(function({title}){
  return <div>
    {title}
  </div>
})

export default App
