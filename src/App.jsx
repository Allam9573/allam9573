
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './assets/pages/Home'
import { AboutMe } from './assets/pages/AboutMe'
import { Error404 } from './assets/pages/Error404'
import { CV } from './assets/pages/CV'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/allam9573' element={<Home />}>
            <Route path='/allam9573/cv' element={<CV />} />
            <Route path='/allam9573/about' element={<AboutMe />} />
            <Route path='*' element={<Error404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
