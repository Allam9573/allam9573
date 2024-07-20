
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './assets/pages/Home'
import { About } from './assets/pages/About'
import { Error404 } from './assets/pages/Error404'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/allam9573' element={<Home />}>
            <Route path='/allam9573/about' element={<About />} />
            <Route path='*' element={<Error404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
