
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-800">
        <header className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 shadow-md">
          <nav className="flex justify-between items-center max-w-6xl mx-auto">
            <h1 className="text-xl font-bold">Jason</h1>
            <ul className="flex gap-4 text-sm md:text-base">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/send-tutoring">SEND Tutoring</Link></li>
              <li><Link to="/access-bars">Access Bars</Link></li>
              <li><Link to="/facilitation">Facilitation</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/book">Book</Link></li>
            </ul>
          </nav>
        </header>

        <main className="max-w-4xl mx-auto p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/send-tutoring" element={<SendTutoring />} />
            <Route path="/access-bars" element={<AccessBars />} />
            <Route path="/facilitation" element={<Facilitation />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/book" element={<Book />} />
          </Routes>
        </main>

        <footer className="bg-gray-100 text-center p-4 text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Jason. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Welcome</h2>
      <p>
        I'm Jason — helping people reconnect to learning, healing, and possibility through SEND education, Access Bars, and transformative facilitation.
      </p>
    </section>
  );
}

function SendTutoring() {
  return <h2 className="text-xl">SEND Tutoring Page (Coming Soon)</h2>;
}

function AccessBars() {
  return <h2 className="text-xl">Access Bars Page (Coming Soon)</h2>;
}

function Facilitation() {
  return <h2 className="text-xl">Facilitation Page (Coming Soon)</h2>;
}

function About() {
  return <h2 className="text-xl">About Jason (Coming Soon)</h2>;
}

function Blog() {
  return <h2 className="text-xl">Blog Page (Sanity Integration Coming Soon)</h2>;
}

function Book() {
  return <h2 className="text-xl">Booking Page (Calendly Embed Coming Soon)</h2>;
}

export default App;
