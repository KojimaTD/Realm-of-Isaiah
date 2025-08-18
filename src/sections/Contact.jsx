export default function Contact() {
  return (
    <section id="contact" className="container" style={{ padding: "2rem 0" }}>
      <div className="surface" style={{ padding: "1.5rem" }}>
        <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", marginBottom: ".5rem" }}>Contact</h2>
        <p style={{ marginTop: 0, opacity: .95 }}>
          Prefer email? <a href="mailto:isaiahking2120@gmail.com">isaiahking2120@gmail.com</a>
        </p>

        {/* FormSubmit sends directly to your inbox; no backend needed */}
        <form
          action="https://formsubmit.co/isaiahking2120@gmail.com"
          method="POST"
          style={{ display: "grid", gap: "12px", marginTop: "1rem", maxWidth: 700 }}
        >
          {/* FormSubmit settings */}
          <input type="hidden" name="_subject" value="Portfolio Contact — Isaiah King" />
          <input type="hidden" name="_captcha" value="false" />
          {/* Honeypot anti-bot */}
          <input type="text" name="_honey" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />
          {/* Optional redirect after submit:
          <input type="hidden" name="_next" value="https://your-gh-pages-url/#contact" />
          */}

          <label>
            Name
            <input
              name="name"
              required
              placeholder="Your name"
              style={inputStyle}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              style={inputStyle}
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              rows="5"
              required
              placeholder="How can I help?"
              style={{ ...inputStyle, resize: "vertical" }}
            />
          </label>

          <button type="submit" style={btnStyle}>Send</button>
        </form>
      </div>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  marginTop: "6px",
  padding: ".8rem .9rem",
  borderRadius: 10,
  border: "1px solid rgba(0,0,0,0.18)",
  background: "rgba(255,255,255,0.88)",
  color: "#0e1726",
  outline: "none",
};

const btnStyle = {
  width: "fit-content",
  padding: ".85rem 1.1rem",
  borderRadius: 10,
  border: "1px solid rgba(0,0,0,0.18)",
  background: "rgba(255,255,255,0.28)",
  color: "white",
  cursor: "pointer",
  fontWeight: 700,
};
