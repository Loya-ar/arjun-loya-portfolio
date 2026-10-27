# Arjun Loya — Portfolio

**Live site:** [arjunloya.com](https://arjunloya.com/?utm_source=github)

I build data warehouses and the AI systems that read from them. This repo is the source for my personal site: experience, education, and eight featured projects across data engineering, analytics, statistics, and applied AI.

MS in Information Systems, Northeastern University (expected Dec 2026). Available full-time from January 2027.

## Featured projects

| Project | Area | Stack | Link |
|---|---|---|---|
| IMDb Analytics Platform | Data Engineering | Databricks, Delta Live Tables, PySpark, Power BI | [Repo](https://github.com/Loya-ar/imdb-analytics-platform) |
| Chinook OLTP to Snowflake ELT | Data Engineering | Azure Data Factory, Snowflake, Parquet, Azure Key Vault | [Repo](https://github.com/Loya-ar/chinook-snowflake-elt) |
| BI Narrative Generator | Business Intelligence | Python, Streamlit, Plotly, Gemini API | [Repo](https://github.com/Loya-ar/bi-narrative-generator) |
| Multi-Agent Analytics System | Machine Learning | Python, contextual bandits (UCB), Q-learning | [Repo](https://github.com/Loya-ar/intelligent-analytics-rl) |
| Hospital Quality Analysis | Statistics | R, ANOVA, CMS Hospital Compare | [Video](https://youtu.be/oHZWyJ4h-6k) |
| NYC Taxi Demand Forecasting | Forecasting | R, ARIMA, tidyverse, ggplot2 | [Repo](https://github.com/Loya-ar/nyc-taxi-demand-forecasting) |
| Financial Summarization: T5 | NLP & LLMs | PyTorch, Transformers | [Colab](https://colab.research.google.com/drive/1Pk2HBWM4OboriOW4B1mSOJ_kmu7FmFU_) |
| Grocery E-commerce Analytics | Business Analytics | Amazon Seller Central, Excel, Google Sheets | — |

Each project card on the site opens a short write-up covering what was built and how the results were checked.

## How the site is built

A static site with no build step: plain HTML, CSS, and JavaScript, deployed on Vercel from the `main` branch. Every commit to `main` redeploys the production site automatically.

```
├── index.html        # the whole site: intro, about, experience, projects, contact
├── resume.html       # records a page view, then opens resume.pdf
├── resume.pdf        # current resume
├── css/              # template styles
├── js/               # template scripts (navigation, animations, project popups)
├── images/           # profile photo and Open Graph preview image
└── favicons, site.webmanifest
```

## Analytics

The site uses Vercel Web Analytics (cookie-free, no personal data collected). Two small additions make it more useful for a job search:

- **Resume opens.** Every resume button points to `resume.html`, which counts as a page view before redirecting to the PDF. Views of `/resume.html` show how often the resume is opened from the site.
- **Traffic sources.** Links to the site carry a `utm_source` tag (`resume`, `linkedin`, `github`), and resume links also carry `utm_campaign` for the resume version. This separates visits that would otherwise all appear as "direct."

## Updating the site

1. Edit `index.html` (or replace `resume.pdf`, keeping the same file name).
2. Commit to `main`.
3. Vercel redeploys in a few seconds; check the live site in a private window to bypass the browser cache.

## Credits

Built on an open-source HTML template; see `readme.txt` for the original template license and attribution. Project card images from [Unsplash](https://unsplash.com).

## Contact

[arjunloya.data@gmail.com](mailto:arjunloya.data@gmail.com) · [LinkedIn](https://linkedin.com/in/arjun-loya) · [GitHub](https://github.com/Loya-ar)
