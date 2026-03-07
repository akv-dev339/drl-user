// import AnimatedPage from "@/components/ui/AnimatedPage";
// import Link from "next/link";

// interface ArticlePageProps {
//   params: Promise<{
//     journal: string;
//     volume: string;
//     article: string;
//   }>;
// }

// /* ================= METADATA ================= */
// export async function generateMetadata({ params }: ArticlePageProps) {
//   const resolvedParams = await params;

//   const res = await fetch(
//     `https://drl-backend-wlz1.onrender.com/api/articles/${resolvedParams.article}`,
//     { cache: "no-store" }
//   );

//   if (!res.ok) return {};

//   const article = await res.json();

//   return {
//     title: article.title,
//     description: article.abstractText,
//   };
// }

// export default async function ArticlePage({ params }: ArticlePageProps) {

//   const resolvedParams = await params;

//   const journalId = resolvedParams.journal;
//   const volumeId = resolvedParams.volume;
//   const articleId = resolvedParams.article;

//   const articleRes = await fetch(
//     `https://drl-backend-wlz1.onrender.com/api/articles/${articleId}`,
//     { cache: "no-store" }
//   );

//   if (!articleRes.ok) {
//     return (
//       <div className="text-center py-16">
//         <h2 className="text-2xl font-semibold text-slate-900">
//           Article not found
//         </h2>
//       </div>
//     );
//   }

//   const article = await articleRes.json();

//   const volumeRes = await fetch(
//     `https://drl-backend-wlz1.onrender.com/api/volumes/${volumeId}`,
//     { cache: "no-store" }
//   );

//   let volumeTitle = "";
//   if (volumeRes.ok) {
//     const volume = await volumeRes.json();
//     volumeTitle = volume.title;
//   }

//   return (
//     <AnimatedPage>

//       <div className="max-w-5xl mx-auto">

//         {/* ================= BREADCRUMB ================= */}
//         <div className="text-sm text-slate-500 mb-10">
//           <Link
//             href={`/journals/${journalId}`}
//             className="hover:text-[#F4A623] transition"
//           >
//             Journal Home
//           </Link>

//           <span className="mx-2">/</span>

//           <Link
//             href={`/journals/${journalId}/volume/${volumeId}`}
//             className="hover:text-[#F4A623] transition"
//           >
//             {volumeTitle}
//           </Link>

//           <span className="mx-2">/</span>

//           <span className="text-slate-700 font-medium">
//             Article
//           </span>
//         </div>

//         {/* ================= ARTICLE HEADER ================= */}
//         <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-10 mb-10">

//           {/* Article Type */}
//           {article.articleType && (
//             <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-100">
//               {article.articleType}
//             </span>
//           )}

//           {/* Title */}
//           <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mt-4">
//             {article.title}
//           </h1>

//           {/* Authors */}
//           <p className="text-lg text-slate-600 mt-4">
//             {article.authors}
//           </p>

//           {/* Article Meta */}
//           <div className="flex flex-wrap gap-6 mt-6 text-sm text-slate-500">

//             {article.pages && (
//               <span>
//                 Pages: {article.pages}
//               </span>
//             )}

//             {article.doi && (
//               <span>
//                 DOI: {article.doi}
//               </span>
//             )}

//           </div>

//         </div>

//         {/* ================= ABSTRACT ================= */}
//         <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-10 mb-10">

//           <h2 className="text-2xl font-semibold text-slate-900 mb-4">
//             Abstract
//           </h2>

//           <div className="w-20 h-1 bg-gradient-to-r from-[#0A1F44] to-[#F4A623] rounded-full mb-6" />

//           <p className="text-slate-700 leading-relaxed text-lg">
//             {article.abstractText}
//           </p>

//         </div>

//         {/* ================= PDF BUTTON ================= */}
//         {article.pdfUrl && (
//   <div className="flex justify-start">

//     <a
//       href={`https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(article.pdfUrl)}`}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="inline-flex items-center gap-2 px-8 py-3 
//       bg-[#0A1F44] text-white rounded-xl 
//       hover:bg-[#132C5B] transition-all duration-300 shadow-md"
//     >
//       View Full PDF
//     </a>

//   </div>
// )}

//       </div>

//     </AnimatedPage>
//   );
// }

import AnimatedPage from "@/components/ui/AnimatedPage";
import Link from "next/link";

interface ArticlePageProps {
  params: Promise<{
    journal: string;
    volume: string;
    article: string;
  }>;
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const resolvedParams = await params;

  const res = await fetch(
    `https://drl-backend-wlz1.onrender.com/api/articles/${resolvedParams.article}`,
    { cache: "no-store" }
  );

  if (!res.ok) return {};

  const article = await res.json();

  return {
    title: article.title,
    description: article.abstractText,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {

  const resolvedParams = await params;

  const journalId = resolvedParams.journal;
  const volumeId = resolvedParams.volume;
  const articleId = resolvedParams.article;

  const articleRes = await fetch(
    `https://drl-backend-wlz1.onrender.com/api/articles/${articleId}`,
    { cache: "no-store" }
  );

  if (!articleRes.ok) {
    return (
      <div className="text-center py-12 sm:py-16">
        <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
          Article not found
        </h2>
      </div>
    );
  }

  const article = await articleRes.json();

  const volumeRes = await fetch(
    `https://drl-backend-wlz1.onrender.com/api/volumes/${volumeId}`,
    { cache: "no-store" }
  );

  let volumeTitle = "";
  if (volumeRes.ok) {
    const volume = await volumeRes.json();
    volumeTitle = volume.title;
  }

  return (
    <AnimatedPage>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Breadcrumb */}
        <div className="text-sm text-slate-500 mb-8 sm:mb-10 flex flex-wrap gap-2">

          <Link href={`/journals/${journalId}`} className="hover:text-[#F4A623] transition">
            Journal Home
          </Link>

          <span>/</span>

          <Link
            href={`/journals/${journalId}/volume/${volumeId}`}
            className="hover:text-[#F4A623] transition"
          >
            {volumeTitle}
          </Link>

          <span>/</span>

          <span className="text-slate-700 font-medium">
            Article
          </span>

        </div>

        {/* Article Header */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 sm:p-10 mb-8 sm:mb-10">

          {article.articleType && (
            <div className="mb-3">
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-100">
                <strong>Article Type:</strong> {article.articleType}
              </span>
            </div>
          )}

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight mt-2">
            {article.title}
          </h1>

          {/* Authors */}
          <p className="text-base sm:text-lg text-slate-600 mt-4">
            <span className="font-semibold text-slate-800">Authors: </span>
            {article.authors}
          </p>

          {/* Article Meta */}
          <div className="flex flex-wrap gap-4 sm:gap-6 mt-6 text-sm text-slate-500">

            {article.pages && (
              <span>
                <strong className="text-slate-700">Pages:</strong> {article.pages}
              </span>
            )}

            {article.doi && (
              <span>
                <strong className="text-slate-700">DOI:</strong> {article.doi}
              </span>
            )}

          </div>

        </div>

        {/* Abstract */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 sm:p-10 mb-8 sm:mb-10">

          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">
            Abstract
          </h2>

          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#0A1F44] to-[#F4A623] rounded-full mb-6" />

          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            {article.abstractText}
          </p>

        </div>

        {/* PDF */}
        {article.pdfUrl && (
          <div className="flex justify-start">

            <a
              href={`https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(article.pdfUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 
              bg-[#0A1F44] text-white rounded-xl 
              hover:bg-[#132C5B] transition-all duration-300 shadow-md"
            >
              View Full PDF
            </a>

          </div>
        )}

      </div>

    </AnimatedPage>
  );
}