import PageContainer from "@/components/ui/PageContainer";

interface CurrentIssuePageProps {
  params: Promise<{
    journal: string;
  }>;
}

export default async function CurrentIssuePage({
  params,
}: CurrentIssuePageProps) {

  const resolvedParams = await params;
  const journalId = resolvedParams.journal;

  const volumesRes = await fetch(
    `https://drl-backend-wlz1.onrender.com/api/volumes/journal/${journalId}`,
    { cache: "no-store" }
  );

  if (!volumesRes.ok) {
    return <div className="text-center py-20">No volumes available.</div>;
  }

  const volumes = await volumesRes.json();

  if (!volumes || volumes.length === 0) {
    return <div className="text-center py-20">No volumes available.</div>;
  }

  const currentVolume = volumes.find((v: any) => v.isCurrent === true);

  if (!currentVolume) {
    return <div className="text-center py-20">No current issue available.</div>;
  }

  const articlesRes = await fetch(
    `https://drl-backend-wlz1.onrender.com/api/articles/volume/${currentVolume.id}`,
    { cache: "no-store" }
  );

  if (!articlesRes.ok) {
    return <div className="text-center py-20">No articles found.</div>;
  }

  const articles = await articlesRes.json();

  return (
    <PageContainer>
    

      {/* Page Header */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900">
          Current Issue
        </h2>

        <div className="mt-3 w-24 h-1 bg-gradient-to-r from-[#0A1F44] to-[#F4A623] rounded-full" />

        <div className="mt-4 flex items-center gap-3">

          <span className="px-3 py-1 bg-[#F4A623]/10 text-[#0A1F44] text-sm rounded-full border border-[#F4A623]/40">
            {currentVolume.title}
          </span>

          <span className="text-gray-500 text-sm">
            {currentVolume.year}
          </span>

        </div>
      </div>

      {articles.length === 0 && (
        <p className="text-gray-600">No articles available.</p>
      )}

      <div className="space-y-8">

        {articles.map((article: any) => (
          <div
            key={article.id}
            className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition duration-300"
          >

            {/* Article Type */}
            <div className="flex items-center justify-between">

              <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-100">
                {article.articleType}
              </span>

              <span className="text-xs text-gray-500">
                {article.pages}
              </span>

            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-slate-900 mt-3 leading-snug">
              {article.title}
            </h3>

            {/* Authors */}
            <p className="text-sm text-gray-600 mt-2">
              {article.authors}
            </p>

            {/* Links */}
            <div className="mt-4 flex gap-6 text-sm">

              <a
                href={`/journals/${journalId}/volume/${currentVolume.id}/article/${article.id}`}
                className="font-medium text-[#0A1F44] hover:text-[#F4A623] transition"
              >
                Read Article →
              </a>

              {article.pdfUrl && (
  <a
    href={`https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(article.pdfUrl)}`}
    target="_blank"
    rel="noopener noreferrer"
    className="font-medium text-[#0A1F44] hover:text-[#F4A623] transition"
  >
    View PDF
  </a>
)}

            </div>

          </div>
        ))}

      </div>

    </PageContainer>
  );
}