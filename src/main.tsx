import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RouterConfig from './config/router.config.tsx'

createRoot(document.getElementById('root')!).render(
 <StrictMode>
    {/* 3. Wrap your Router with the Provider and pass the store */}
    <RouterConfig />
  </StrictMode>,
)
