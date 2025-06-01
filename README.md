# 🧠 CodeNotes AI – Intelligent Codebase Note Generator

**CodeNotes AI** is an AI-powered software tool that helps developers understand complex codebases one file at a time. It generates rich, contextual notes by analyzing the structure and relationships of functions, classes, and modules. Users can progressively explore a repository, generate notes for individual files, compile them into a digital notebook, and interact with an AI chatbot trained on those notes.

---

## ✨ Features

- 📂 Input any GitHub repository or local project
- 🧠 Understands code **in context** (traces definitions and usages)
- 📝 Generates human-readable notes per file
- 📚 Compiles file-level notes into a full **digital notebook**
- 💬 Built-in AI chatbot to answer questions about the notes
- 🔍 Supports search and navigation
- 📤 Exports to Markdown, PDF, or static site

---

## 📦 Tech Stack

| Component | Technologies |
|----------|--------------|
| Frontend | React + Tailwind / SvelteKit |
| Backend | FastAPI / Node.js |
| Code Parsing | `ast`, `tree-sitter`, or `parso` |
| LLM | OpenAI GPT-4 / Claude / Local LLMs |
| Embedding | `text-embedding-ada-002`, `E5-small`, or `Instructor` |
| Vector Store | FAISS / ChromaDB |
| Storage | JSON, SQLite, or Markdown files |

---

## 🛣️ Development Roadmap

### ✅ **Phase 1: File-Level Note Generation (MVP)**
- [ ] Input GitHub repo URL or upload local project
- [ ] Parse codebase and show directory tree
- [ ] Click a file to analyze it
- [ ] Generate LLM-based notes using parsed AST and usage context
- [ ] Save notes to local storage
- [ ] Display notes in clean UI

---

### ✅ **Phase 2: Digital Notebook Compilation**
- [ ] Track which files have notes generated
- [ ] Organize notes by module/folder
- [ ] Compile notes into a full digital notebook
- [ ] Export notebook as Markdown, HTML, or PDF

---

### ✅ **Phase 3: Interactive Chatbot Interface**
- [ ] Embed generated notes using vector embeddings
- [ ] Store embeddings in FAISS or ChromaDB
- [ ] Build chat interface (React-based)
- [ ] Use retrieval-augmented generation to answer questions based on notebook content

---

### ✅ **Phase 4: Polish & Expand**
- [ ] Syntax highlighting and in-browser code preview
- [ ] Add support for more languages using Tree-sitter
- [ ] Implement edit + regenerate options for notes
- [ ] Add dark mode and improved mobile UI

---

## 📸 Final Product Vision

- Navigable code tree with status indicators (🟢 Noted / 🔴 Not Yet)
- Click to explain any file on demand
- Collapsible, context-aware digital notebook
- "Ask AI" button with smart retrieval and Q&A
- Fully exportable and shareable documentation

---

## 📂 Folder Structure (Planned)

