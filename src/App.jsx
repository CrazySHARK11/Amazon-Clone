import React from 'react'
import "./style/style.scss"
import Header from './components/Header/Header'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Checkout from './components/Checkout/Checkout'
import Home from './components/Home/Home'

const App = () => {
  return (
    <Router>
      <div className="app">
      <Header />
      <Routes>

        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/' element={<Home />}></Route>

      </Routes>
      </div>
    </Router>
  )
}

export default App