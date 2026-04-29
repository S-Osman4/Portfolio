/**
 * App.tsx
 * Root component. Sets up routing and renders the main layout.
 * All sections live on a single page — React Router is here
 * for future project detail pages at /projects/:slug.
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Skills from './components/sections/Skills'
import Certifications from './components/sections/Certifications'
import Contact from './components/sections/Contact'

/** Home page — all sections stacked in order */
function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Certifications />
      <Contact />
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter basename="/Portfolio">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Project detail pages — built after core sections are done */}
        {/* <Route path="/projects/:slug" element={<ProjectDetail />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}