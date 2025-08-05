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
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Guiding learning, healing, and growth</h2>
      <p className="mb-4">
        Welcome — I’m <strong>Jason King</strong>, a SEND tutor, Access Bars practitioner, and facilitator. My mission is to help people of all ages unlock potential they may not even realise they have, whether that’s in the classroom, in their heart, or in their way of seeing the world.
      </p>
      <h3 className="text-xl font-semibold mt-6 mb-2">What I Offer</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>SEND Tutoring:</strong> One‑to‑one support for neurodivergent and trauma‑affected learners — focusing on self‑confidence, emotional regulation and academic skills. Sessions can be online or in person.</li>
        <li><strong>Access Bars:</strong> Gentle, hands‑on energy work that clears stress and mental clutter so you can feel lighter, sleep better and move forward with ease.</li>
        <li><strong>Facilitation & Coaching:</strong> Conversations and tools to help you shift limiting beliefs, get unstuck and choose what really works for you or your child.</li>
      </ul>
      <p className="mt-6">Curious about working together? <Link className="text-indigo-600 underline" to="/book">Book a free discovery call</Link> or explore the pages below to learn more.</p>
    </section>
  );
}

function SendTutoring() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Personalised SEND support for thriving learners</h2>
      <p className="mb-4">
        My tutoring approach is bespoke — no worksheets pulled off a shelf. Each session is designed to support your child’s unique learning profile and emotional needs. I draw on more than fifteen years of classroom experience, including work with students on the autism spectrum, those with ADHD, anxiety, learning differences and complex trauma histories.
      </p>
      <h3 className="text-xl font-semibold mt-4 mb-2">Key Elements</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Confidence:</strong> building trust and self‑belief so your child feels safe to make mistakes and ask questions.</li>
        <li><strong>Skills:</strong> teaching literacy, numeracy and study strategies in creative ways that click for your child.</li>
        <li><strong>Regulation:</strong> integrating breathing, mindfulness and somatic tools to calm anxiety and improve focus.</li>
      </ul>
      <h3 className="text-xl font-semibold mt-4 mb-2">Who It’s For</h3>
      <p className="mb-4">Parents and caregivers who want more than tutoring — they want compassionate, trauma‑informed support that honours the whole child.</p>
      <p>Ready to support your child? <Link className="text-indigo-600 underline" to="/book">Get in touch</Link> to talk about their needs.</p>
    </section>
  );
}

function AccessBars() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Breathe easier. Live lighter. Reset your mind.</h2>
      <p className="mb-4">
        Access Bars is a hands‑on energy practice that involves lightly touching 32 points on the head. These points relate to different areas of life — thoughts, feelings, beliefs, health, money — and when gently held they release tension and stored stress. People often describe feeling like the fog has lifted, as if a weight has been taken off their shoulders.
      </p>
      <h3 className="text-xl font-semibold mt-4 mb-2">Why Choose Bars?</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li>Relief from anxiety, overwhelm and looping thoughts.</li>
        <li>A sense of spaciousness and peace you might not have felt before.</li>
        <li>A gentle way to care for yourself without talking through all the details of your life.</li>
      </ul>
      <h3 className="text-xl font-semibold mt-4 mb-2">My Perspective</h3>
      <p className="mb-4">
        As an energy worker and educator, I love Bars because it meets you where you are. You lie down, close your eyes if you like, and let go. Your body and mind do the rest.
      </p>
      <p>Interested? <Link className="text-indigo-600 underline" to="/book">Book a Bars session</Link> or <Link className="text-indigo-600 underline" to="/contact">send a message</Link> to learn more.</p>
    </section>
  );
}

function Facilitation() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Shift your perspective. Choose a new possibility.</h2>
      <p className="mb-4">
        Facilitation sessions are conversations that invite new awareness. They’re not therapy and you’re not broken. We explore questions, sensations and energies to help you access what you already know — beyond the stories you’ve been told or the patterns you’ve inherited.
      </p>
      <p className="mb-4">
        I draw on tools from NLP, mindfulness, somatic inquiry and the Access Consciousness method. Together we look at where you feel stuck and gently shift what no longer serves you.
      </p>
      <h3 className="text-xl font-semibold mt-4 mb-2">Who It’s For</h3>
      <p className="mb-4">Adults, parents, creative professionals and anyone navigating change, stress, decision‑making or just a desire for something different.</p>
      <p>If you’re curious about what’s possible, <Link className="text-indigo-600 underline" to="/book">book a session</Link> or <Link className="text-indigo-600 underline" to="/contact">reach out</Link>.</p>
    </section>
  );
}

function About() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Hi, I’m Jason</h2>
      <p className="mb-4">
        I’ve always been drawn to the power of words, presence and connection. Born in Los Angeles and raised in Sydney, I studied drama and began my professional life on stage. I’ve since worked in special education units, behavioural support centres, mainstream schools, and even taught in Ghana. Along the way I discovered NLP, hypnosis, mindfulness, energy work and facilitation.
      </p>
      <p className="mb-4">
        These diverse experiences have taught me one thing: every individual has brilliance within them, and sometimes we just need a little help seeing it. Whether I’m supporting a student with dyslexia, running Bars on a stressed out parent, or facilitating a conversation about change, my goal is to create a space where you can soften, laugh, see yourself differently and choose anew.
      </p>
      <h3 className="text-xl font-semibold mt-4 mb-2">Credentials & Training</h3>
      <ul className="list-disc ml-6 space-y-2 mb-4">
        <li>BA (Drama) – Western Sydney University</li>
        <li>NLP Practitioner & Hypnosis/Timeline Therapy</li>
        <li>Certified Access Bars Practitioner & Facilitator</li>
        <li>Good Autism Practice</li>
        <li>Mental Health First Aid</li>
      </ul>
      <h3 className="text-xl font-semibold mt-4 mb-2">Beyond work</h3>
      <p className="mb-4">I love theatre, movement, exploring different cultures and asking questions that lead to unexpected answers. Life is better when we stay curious.</p>
      <p>Want to chat? <Link className="text-indigo-600 underline" to="/contact">Reach out here</Link> — I’d love to meet you.</p>
    </section>
  );
}

function Blog() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Reflections & resources</h2>
      <p className="mb-4">
        This blog is a journal of sorts — a place where I share insights from my tutoring sessions, experiences with energy work, and musings on creativity and living consciously. It’s part story, part resource and always a work in progress. Stay tuned for articles on neurodiversity, sensory regulation, clearing energetic clutter and more.
      </p>
      <p>Check out the latest posts below, and if you’d like updates in your inbox, there will be an email list option soon.</p>
    </section>
  );
}

function Book() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Ready to get started?</h2>
      <p className="mb-4">
        Thank you for considering working with me. To make things easy I offer a few different session types. Please click the button next to the service you’re interested in to schedule via my online booking system. If nothing fits, send me a message and we’ll figure it out together.
      </p>
      <h3 className="text-xl font-semibold mt-4 mb-2">Session Types</h3>
      <ul className="list-disc ml-6 space-y-2 mb-4">
        <li><strong>Free 15‑minute Discovery Call:</strong> Ask me anything and see if we’re a good fit.</li>
        <li><strong>1:1 SEND Tutoring Session (60 minutes)</strong></li>
        <li><strong>Access Bars Session (75 minutes)</strong></li>
        <li><strong>Facilitation/Coaching Session (60 minutes)</strong></li>
      </ul>
      <p><Link className="text-indigo-600 underline" to="/book">Book now</Link> or <Link className="text-indigo-600 underline" to="/contact">contact me</Link> to ask about other options.</p>
    </section>
  );
}

function Contact() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Let’s connect</h2>
      <p className="mb-4">
        I respond personally to every enquiry. Whether you have a quick question, need more information about my services or you’re ready to book, I’d love to hear from you.
      </p>
      <p className="mb-4">Send me an email at <a className="text-indigo-600 underline" href="mailto:your-email@example.com">your-email@example.com</a> or message me on Instagram at <a className="text-indigo-600 underline" href="https://instagram.com/yourhandle">@yourhandle</a>.</p>
    </section>
  );
}

export default App;
