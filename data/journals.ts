export const journals = {
  sciences: {
    name: "DRL Journal of Sciences",
    volumes: [
      {
        slug: "volume-3",
        title: "Volume 3",
        year: 2027,
        isCurrent: true,
        articles: [
          {
            slug: "advanced-biotech",
            type: "Research Article",
            pages: "pp. 1–12",
            title: "Advanced Biotechnology Applications",
            authors: "Dr. A, Dr. B",
            abstract: "This research explores next-gen biotech systems.",
            pdf: "/pdfs/sciences/volume-3/advanced-biotech.pdf",
          },
        ],
      },
      {
        slug: "volume-2",
        title: "Volume 2",
        year: 2026,
        isCurrent: false,
        articles: [
          {
            slug: "molecular-study",
            type: "Research Article",
            pages: "pp. 1–10",
            title: "Molecular Pattern Study",
            authors: "Dr. X, Dr. Y",
            abstract: "A study on molecular research innovations.",
            pdf: "/pdfs/sciences/volume-2/molecular-study.pdf",
          },
        ],
      },
      {
        slug: "volume-1",
        title: "Volume 1",
        year: 2025,
        isCurrent: false,
        articles: [
          {
            slug: "biotech-advances",
            type: "Research Article",
            pages: "pp. 1–8",
            title: "Biotechnological Advances in CRISPR Systems",
            authors: "Dr. K, Dr. L",
            abstract: "This paper discusses CRISPR applications.",
            pdf: "/pdfs/sciences/volume-1/biotech-advances.pdf",
          },
        ],
      },
    ],
  },

  multidisciplinary: {
    name: "DRL Journal of Multidisciplinary Studies",
    volumes: [
      {
        slug: "volume-2",
        title: "Volume 2",
        year: 2027,
        isCurrent: true,
        articles: [
          {
            slug: "ai-in-healthcare",
            type: "Research Article",
            pages: "pp. 1–15",
            title: "Artificial Intelligence in Healthcare Systems",
            authors: "Dr. P, Dr. Q",
            abstract: "This paper explores AI integration in modern healthcare.",
            pdf: "/pdfs/multidisciplinary/volume-2/ai-in-healthcare.pdf",
          },
          {
            slug: "climate-policy-analysis",
            type: "Review Article",
            pages: "pp. 16–30",
            title: "Climate Policy and Sustainable Development",
            authors: "Dr. R, Dr. S",
            abstract: "A multidisciplinary review of global climate policies.",
            pdf: "/pdfs/multidisciplinary/volume-2/climate-policy-analysis.pdf",
          },
        ],
      },
      {
        slug: "volume-1",
        title: "Volume 1",
        year: 2026,
        isCurrent: false,
        articles: [
          {
            slug: "digital-economy-study",
            type: "Research Article",
            pages: "pp. 1–12",
            title: "Digital Economy and Innovation Trends",
            authors: "Dr. T, Dr. U",
            abstract: "Study of economic growth driven by digital transformation.",
            pdf: "/pdfs/multidisciplinary/volume-1/digital-economy-study.pdf",
          },
        ],
      },
    ],
  },
};
