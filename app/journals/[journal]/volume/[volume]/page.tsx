import Link from "next/link";

interface VolumePageProps {
  params: Promise<{
    journal: string;
    volume: string;
  }>;
}

export default async function VolumePage({ params }: VolumePageProps) {

  const resolvedParams = await params;
  const journalId = resolvedParams.journal;
  const volumeId = resolvedParams.volume;

  const volumeRes = await fetch(
    `https://drl-backend-wlz1.onrender.com/api/volumes/${volumeId}`,
    { cache: "no-store" }
  );

  if (!volumeRes.ok) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-semibold text-slate-900">
          Volume not found
        </h2>
      </div>
    );
  }

  const volume = await volumeRes.json();

  const articlesRes = await fetch(
    `https://drl-backend-wlz1.onrender.com/api/articles/volume/${volumeId}`,
    { cache: "no-store" }
  );

  const articles = articlesRes.ok ? await articlesRes.json() : [];

  return (
    <div className="max-w-5xl mx-auto">

      {/* ===== Volume Header ===== */}
      <div className="mb-12">

        <h1 className="text-3xl font-bold text-slate-900">
          {volume.title}
        </h1>

        <div className="mt-3 flex items-center gap-3">

          <span className="px-3 py-1 bg-[#F4A623]/10 text-[#0A1F44] text-sm rounded-full border border-[#F4A623]/40">
            Volume
          </span>

          <span className="text-slate-500 text-sm">
            {volume.year}
          </span>

          <span className="text-slate-400 text-sm">
            • {articles.length} Article{articles.length !== 1 && "s"}
          </span>

        </div>

        <div className="mt-4 w-24 h-1 bg-gradient-to-r from-[#0A1F44] to-[#F4A623] rounded-full" />

      </div>

      {/* ===== Article List ===== */}
      {articles.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-xl p-8 text-center text-slate-600">
          No articles available in this volume.
        </div>
      ) : (
        <div className="space-y-6">

          {articles.map((article: any, index: number) => (
            <div
              key={article.id}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >

              {/* Article Header */}
              <div className="flex items-center justify-between">

                <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-100">
                  {article.articleType || "Research Article"}
                </span>

                <span className="text-xs text-slate-400">
                  Article {index + 1}
                </span>

              </div>

              {/* Article Title */}
              <h3 className="text-xl font-semibold text-slate-900 mt-3 leading-snug">
                <Link
                  href={`/journals/${journalId}/volume/${volumeId}/article/${article.id}`}
                  className="hover:text-[#F4A623] transition"
                >
                  {article.title}
                </Link>
              </h3>

              {/* Authors */}
              <p className="mt-2 text-slate-600 text-sm">
                {article.authors}
              </p>

              {/* Footer */}
              <div className="mt-4 flex items-center justify-between">

                <Link
                  href={`/journals/${journalId}/volume/${volumeId}/article/${article.id}`}
                  className="text-sm font-medium text-[#0A1F44] hover:text-[#F4A623] transition"
                >
                  Read Article →
                </Link>

                {article.pages && (
                  <span className="text-xs text-slate-400">
                    Pages {article.pages}
                  </span>
                )}

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}