import React from 'react'
import Navbar from './components/Navbar'
import Sobre from './components/Sobre'
import StatCard from './components/StatCard'
import Projetos from './components/Projetos'
import Experiencias from './components/Experiencias'
import Contato from './components/Contato'
const App = () => {
  return (
    <div className='text-white min-h-screen container'>
      <Navbar />
      <Sobre />
      <Projetos />
      <Experiencias />
      <StatCard />
      <Contato />
    </div>
  )
}

export default App
