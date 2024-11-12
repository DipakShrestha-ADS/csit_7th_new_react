import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CommentPage from './modules/comments/Comment-Page.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CommentPage />
  </StrictMode>,
)
