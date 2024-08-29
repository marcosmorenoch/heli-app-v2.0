import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import ChecklistWeb from './pages/Checklist'
import NavBar from './components/NavBar'
import NotFound from './pages/404'

export default function App() {
    return (    
        <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route index element={<Home/>}/>
                <Route path="home" element={<Home/>}/>
                <Route path="registro" element={<Register />} />
                <Route path="checklist" element={<ChecklistWeb />} />
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
        
        </BrowserRouter>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(<App/>)