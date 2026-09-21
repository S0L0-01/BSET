# BSET Berhampur - Official Web Platform
### Decoupled Django REST Backend + Next.js (21st.dev / Tailwind / Framer Motion) Frontend

Modern, high-performance, and animated web platform for **Berhampur School of Engineering & Technology (BSET)**, Berhampur, Odisha (Approved by AICTE, Affiliated to SCTE & VT / DTET Odisha, ISO 9001:2008 Certified).

---

## 🏗️ Architecture Overview

```
BSET/
├── backend/                       # Django 5.x REST API + Jazzmin CMS Admin
│   ├── bset_project/              # Core settings, urls, JWT config, CORS
│   ├── apps/
│   │   ├── core/                  # College profile, leadership, facilities, stats, contact messages
│   │   ├── departments/           # CE, EE, ETC, ME courses, labs, faculty, highlights
│   │   ├── admissions/            # Online admission enquiries, eligibility, documents checklist
│   │   ├── placements/            # CRT modules, recruiter partners, placement statistics
│   │   ├── examination/           # Exam notifications, timetables, approval letters, downloads
│   │   ├── gallery/               # Filterable photo/video albums
│   │   ├── blog/                  # News, events, announcements
│   │   ├── testimonials/          # Student & alumni reviews
│   │   └── accounts/              # Admin and staff auth
│   ├── seed_data.py               # Data seeder to populate all scraped BSET info
│   ├── requirements.txt
│   └── manage.py
│
├── frontend/                      # Next.js 14+ (App Router) + TypeScript
│   ├── app/                       # App Router Pages
│   │   ├── page.tsx               # Animated Homepage (21st.dev Hero, Bento Grid, Counters, Marquee)
│   │   ├── about/page.tsx         # History, Vision, Leadership, Governance, Approvals
│   │   ├── departments/           # Department directory & dynamic [slug] pages
│   │   ├── admissions/page.tsx    # Admission guide, document checklist, interactive enquiry form
│   │   ├── placements/page.tsx    # CRT details, 38+ recruiter showcase, placement stats
│   │   ├── facilities/page.tsx    # Smart classrooms, 15+ labs, 5000-book library, 5-acre campus
│   │   ├── examination/page.tsx   # Notices, timetable, result links, AICTE/ISO downloads
│   │   ├── gallery/page.tsx       # Filterable media gallery with lightbox modal
│   │   ├── contact/page.tsx       # Contact directory, interactive form, maps
│   │   └── layout.tsx             # Root layout with ThemeProvider, Navbar & Footer
│   ├── components/
│   │   ├── ui/                    # 21st.dev / Shadcn / Aceternity inspired UI primitives
│   │   ├── layout/                # Glassmorphism MegaMenu Navbar, Rich Footer
│   │   └── sections/              # Hero, StatsTicker, BentoGrid, InfiniteMarquee, Testimonials
│   ├── lib/
│   │   ├── api.ts                 # Django REST API client with offline fallback support
│   │   ├── data.ts                # Scraped BSET dataset for instant SSR/fallback
│   │   └── utils.ts               # Tailwind helpers (cn)
│   ├── package.json
│   ├── tailwind.config.ts
│   ├── tsconfig.json
│   └── next.config.mjs
│
├── bset_scraped_data.json         # Raw scraped data dump from official website
├── docker-compose.yml             # Container orchestration (PostgreSQL + Django + Next.js)
└── README.md
```

---

## 🚀 Quick Start Guide

### 1. Running the Django Backend
```bash
cd backend
python -m venv venv
# On Windows:
venv\Scripts\activate
# On Linux/macOS:
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python seed_data.py          # Populates all scraped BSET data & admin user (admin / admin123)
python manage.py runserver 8000
```
* **API Endpoints:** `http://localhost:8000/api/`
* **Django Admin Panel:** `http://localhost:8000/admin/` (User: `admin`, Pass: `admin123`)

---

### 2. Running the Next.js Frontend
```bash
cd frontend
npm install
npm run dev
```
* **Frontend Web App:** `http://localhost:3000`

---

### 3. Running with Docker Compose
```bash
docker-compose up --build
```
This boots up PostgreSQL on port `5432`, Django API on port `8000`, and Next.js frontend on port `3000`.
