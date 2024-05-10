import { useState } from 'react'
import Homepage from './components/homepage'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import ArticlePage from './components/ArticlePage'
import TopicPage from './components/TopicPage'
import PathNotFound from './components/PathNotFound'
import TopicNotFound from './components/TopicNotFound'

function App() {

  return (
    <>
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/articles/:article_id" element={<ArticlePage/>}/>
        <Route path='/articles/topics/:topic' element={<TopicPage/>}/>
        <Route path='*' element={<PathNotFound/>} />
        <Route path='/articles/topics/*' element={<TopicNotFound/>}/>
      </Routes>
    </>
  )
}

export default App
