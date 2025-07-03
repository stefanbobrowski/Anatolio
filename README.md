# StefanBobrowski.com

The personal portfolio of **Stefan Anatolio Bobrowski** — a Senior Front-End Developer and Full-Stack Engineer with over a decade of professional experience.

This site showcases select work, technical accomplishments, and development interests, with a focus on clean UI/UX, performance, and maintainable code.

---

## 🔧 Tech Stack

- **Frontend:** React (Create React App)
- **Styling:** SCSS / CSS3
- **Language:** JavaScript (ES6+)
- **Hosting:** Nginx on Ubuntu (DigitalOcean VPS)

---

## 📦 Getting Started

```bash
npm install
npm start
```

Build for production:

```bash
npm run build
```

---

## 🚀 Deployment

The site is deployed manually using `scp` to a DigitalOcean server running Nginx. After building:

```bash
npm run build
scp -r build/* user@your-server-ip:/var/www/html
```

Make sure your Nginx config points to `/var/www/html`.

---

## 👨‍💻 Author

Created by [@stefanbobrowski](https://github.com/stefanbobrowski/Anatolio)  
🌐 [stefanbobrowski.com](https://stefanbobrowski.com)

---

## 📄 License

This project is licensed under the MIT License.
