import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CommentPage from './modules/comments/Comment-Page.jsx'
import DynamicForm from './modules/useReducer/dynamic_form.jsx'
import CounterPage from './modules/useCallback/counter_page.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterPage />
  </StrictMode>,
)
