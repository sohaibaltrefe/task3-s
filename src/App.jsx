import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Create from './assets/comm/user/Create'
import Index from './assets/comm/user/Index'
import Details from './assets/comm/user/Details'
import Edit from './assets/comm/user/Edit'
function App() {
  return (
<Routes>
  <Route path='/'/>
  <Route path='/user/index' element={<Index/>}/>
  <Route path='/user/create'  element={<Create/>}/>
  <Route path='/user/:id'  element={<Details/>}/>
  <Route path='/user/edit/:id'  element={<Edit/>}/>

  <Route path='*'  element={<h2> user not found</h2>}/>

</Routes>
    

    )
}

export default App