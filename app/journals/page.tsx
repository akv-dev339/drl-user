import Image from "next/image";
import JournalCard from "@/components/JournalCard";

export default async function JournalsPage() {
  const journals = await fetch(
    "https://drl-backend-wlz1.onrender.com/api/journals",
    { cache: "no-store" }
  ).then(res => res.json());

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 px-6 py-20 overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200/30 blur-3xl rounded-full -z-10" />

      <div className="max-w-6xl mx-auto">

        {/* Hero Section */}
        <div className="text-center mb-16">

          {/* Logo + Title Inline */}
          <div className="flex justify-center items-center gap-5 mb-6">
            <Image
              src="/drl-logo.jpeg"
              alt="DRL Journals Logo"
              width={75}
              height={75}
              className="object-contain"
              priority
            />

            <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-900 to-indigo-600 bg-clip-text text-transparent">
              DRL Journals
            </h1>
          </div>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Advancing global research through peer-reviewed, high-impact
            scientific publications.
          </p>

          <div className="mt-6 w-24 h-1 bg-blue-900 mx-auto rounded-full" />
        </div>

        {/* Journals Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {journals.map((journal: any) => (
            <JournalCard
              key={journal.id}
              title={journal.title}
              description={
                journal.title.includes("DRL Journal of Sciences")
                  ? "Focused on advancing research in biotechnology and applied sciences."
                  : "Publishing interdisciplinary research across emerging domains."
              }
              issn={journal.issn}
              href={`/journals/${journal.id}`}
            />
          ))}
        </div>

      </div>
    </main>
  );
}