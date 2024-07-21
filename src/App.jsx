
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './assets/pages/Home'
import { Error } from './assets/pages/Error'
import { Header } from './components/Header'
import { Technologies } from './components/Technologies'
import { Portfolio } from './components/Portfolio'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/allam9573' element={<Home />} />
          <Route path='' />
          <Route path='/allam9573/technologies' element={<Technologies />} />
          <Route path='/allam9573/portfolio' element={<Portfolio />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
