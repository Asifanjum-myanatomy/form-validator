# Client‑Side Form Validator

A simple, static web application that provides instant client‑side validation for a registration form. Users enter a username, email, password, and password confirmation—and receive inline feedback before the form ever leaves the browser. Once all validations pass, they’re redirected to a friendly “Thank You” page.

---

## 🚀 Features

- **Required‑field checks**  
- **Length constraints** on username (3–15 chars) and password (6–25 chars)  
- **Email format** validation against a standard regex  
- **Password confirmation** match check  
- **Inline success/error styling** and messages  
- **Seamless redirect** to a static “Thank You” page on successful submit  
- Pure client‑side logic — no server dependencies

---

## 📂 File Structure

/project-root │ ├── index.html ← Main registration form
├── style.css ← CSS for layout & validation styling
├── script.js ← All client‑side validation logic
└── thankyou.html ← Confirmation page on success

