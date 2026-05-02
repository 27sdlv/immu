import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

try {
  const rootEl = document.getElementById("root");
  if (rootEl) {
    createRoot(rootEl).render(<App />);
  }
} catch (err) {
  const rootEl = document.getElementById("root");
  if (rootEl) {
    rootEl.innerHTML = `
      <div style="min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:2rem;font-family:sans-serif;background:#faf8f5;text-align:center;">
        <img src="/imuu-logo.jpg" alt="IMUU Mebel" style="width:60px;height:60px;object-fit:contain;margin-bottom:1.5rem;" onerror="this.style.display='none'">
        <h1 style="font-size:1.5rem;margin-bottom:0.75rem;color:#2a2017;">IMUU Mebel</h1>
        <p style="color:#6b5e4e;margin-bottom:2rem;max-width:300px;line-height:1.6;">Brauzerni yangilang yoki quyidagi tugmalar orqali bog'laning.</p>
        <a href="tel:+998900355500" style="display:block;padding:1rem 2rem;background:#2a2017;color:#faf8f5;text-decoration:none;margin-bottom:0.75rem;border-radius:2px;font-size:1rem;">📞 +998 90 035 55 00</a>
        <a href="https://t.me/imuu_mebel" style="display:block;padding:1rem 2rem;background:#7c5a3a;color:#faf8f5;text-decoration:none;border-radius:2px;font-size:1rem;">✈️ Telegram: @imuu_mebel</a>
      </div>
    `;
  }
}
