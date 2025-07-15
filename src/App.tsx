import { Routes, Route } from 'react-router-dom'
import Her from '@/app/her/page.tsx'
import Landing from "@/app/landing/page.tsx"; // or wherever your Her component is

function App() {
    return (

        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/her" element={<Her />} />
        </Routes>
    )
}

export default App
