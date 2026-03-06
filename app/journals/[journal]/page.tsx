interface JournalPageProps {
  params: Promise<{
    journal: string;
  }>;
}

export default async function JournalHome({ params }: JournalPageProps) {

  const resolvedParams = await params;

  const res = await fetch(
    `https://drl-backend-wlz1.onrender.com/api/journals/${resolvedParams.journal}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-semibold text-gray-900">
          Journal not found
        </h2>
      </div>
    );
  }

  const journal = await res.json();

  return (
    <div className="max-w-5xl">

      {/* ================= JOURNAL ID = 1 (SCIENCES) ================= */}
      {journal.id === 1 && (
        <>
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900">
              Journal of Sciences – Overview
            </h2>
            <div className="mt-3 w-24 h-1 bg-gradient-to-r from-blue-900 to-indigo-600 rounded-full" />
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-10 space-y-8 text-slate-800 leading-relaxed">

            <p>
              Journal of Sciences is a multidisciplinary, peer-reviewed academic journal dedicated to publishing high-quality research across a broad spectrum of scientific disciplines. The journal serves as a dynamic platform for researchers, academicians, industry experts, and scholars to disseminate innovative findings, emerging technologies, and interdisciplinary advancements that contribute to scientific progress and societal development.
            </p>

            <div className="pt-6">
              <h3 className="text-2xl font-semibold text-slate-900">
                Aim & Scope of the Journal
              </h3>
              <div className="mt-3 w-20 h-1 bg-gradient-to-r from-blue-900 to-indigo-600 rounded-full" />
            </div>

            <p>
              The journal welcomes original research articles, review papers, short communications, case studies, and technical notes in the following areas:
            </p>

            <div className="grid md:grid-cols-2 gap-3 text-slate-800 mt-4">
              <ul className="list-disc pl-6 space-y-1">
                <li>All Basic and Applied Sciences</li>
                <li>Agriculture Sciences</li>
                <li>Botany and Plant Sciences</li>
                <li>Zoology</li>
                <li>Chemistry</li>
                <li>Mathematics</li>
                <li>Physics</li>
                <li>Environmental Science</li>
                <li>Geology Sciences</li>
                <li>Life Sciences</li>
                <li>Biotechnology</li>
                <li>Bioinformatics</li>
                <li>Microbiology</li>
                <li>Medical Sciences</li>
                <li>Allied Health Sciences</li>
                <li>Reproductive Biology</li>
              </ul>

              <ul className="list-disc pl-6 space-y-1">
                <li>Clinical Embryology</li>
                <li>Clinical Research</li>
                <li>Cancer Biology</li>
                <li>Forensic Science</li>
                <li>Biodiversity and Taxonomy</li>
                <li>Seed Technology</li>
                <li>Food Technology</li>
                <li>Nanoscience and Nanotechnology</li>
                <li>Biosensors</li>
                <li>Green Synthesis</li>
                <li>Applied Sciences</li>
                <li>Pharmaceutical Sciences</li>
                <li>Life Sciences</li>
                <li>Earth Sciences</li>
                <li>Geology</li>
                <li>Natural Sciences</li>
              </ul>

              <ul className="list-disc pl-6 space-y-1 md:col-span-2">
                <li>Engineering & Technology</li>
                <li>Artificial Intelligence</li>
                <li>Data Sciences</li>
                <li>Machine Learning</li>
                <li>And other emerging and interdisciplinary scientific fields.</li>
              </ul>
            </div>

          </div>
        </>
      )}


      {/* ================= JOURNAL ID = 2 (MULTIDISCIPLINARY) ================= */}
      {journal.id === 2 && (
        <>
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900">
              DRL Journal of Multidisciplinary Studies – Overview
            </h2>
            <div className="mt-3 w-24 h-1 bg-gradient-to-r from-blue-900 to-indigo-600 rounded-full" />
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-10 space-y-8 text-slate-800 leading-relaxed">

            <p>
              DRL Journal of Multidisciplinary Studies (DRL-JMS) is a peer-reviewed, open-access academic journal committed to promoting high-quality research across diverse disciplines in social sciences, humanities, management, commerce, law, creative arts, and applied professional studies.
            </p>

            <p>
              The journal provides a dynamic platform for scholars, academicians, researchers, professionals, and policy experts to publish original research, review articles, case studies, and conceptual papers that address contemporary issues at local, national, and global levels.
            </p>

            <p>
              DRL-JMS encourages interdisciplinary and transdisciplinary research that bridges theory and practice. The journal aims to foster academic excellence, innovation, and policy dialogue while supporting emerging researchers and established scholars alike.
            </p>

            <p>
              With a strong commitment to ethical publishing standards and rigorous peer review, DRL-JMS contributes meaningfully to knowledge creation and dissemination.
            </p>

            <div>
              <h3 className="text-2xl font-semibold text-slate-900">
                Aim of the Journal
              </h3>
              <div className="mt-3 w-20 h-1 bg-gradient-to-r from-blue-900 to-indigo-600 rounded-full" />
            </div>

            <ul className="list-disc pl-6 space-y-2">
              <li>Promote interdisciplinary research and academic collaboration across multiple fields.</li>
              <li>Encourage innovative research addressing contemporary societal, economic, legal, cultural, and managerial challenges.</li>
              <li>Provide a scholarly platform for knowledge exchange between academia, industry, policymakers, and practitioners.</li>
              <li>Support evidence-based research that contributes to sustainable development and good governance.</li>
              <li>Enhance global academic engagement through high-quality publications.</li>
            </ul>

            <div>
              <h3 className="text-2xl font-semibold text-slate-900">
                Scope of the Journal
              </h3>
              <div className="mt-3 w-20 h-1 bg-gradient-to-r from-blue-900 to-indigo-600 rounded-full" />
            </div>

            <p>
              DRL-JMS publishes original research papers, review articles, short communications, case studies, policy analyses, and book reviews in the following areas (but not limited to):
            </p>

            <div className="grid md:grid-cols-2 gap-3">
              <ul className="list-disc pl-6 space-y-1">
                <li>Management & Commerce</li>
                <li>Advertising & Public Relations</li>
                <li>Banking & Finance</li>
                <li>Corporate Law</li>
                <li>Digital Marketing</li>
                <li>Entrepreneurship & Innovation Studies</li>
                <li>Human Resource Management</li>
                <li>Supply Chain & Logistics Management</li>
                <li>Sports Management</li>
              </ul>

              <ul className="list-disc pl-6 space-y-1">
                <li>Law and Legal Studies</li>
                <li>Public Administration</li>
                <li>Political Science</li>
                <li>International Relations</li>
                <li>Environmental Policy & Governance</li>
                <li>Disaster Management</li>
                <li>Development Studies</li>
                <li>Urban Planning</li>
              </ul>
            </div>

          </div>
        </>
      )}


      {/* ================= FALLBACK ================= */}
      {journal.id !== 1 && journal.id !== 2 && (
        <div className="text-slate-700">
          <p>Overview content will be available soon.</p>
        </div>
      )}

    </div>
  );
}