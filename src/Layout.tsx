import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from '@/components/Header/Header'
import Home from './features/home/Home'
import Footer from './components/Footer/Footer'
import Books from './features/books/Books'
import Characters from './features/characters/Characters'
import Houses from './features/houses/Houses'
import Spells from './features/spells/Spells'
const layout = () => {
  return (
                  <Router>
              <Header/>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/books' element={<Books/>}/>
                <Route path='/characters' element={<Characters/>}/>
                <Route path='/houses' element={<Houses/>}/>
                <Route path='/spells' element={<Spells/>}/>
              </Routes>
              <Footer/>
            </Router>
  )
}

export default layout
