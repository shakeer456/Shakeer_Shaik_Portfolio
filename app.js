// ---------- Data ----------
const skills = ["SQL","Python","Power BI","Tableau","Advanced Excel","DAX","Power Query","Plotly","Streamlit","Pandas","NumPy","EDA","Data Cleaning","Feature Engineering","Pareto Analysis","ETL Workflows","Java","REST APIs","SQLite","Git"];

const experience = [
  {
    role: "Data Science Intern", company: "Unified Mentor",
    type: "Internship · Remote", period: "Feb 2026 – Present",
    tags: ["SQL","Python","Power BI"],
    note: "Built retention analytics on 10K+ bank customers; RSI churn-risk scoring and high-balance disengagement detection."
  },
  {
    role: "Power BI Intern", company: "Microsoft",
    type: "Internship · Remote · Hyderabad", period: "Feb 2026 – Mar 2026",
    tags: ["Power BI","DAX","EDA"],
    note: "3-page interactive dashboard on 705 students across 30+ countries with KPI cards, charts and slicers."
  },
  {
    role: "Software Engineer", company: "La Trandasys",
    type: "Full-time · On-site · Visakhapatnam", period: "Mar 2024 – Mar 2026",
    tags: ["Java","REST APIs","Android"],
    note: "Delivered 5+ Android apps reaching 10K–100K users with SQLite + REST API data integration."
  },
  {
    role: "Junior Full Stack Java Developer", company: "Vinsys",
    type: "Apprenticeship · Remote · Pune", period: "Feb 2024 – Apr 2024",
    tags: ["Java","HTML5"],
    note: "Built full-stack features, strengthening backend and frontend fundamentals."
  },
  {
    role: "Intern", company: "KodNest",
    type: "Internship · On-site · Bengaluru", period: "Jun 2023 – Feb 2024",
    tags: ["Java","Foundations"],
    note: "Hands-on software engineering internship building core programming skills."
  }
];

const projects = [
  {
    title: "Customer Engagement & Retention Analytics",
    sub: "European Bank · Unified Mentor",
    desc: "Behavioral analytics on 10,000 bank customers with a proprietary Relationship Strength Index (0–100) scoring loyalty risk.",
    tags: ["Python","Streamlit","Plotly"],
    live: "https://european-bank-retention-analytics-shakeer-shaik.streamlit.app/",
    github: "https://github.com/shakeer456/European_Bank_Retention_Analytics"
  },
  {
    title: "Product Line Profitability Analysis",
    sub: "Nassau Candy · Unified Mentor",
    desc: "Margin intelligence on 10,194 transactions / 15 SKUs — 4-tier margin health, product quadrants & auto-flag engine.",
    tags: ["Python","Pandas","Pareto"],
    live: "https://lnkd.in/guZBYKS9",
    github: "https://github.com/shakeer456/Nassau_Candy_Profitability_Analysis"
  },
  {
    title: "Student Social Media Addiction Analysis",
    sub: "Power BI · Microsoft",
    desc: "Interactive Power BI dashboard linking social media usage to sleep, mental health and academic performance.",
    tags: ["Power BI","Excel","EDA"],
    live: null,
    github: "https://github.com/shakeer456/STUDENT-SOCIAL-MEDIA-ADDICTION-ANALYSIS"
  }
];

const education = [
  { school: "NBKR Institute of Science & Technology", detail: "B.Tech — Computer Science & Engineering", period: "2019 – 2023", grade: "CGPA 8.63 / 10" },
  { school: "Narayana Junior College", detail: "Intermediate (MPC)", period: "2017 – 2019", grade: "Grade 9.94" },
  { school: "VBR EM High School", detail: "SSC", period: "2016 – 2017", grade: "Grade 9.8" }
];

const certs = [
  { name: "AI/BI for Data Analysts", org: "Databricks", url: "https://credentials.databricks.com/684bc194-a731-438d-b6c9-33a413c508d1#acc.E40erB6U" },
  { name: "SQL Analytics on Databricks", org: "Databricks", url: "https://credentials.databricks.com/809034ce-2189-4896-93a8-cbef588db3eb#acc.jSdOmtJZ" },
  { name: "Google Analytics Certification", org: "Skillshop", url: "https://skillshop.credential.net/5229357e-0027-4c83-a9c7-5ada23bad66a#acc.1xvZB3NV" }
];

// ---------- Render ----------
const tag = (t) => `<span class="tag">${t}</span>`;

document.getElementById("skills").innerHTML = skills.map(tag).join("");

document.getElementById("experience-list").innerHTML = experience.map(e => `
  <div class="grid sm:grid-cols-[1fr_1.4fr_auto] gap-3 sm:gap-6 py-5 items-start">
    <div>
      <h3 class="font-semibold text-neutral-900 dark:text-white">${e.company}</h3>
      <p class="text-[13px] text-neutral-500 dark:text-neutral-400">${e.role}</p>
      <p class="text-[12px] text-neutral-400 mt-0.5">${e.period} · ${e.type}</p>
    </div>
    <p class="text-sm text-neutral-600 dark:text-neutral-400">${e.note}</p>
    <div class="flex flex-wrap gap-2 sm:justify-end">${e.tags.map(tag).join("")}</div>
  </div>
`).join("");

document.getElementById("projects-list").innerHTML = projects.map(p => `
  <div class="flex flex-col rounded-2xl bg-white dark:bg-neutral-900 p-6 hover:shadow-lg hover:-translate-y-1 transition">
    <div class="flex items-start justify-between gap-3 mb-3">
      <span class="w-9 h-9 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 grid place-items-center text-sm">↗</span>
      <div class="flex flex-wrap gap-1.5 justify-end">${p.tags.map(tag).join("")}</div>
    </div>
    <h3 class="serif text-2xl leading-tight text-neutral-900 dark:text-white">${p.title}</h3>
    <p class="text-[12px] text-neutral-400 mt-1">${p.sub}</p>
    <p class="text-sm text-neutral-600 dark:text-neutral-400 mt-3 flex-1">${p.desc}</p>
    <div class="flex flex-wrap gap-4 mt-4 pt-4 border-t border-neutral-200/70 dark:border-neutral-800 text-[13px] font-medium">
      ${p.live ? `<a href="${p.live}" target="_blank" rel="noopener" class="hover:opacity-60 transition">Live dashboard →</a>` : ""}
      <a href="${p.github}" target="_blank" rel="noopener" class="text-neutral-500 dark:text-neutral-400 hover:opacity-60 transition">GitHub →</a>
    </div>
  </div>
`).join("");

document.getElementById("education-list").innerHTML = education.map(e => `
  <div class="flex items-baseline justify-between gap-3 pb-3 border-b border-neutral-300/50 dark:border-neutral-800">
    <div>
      <h3 class="font-medium text-neutral-900 dark:text-white">${e.school}</h3>
      <p class="text-[13px] text-neutral-500 dark:text-neutral-400">${e.detail}</p>
      <p class="text-[12px] text-neutral-400 mt-0.5">${e.grade}</p>
    </div>
    <span class="text-[12px] text-neutral-400 whitespace-nowrap">${e.period}</span>
  </div>
`).join("");

document.getElementById("certs-list").innerHTML = certs.map(c => `
  <div class="flex items-center justify-between gap-3 rounded-xl bg-white dark:bg-neutral-900 px-4 py-3">
    <div>
      <h3 class="text-sm font-medium text-neutral-900 dark:text-white">${c.name}</h3>
      <p class="text-[12px] text-neutral-400">${c.org}</p>
    </div>
    ${c.url ? `<a href="${c.url}" target="_blank" rel="noopener" class="text-[12px] font-medium hover:opacity-60 transition whitespace-nowrap">Verify →</a>` : ""}
  </div>
`).join("");

document.getElementById("year").textContent = new Date().getFullYear();
