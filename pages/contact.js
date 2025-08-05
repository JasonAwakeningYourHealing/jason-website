export default function Contact() {
  return (
    <>
      <nav>
        <a href="/">Home</a>
        <a href="/send-tutoring">SEND Tutoring</a>
        <a href="/access-bars">Access Bars</a>
        <a href="/facilitation">Facilitation</a>
        <a href="/about">About</a>
        <a href="/blog">Blog</a>
        <a href="/book">Book</a>
        <a href="/contact">Contact</a>
      </nav>
      <main>
        <h1>Let’s talk.</h1>
        <p>
          Whether you’re ready to book, have a question, or just want to connect, I’d love to hear from you.
          I respond personally to all messages.
        </p>
        <p>
          You can reach me directly by email at{' '}
          <a href="mailto:your-email@example.com">your-email@example.com</a>.
        </p>
        <section>
          <h2>Contact Form</h2>
          <p>
            Feel free to send me a message using the form below. Please note that this simple form does not
            have backend processing yet — you can also email me directly at the address above.
          </p>
          <form>
            <div style={{ marginBottom: '1rem' }}>
              <label>
                Name:<br />
                <input type="text" name="name" style={{ width: '100%', padding: '0.5rem' }} />
              </label>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label>
                Email:<br />
                <input type="email" name="email" style={{ width: '100%', padding: '0.5rem' }} />
              </label>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label>
                Message:<br />
                <textarea name="message" rows="5" style={{ width: '100%', padding: '0.5rem' }}></textarea>
              </label>
            </div>
            <button
              type="submit"
              disabled
              style={{
                backgroundColor: '#2c5282',
                color: '#fff',
                padding: '0.75rem 1.5rem',
                border: 'none',
                cursor: 'pointer',
                opacity: 0.6,
              }}
            >
              Send (disabled)
            </button>
          </form>
        </section>
      </main>
    </>
  );
}