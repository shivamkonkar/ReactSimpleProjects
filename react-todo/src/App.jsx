import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "tailwindcss"
import { AppBar } from './components/AppBar'
import AddTodo from './components/AddTodo'
import TodoCard from './components/TodoCard'
import TodoList from './components/TodosList'
import { RecoilRoot } from 'recoil'

function App() {

  return (
    <>
    <RecoilRoot>      <AppBar></AppBar>
      <AddTodo/>
      <TodoList/></RecoilRoot>

    </>
  )
}




export default App
