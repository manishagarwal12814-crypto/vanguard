/* ============================================================
   CONTENT DATA
   (Edit these arrays to customize copy — no HTML editing needed)
   ============================================================ */

const PROGRAMS = [
  {
    tag: "ARMY · NAVY · AIR FORCE",
    title: "NDA Foundation",
    eligibility: "Class 9th – 12th",
    desc: "Two-year integrated track pairing board exam prep with NDA written and SSB groundwork from day one."
  },
  {
    tag: "ARMY · NAVY · AIR FORCE",
    title: "NDA After 12th",
    eligibility: "12th Pass",
    desc: "Intensive batch for 12th-pass aspirants targeting the NDA written exam and interview in one cycle."
  },
  {
    tag: "ARMY",
    title: "CDS & OTA",
    eligibility: "Graduates",
    desc: "Written exam mastery plus Officer Training Academy interview prep for graduating aspirants."
  },
  {
    tag: "AIR FORCE",
    title: "AFCAT",
    eligibility: "Graduates",
    desc: "Air Force entry coaching covering technical modules, general awareness and reasoning."
  },
  {
    tag: "ALL BRANCHES",
    title: "SSB Interview Mastery",
    eligibility: "All Streams",
    desc: "GTO tasks, psychology tests and personal interview simulations led by ex-assessors."
  },
  {
    tag: "ALL BRANCHES",
    title: "Live Online Batch",
    eligibility: "Anywhere in India",
    desc: "Full coaching delivered live for aspirants who can't relocate to campus, same syllabus and mocks."
  }
];

const FEATURES = [
  {
    title: "Veteran-Led Faculty",
    desc: "Mentors who've served as GTOs, interviewing officers and decorated officers train every batch.",
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"/></svg>`
  },
  {
    title: "SSB-First Curriculum",
    desc: "Every subject is taught with the interview and tasks in mind, not just the written paper.",
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none"/></svg>`
  },
  {
    title: "Daily Physical Conditioning",
    desc: "Structured PT, drills and fitness benchmarks mirroring actual selection standards.",
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6.5 7v10M17.5 7v10M3 9.5h3M3 14.5h3M18 9.5h3M18 14.5h3M6.5 12h11"/></svg>`
  },
  {
    title: "Small Batch Mentorship",
    desc: "Low student-mentor ratio so no aspirant is just a roll number in the register.",
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17.5" cy="9" r="2.4"/><path d="M21 20c0-2.6-1.8-4.7-4.2-5.4"/></svg>`
  },
  {
    title: "Weekly Progress Tracking",
    desc: "Tests, mock interviews and personalised feedback delivered every single week.",
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19V10M11 19V5M18 19v-7"/><path d="M3 19h19"/></svg>`
  },
  {
    title: "Hostel & Mess on Campus",
    desc: "A disciplined living environment built entirely around the training schedule.",
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-7 9 7"/><path d="M5 10v9h14v-9"/><path d="M10 19v-5h4v5"/></svg>`
  }
];

const TESTIMONIALS = [
  { name: "Priya Malhotra", program: "NDA (After 12th)", quote: "Vanguard didn't just teach me physics and maths — it taught me how to walk into an SSB room without flinching." },
  { name: "Rohan Bisht", program: "CDS", quote: "The mock interviews here were tougher than the real one. That's exactly why I cleared it on my first attempt." },
  { name: "Ananya Thapa", program: "NDA Foundation", quote: "Two years here changed how I carry myself — in the classroom and out on the ground." },
  { name: "Karthik Iyer", program: "AFCAT", quote: "Small batches meant my mentor knew exactly where I was stuck, every single week." },
  { name: "Simran Kaur", program: "SSB Interview Mastery", quote: "I walked in confused about GTO tasks. Six weeks later, I walked out recommended." },
  { name: "Aditya Negi", program: "NDA (After 12th)", quote: "The PT schedule here is no joke — and that's exactly what got me through Stage 2." }
];

const FAQS = [
  { q: "Who can apply for the NDA Foundation course?", a: "Students who have completed Class 10 and are starting Class 11 can join. The course runs through Class 12 alongside NDA written and SSB preparation." },
  { q: "Is there an age limit for NDA or CDS?", a: "Yes, both have specific age brackets set by UPSC each year. Our counsellors confirm your exact eligibility window during enrollment." },
  { q: "Do you offer hostel facilities?", a: "Yes, on-campus hostel and mess are available for outstation students, with the daily schedule built around training hours." },
  { q: "Can I join the online batch from another city?", a: "Yes, our live online programs cover the same syllabus and mock SSB sessions as the offline campus batches." },
  { q: "How are SSB mock interviews conducted?", a: "They're conducted by mentors with prior SSB assessor experience, covering GTO outdoor tasks, psychology tests and personal interview rounds." }
];

const TICKER_ITEMS = [
  "AIR 09 — NDA (II) SELECTION",
  "SSB RECOMMENDED — CDS BATCH",
  "AIR 82 — NDA (II) SELECTION",
  "SELECTED — AFCAT 2026",
  "SSB RECOMMENDED — OTA BATCH",
  "TOP 50 — NDA WRITTEN 2025"
];

/* ============================================================
   RENDER HELPERS
   ============================================================ */
function renderPrograms() {
  const grid = document.getElementById("programsGrid");
  grid.innerHTML = PROGRAMS.map(p => `
    <article class="card-program">
      <span class="card-program__tag mono">${p.tag}</span>
      <h3 class="card-program__title">${p.title}</h3>
      <span class="card-program__elig mono">ELIGIBILITY // ${p.eligibility}</span>
      <p class="card-program__desc">${p.desc}</p>
      <a href="#enroll" class="card-program__link">Learn more <span aria-hidden="true">→</span></a>
    </article>
  `).join("");
}

function renderFeatures() {
  const grid = document.getElementById("featuresGrid");
  grid.innerHTML = FEATURES.map(f => `
    <article class="card-feature">
      <div class="card-feature__icon">${f.icon}</div>
      <h3 class="card-feature__title">${f.title}</h3>
      <p class="card-feature__desc">${f.desc}</p>
    </article>
  `).join("");
}

function renderTestimonials() {
  const scroller = document.getElementById("testimonialScroll");
  scroller.innerHTML = TESTIMONIALS.map(t => {
    const initials = t.name.split(" ").map(n => n[0]).join("").toUpperCase();
    return `
      <article class="card-testimonial">
        <div class="card-testimonial__stars" aria-label="5 out of 5 stars">★★★★★</div>
        <p class="card-testimonial__quote">"${t.quote}"</p>
        <div class="card-testimonial__person">
          <span class="card-testimonial__avatar">${initials}</span>
          <div>
            <div class="card-testimonial__name">${t.name}</div>
            <div class="card-testimonial__program">${t.program}</div>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function renderFaq() {
  const acc = document.getElementById("accordion");
  acc.innerHTML = FAQS.map((f, i) => `
    <div class="accordion-item" data-index="${i}">
      <button class="accordion-item__q" aria-expanded="false">
        <span>${f.q}</span>
        <span class="accordion-item__icon" aria-hidden="true"></span>
      </button>
      <div class="accordion-item__a">
        <div class="accordion-item__a-inner">${f.a}</div>
      </div>
    </div>
  `).join("");

  acc.querySelectorAll(".accordion-item").forEach(item => {
    const btn = item.querySelector(".accordion-item__q");
    const panel = item.querySelector(".accordion-item__a");
    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");
      acc.querySelectorAll(".accordion-item.is-open").forEach(openItem => {
        if (openItem !== item) {
          openItem.classList.remove("is-open");
          openItem.querySelector(".accordion-item__a").style.maxHeight = null;
          openItem.querySelector(".accordion-item__q").setAttribute("aria-expanded", "false");
        }
      });
      item.classList.toggle("is-open", !isOpen);
      btn.setAttribute("aria-expanded", String(!isOpen));
      panel.style.maxHeight = !isOpen ? panel.scrollHeight + "px" : null;
    });
  });
}

function renderTicker() {
  const html = TICKER_ITEMS.map(item => {
    const [tag, rest] = item.split(" — ");
    return `<span class="item"><b>${tag}</b> — ${rest}</span><span class="ticker__sep">◆</span>`;
  }).join("");
  document.getElementById("tickerGroupA").innerHTML = html;
  document.getElementById("tickerGroupB").innerHTML = html;
}

/* ============================================================
   NAV BEHAVIOUR
   ============================================================ */
function initNav() {
  const nav = document.getElementById("nav");
  const toggle = document.getElementById("navToggle");

  window.addEventListener("scroll", () => {
    nav.classList.toggle("is-scrolled", window.scrollY > 12);
  });

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-menu-open");
    toggle.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  });

  document.querySelectorAll(".nav__links a, .nav__cta").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-menu-open");
      toggle.classList.remove("is-open");
    });
  });
}

/* ============================================================
   SCROLL REVEAL + COUNTERS
   ============================================================ */
function initReveal() {
  const prefersReduced = typeof window.matchMedia === "function"
    && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = document.querySelectorAll("[data-reveal]");

  if (prefersReduced || !("IntersectionObserver" in window)) {
    targets.forEach(el => el.classList.add("is-visible"));
    runCounters();
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(el => observer.observe(el));

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        runCounters();
        statsObserver.disconnect();
      }
    });
  }, { threshold: 0.4 });

  const statsSection = document.querySelector(".stats");
  if (statsSection) statsObserver.observe(statsSection);
}

function runCounters() {
  document.querySelectorAll(".stat__num").forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || "";
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

/* ============================================================
   FORM SUBMISSION
   ============================================================ */
function initForm() {
  const form = document.getElementById("enrollForm");
  const status = document.getElementById("formStatus");
  const submitBtn = document.getElementById("submitBtn");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      status.textContent = "Please fill in all required fields correctly.";
      status.className = "form__status mono is-error";
      return;
    }

    const payload = Object.fromEntries(new FormData(form).entries());

    submitBtn.disabled = true;
    submitBtn.querySelector(".btn__label").textContent = "Submitting...";
    status.textContent = "";
    status.className = "form__status mono";

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error("Request failed");

      status.textContent = "Application received — a counsellor will reach out within 24 hours.";
      status.className = "form__status mono is-success";
      form.reset();
    } catch (err) {
      status.textContent = "Something went wrong. Please try again in a moment.";
      status.className = "form__status mono is-error";
    } finally {
      submitBtn.disabled = false;
      submitBtn.querySelector(".btn__label").textContent = "Submit Application";
    }
  });
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  renderPrograms();
  renderFeatures();
  renderTestimonials();
  renderFaq();
  renderTicker();
  initNav();
  initReveal();
  initForm();

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
