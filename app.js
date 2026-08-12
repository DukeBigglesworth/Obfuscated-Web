:root {
  --bg: #0f1115;
  --surface: #1a1d24;
  --border: #2a2f3a;
  --text: #e6e8ec;
  --muted: #8b92a5;
  --primary: #3b82f6;
  --primary-hover: #2563eb;
  --danger: #ef4444;
  --danger-hover: #dc2626;
  --success: #22c55e;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.5;
  min-height: 100vh;
}

.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.login-box {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 2.5rem;
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.login-box h1 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: var(--muted);
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.login-box input {
  width: 100%;
  padding: 0.75rem 1rem;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text);
  font-size: 1rem;
  margin-bottom: 1rem;
}

.login-box button {
  width: 100%;
  padding: 0.75rem;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;
}

.login-box button:hover {
  background: var(--primary-hover);
}

.error {
  color: var(--danger);
  margin-top: 1rem;
  font-size: 0.9rem;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border);
}

header h1 {
  font-size: 1.5rem;
}

section {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

section h2 {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: var(--muted);
  font-weight: 600;
}

input[type="text"],
textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text);
  font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace;
  font-size: 0.9rem;
  resize: vertical;
}

input[type="text"] {
  margin-bottom: 0.75rem;
}

textarea {
  min-height: 200px;
}

.form-actions {
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
}

button {
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s;
}

.btn-primary {
  background: var(--primary);
  color: white;
}

.btn-primary:hover {
  background: var(--primary-hover);
}

.btn-secondary {
  background: var(--border);
  color: var(--text);
}

.btn-secondary:hover {
  background: #3a4150;
}

.btn-danger {
  background: var(--danger);
  color: white;
}

.btn-danger:hover {
  background: var(--danger-hover);
}

.status {
  margin-top: 0.75rem;
  font-size: 0.9rem;
  min-height: 1.2em;
}

.status.success {
  color: var(--success);
}

.status.error {
  color: var(--danger);
}

.script-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.script-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.85rem 1rem;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  cursor: pointer;
  transition: border-color 0.15s;
}

.script-item:hover {
  border-color: var(--primary);
}

.script-info {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.script-name {
  font-weight: 600;
  font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace;
}

.script-meta {
  font-size: 0.8rem;
  color: var(--muted);
}

.empty {
  color: var(--muted);
  text-align: center;
  padding: 1.5rem;
}

/* Modal */
.modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: 1rem;
}

.modal-content {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  width: 100%;
  max-width: 700px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.modal-header h3 {
  font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace;
}

.modal-content textarea {
  flex: 1;
  min-height: 300px;
}

.modal-actions {
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}

@media (max-width: 600px) {
  .container {
    padding: 1rem;
  }
  header {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  .modal-actions {
    flex-direction: column;
  }
  .modal-actions button {
    width: 100%;
  }
}
