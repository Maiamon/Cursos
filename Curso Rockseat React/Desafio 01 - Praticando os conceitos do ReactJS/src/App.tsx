// import { useState } from 'react'
import { Header } from './components/Header/Header'

import styles from './App.module.css'
import './global.css'

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <h1>Hello World</h1>
        </main>
      </div>
    </>
  )
}

export default App