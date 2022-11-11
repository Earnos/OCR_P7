import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Accueil from './pages/Accueil'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'
import logo from "./assets/logo.svg"
import './sass/main.scss'

const RootComponent = () => (
  <React.StrictMode>
    <Router>
      <Header logo={logo} />
      <>
        <Routes>
          <Route exact path="/" element={<Accueil />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </>
      <Footer />
    </Router>
  </React.StrictMode>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RootComponent />)
