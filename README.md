# Arjun Loya — Portfolio

**Live site:** [arjunloya.com](https://arjunloya.com/gh)

I build data warehouses and the AI systems that read from them. This repo is the source for my personal site: experience, education, and ten featured projects across data engineering, analytics, statistics, and applied AI.

MS in Information Systems, Northeastern University (expected Dec 2026). Available full-time from January 2027.

## Featured projects

| Project | Area | Stack | Link |
|---|---|---|---|
| Credit Risk Agent | Machine Learning & AI | Python, LightGBM, DuckDB, LangGraph, Gemini, Streamlit | [Repo](https://github.com/Loya-ar/credit-risk-agent) · [Live demo](https://credit-risk-agent-loya.streamlit.app) |
| Campaign A/B Test Analysis | Experimentation | Python, SciPy, statsmodels, pytest | [Repo](https://github.com/Loya-ar/campaign-ab-test-analysis) |
| IMDb Analytics Platform | Data Engineering | Databricks, Delta Live Tables, PySpark, Power BI | [Repo](https://github.com/Loya-ar/imdb-analytics-platform) |
| Chinook OLTP to Snowflake ELT | Data Engineering | Azure Data Factory, Snowflake, dbt, DuckDB, Airflow, Azure Key Vault | [Repo](https://github.com/Loya-ar/chinook-snowflake-elt) |
| BI Narrative Generator | Business Intelligence | Python, Streamlit, Plotly, Gemini API | [Repo](https://github.com/Loya-ar/bi-narrative-generator) |
| Intelligent Analytics: Bandits vs. an LLM | Machine Learning | Python, contextual bandits (LinUCB, Thompson sampling), Gemini API | [Repo](https://github.com/Loya-ar/intelligent-analytics-rl) |
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
├── go.html           # /go/<name>: records a page view (silently, or as a redirect)
├── vercel.json       # short links (/li, /cv, /gh, /apply, /go/<name>)
├── css/              # template styles
├── js/               # template scripts (navigation, animations, project popups)
├── images/           # profile photo and Open Graph preview image
└── favicons, site.webmanifest
```

## Analytics

The site uses Vercel Web Analytics (cookie-free, no personal data collected) on the free Hobby plan. Hobby reports page views, referrers, countries and devices, but not UTM tags or custom events, so everything below is done with page paths, which it does report:

- **Traffic sources.** Each place that links to the site uses its own short path, set up as rewrites in `vercel.json` that serve the normal home page. The Pages tab then shows where visitors came from:

  | Link | Used on |
  |---|---|
  | `arjunloya.com/li` | LinkedIn profile and posts |
  | `arjunloya.com/cv` | resume PDF |
  | `arjunloya.com/gh` | GitHub profile and READMEs |
  | `arjunloya.com/apply` | job applications and emails |

- **Project clicks.** Project and profile links open their real URL directly. Each is tagged `data-go="<name>"`, and on click `js/track-clicks.js` loads `/go/<name>` in a hidden frame, so Vercel records a view of `/go/credit-risk`, `/go/ab-test` and so on without slowing the link down. Opened directly, `/go/<name>` (served by `go.html`) redirects to a fixed list of destinations.
- **Resume opens.** Every resume button points to `resume.html`, which counts as a page view before opening the PDF.
- **Own visits.** Opening any page with `?me` (for example `arjunloya.com/?me`) stops counting visits from that browser; `?me=off` turns it back on. See `js/analytics-optout.js`.

## Updating the site

1. Edit `index.html` (or replace `resume.pdf`, keeping the same file name).
2. Commit to `main`.
3. Vercel redeploys in a few seconds; check the live site in a private window to bypass the browser cache.

## Credits

Built on an open-source HTML template; see `readme.txt` for the original template license and attribution. Project card images from [Unsplash](https://unsplash.com).

## Contact

[arjunloya.data@gmail.com](mailto:arjunloya.data@gmail.com) · [LinkedIn](https://linkedin.com/in/arjun-loya) · [GitHub](https://github.com/Loya-ar)
