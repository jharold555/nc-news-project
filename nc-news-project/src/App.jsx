import { useState } from 'react'
import Homepage from './components/homepage'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import ArticlePage from './components/ArticlePage'
import TopicPage from './components/TopicPage'

function App() {

  return (
    <>
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/articles/:article_id" element={<ArticlePage/>}/>
        <Route path='/articles/topics/:topic' element={<TopicPage/>}/>
      </Routes>
    </>
  )
}

export default App
