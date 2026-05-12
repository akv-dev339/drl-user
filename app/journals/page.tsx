// import Image from "next/image";
// import Link from "next/link";
// import JournalCard from "@/components/JournalCard";

// export default async function JournalsPage() {
//   const journals = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_URL}/api/journals`,
//     { cache: "no-store" }
//   ).then(res => res.json());

//   return (
//     <main className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 sm:px-6 py-12 sm:py-20 overflow-hidden">

//       <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-blue-200/30 blur-3xl rounded-full -z-10" />
//       <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-200/30 blur-3xl rounded-full -z-10" />

//       <div className="max-w-6xl mx-auto">

//         {/* Hero Section */}
//         <div className="text-center mb-12 sm:mb-16">

//           {/* Logo + Title */}
//           <Link
//             href="/"
//             className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5 mb-6 hover:opacity-90 transition"
//           >

//             <Image
//               src="/drl-logo.jpeg"
//               alt="DRL Journals Logo"
//               width={70}
//               height={70}
//               className="object-contain"
//               priority
//             />

//             <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-900 to-indigo-600 bg-clip-text text-transparent">
//               DRL Journals
//             </h1>

//           </Link>

//           <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto px-2">
//             Advancing global research through peer-reviewed, high-impact
//             scientific publications.
//           </p>

//           <div className="mt-6 w-20 sm:w-24 h-1 bg-blue-900 mx-auto rounded-full" />

//         </div>

//         {/* Journals Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
//           {journals.map((journal: any) => (
//             <JournalCard
//               key={journal.id}
//               title={journal.title}
//               description={
//                 journal.title.includes("DRL Journal of Sciences")
//                   ? "Focused on advancing research in biotechnology and applied sciences."
//                   : "Publishing interdisciplinary research across emerging domains."
//               }
//               href={`/journals/${journal.id}`}
//             />
//           ))}
//         </div>

//       </div>
//     </main>
//   );
// }

import Image from "next/image";
import Link from "next/link";

export default async function HomePage() {
  const journals = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/journals`,
    { cache: "no-store" }
  ).then((res) => res.json());

  return (
    <main className="relative overflow-hidden bg-white text-slate-900">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100 blur-3xl rounded-full opacity-40" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-100 blur-3xl rounded-full opacity-40" />

      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-[#f8fbff] min-h-screen border-b border-slate-200">

        {/* BACKGROUND */}
        <div className="absolute inset-0 -z-10 overflow-hidden">

          <div className="absolute top-[-200px] left-[-120px] w-[600px] h-[600px] bg-blue-200/40 blur-3xl rounded-full" />

          <div className="absolute bottom-[-220px] right-[-120px] w-[650px] h-[650px] bg-indigo-200/40 blur-3xl rounded-full" />

          <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:70px_70px]" />

        </div>

        {/* ================= TOP STRIP ================= */}
        <div className="relative z-20 border-b border-slate-200 bg-white/80 backdrop-blur-xl">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-center">

            <div className="flex items-center gap-3 sm:gap-6">

              {/* LOGO */}
              <div className="relative">

                <div className="absolute inset-0 bg-blue-300/30 blur-2xl rounded-full scale-125" />

                <div className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-2xl sm:rounded-[1.8rem] bg-white border border-slate-200 shadow-xl flex items-center justify-center">

                  <Image
                    src="/drl-logo.jpeg"
                    alt="DRL Journals"
                    width={32}
                    height={32}
                    className="object-contain sm:w-12 sm:h-12"
                    priority
                  />

                </div>

              </div>

              {/* NAME */}
              <div>

                <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-700 bg-clip-text text-transparent">

                  DRL JOURNALS

                </h1>

                <p className="mt-1 text-[10px] sm:text-sm tracking-[0.2em] sm:tracking-[0.35em] uppercase text-slate-500 font-medium">

                  Scientific Publishing Platform

                </p>

              </div>

            </div>

          </div>

        </div>

        {/* ================= HERO CONTENT ================= */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-14 sm:pt-20 lg:pt-24 pb-16 sm:pb-24">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* ================= LEFT ================= */}
            <div>

              {/* BADGE */}
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-800 text-[11px] sm:text-sm font-semibold shadow-sm">

                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />

                International Peer-Reviewed Academic Publishing

              </div>

              {/* HEADING */}
              <h2 className="mt-8 sm:mt-10 text-4xl sm:text-6xl md:text-7xl xl:text-[6.8rem] font-black leading-[0.92] tracking-tight">

                <span className="text-slate-900">
                  Advancing
                </span>

                <span className="block bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-600 bg-clip-text text-transparent">

                  Scholarly

                </span>

                <span className="block text-slate-900">
                  Research
                </span>

              </h2>

              {/* DESCRIPTION */}
              <p className="mt-6 sm:mt-10 text-base sm:text-lg lg:text-xl leading-relaxed text-slate-600 max-w-2xl">

                DRL Journals is dedicated to publishing high-quality,
                peer-reviewed research across multidisciplinary sciences,
                biotechnology, healthcare, engineering, and emerging
                academic domains while maintaining the highest standards
                of editorial integrity, scientific excellence, and
                global research accessibility.

              </p>

              {/* BUTTONS */}
              <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row gap-4 sm:gap-5">

                <Link
                  href="#journals"
                  className="px-6 sm:px-10 py-4 sm:py-5 rounded-2xl bg-slate-900 text-white text-base sm:text-lg font-semibold shadow-2xl hover:scale-[1.03] hover:bg-slate-800 transition-all duration-300 text-center"
                >
                  Explore Journals
                </Link>

                <Link
                  href="/journals/1/submission"
                  className="px-6 sm:px-10 py-4 sm:py-5 rounded-2xl border border-slate-300 bg-white text-slate-900 text-base sm:text-lg font-semibold hover:bg-slate-50 hover:shadow-xl transition-all duration-300 text-center"
                >
                  Submit Manuscript
                </Link>

              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-14 sm:mt-20">

                {[
                  {
                    number: "2+",
                    label: "Active Journals",
                  },
                  {
                    number: "100%",
                    label: "Peer Reviewed",
                  },
                  {
                    number: "Open",
                    label: "Access Policy",
                  },
                  {
                    number: "Global",
                    label: "Research Reach",
                  },
                ].map((item) => (

                  <div
                    key={item.label}
                    className="rounded-2xl sm:rounded-[28px] border border-white/60 bg-white/80 backdrop-blur-xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
                  >

                    <h3 className="text-2xl sm:text-4xl font-black text-slate-900">
                      {item.number}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {item.label}
                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* ================= RIGHT SIDE ================= */}
            <div className="relative">

              {/* MAIN GLASS CARD */}
              <div className="relative rounded-[28px] sm:rounded-[40px] border border-white/60 bg-white/70 backdrop-blur-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.08)]">

                {/* TOP */}
                <div className="p-5 sm:p-8 border-b border-slate-200 flex items-center justify-between">

                  <div>

                    <p className="uppercase tracking-[0.3em] text-[10px] sm:text-xs font-bold text-blue-700">
                      Academic Excellence
                    </p>

                    <h3 className="mt-3 text-2xl sm:text-3xl font-black text-slate-900">
                      DRL Academic Publishing
                    </h3>

                  </div>

                  <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-green-500 animate-pulse" />

                </div>

                {/* CONTENT */}
                <div className="p-5 sm:p-8 space-y-5 sm:space-y-6">

                  {/* BIG CARD */}
                  <div className="rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-blue-700 to-indigo-800 p-6 sm:p-10 text-white shadow-2xl">

                    <p className="uppercase tracking-[0.3em] text-[10px] sm:text-xs font-bold text-blue-100">
                      Academic Excellence
                    </p>

                    <h2 className="mt-5 text-3xl sm:text-5xl font-black leading-tight">

                      Trusted
                      <span className="block">
                        Scholarly Publishing
                      </span>

                    </h2>

                    <p className="mt-6 text-blue-100 text-sm sm:text-lg leading-relaxed">

                      Providing researchers, academicians, and scholars with
                      transparent editorial processes, peer-reviewed publication
                      standards, and global dissemination of scientific knowledge.

                    </p>

                  </div>

                  {/* SMALL FEATURES */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                    {[
                      {
                        title: "Fast Review",
                        desc: "Efficient editorial workflow",
                      },
                      {
                        title: "Open Access",
                        desc: "Global accessibility",
                      },
                      {
                        title: "DOI Support",
                        desc: "Structured publishing",
                      },
                      {
                        title: "Global Authors",
                        desc: "International collaboration",
                      },
                    ].map((item) => (

                      <div
                        key={item.title}
                        className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 hover:shadow-xl transition-all duration-300"
                      >

                        <h4 className="font-bold text-base sm:text-lg text-slate-900">
                          {item.title}
                        </h4>

                        <p className="mt-3 text-sm leading-relaxed text-slate-500">
                          {item.desc}
                        </p>

                      </div>

                    ))}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= JOURNALS SECTION ================= */}
      <section
        id="journals"
        className="relative py-16 sm:py-24 bg-slate-50/60 border-t border-slate-200"
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* HEADER */}
          <div className="text-center mb-14 sm:mb-16">

            <h2 className="mt-4 text-3xl sm:text-5xl font-black text-slate-900">
              Explore Our Journals
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed">

              Discover peer-reviewed journals covering biotechnology,
              multidisciplinary sciences, and emerging research domains
              with a commitment to academic excellence.

            </p>

          </div>

          {/* JOURNAL GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">

            {journals.map((journal: any) => (

              <div
                key={journal.id}
                className="group"
              >

                <div className="h-full rounded-[28px] sm:rounded-[32px] border border-slate-200 bg-white shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">

                  {/* TOP STRIP */}
                  <div className="h-2 bg-gradient-to-r from-blue-900 via-indigo-700 to-cyan-500" />

                  <div className="p-6 sm:p-10">

                    {/* HEADER */}
                    <div className="flex items-center justify-between mb-8 gap-4">

                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">

                        <Image
                          src="/drl-logo.jpeg"
                          alt="Journal Logo"
                          width={38}
                          height={38}
                          className="object-contain"
                        />

                      </div>

                      <span className="px-3 sm:px-4 py-2 rounded-full bg-blue-50 text-blue-900 text-[10px] sm:text-xs font-semibold border border-blue-100 whitespace-nowrap">
                        Peer Reviewed
                      </span>

                    </div>

                    {/* TITLE */}
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug group-hover:text-blue-900 transition">

                      {journal.title}

                    </h3>

                    {/* DESCRIPTION */}
                    <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">

                      {journal.title.includes("Sciences")
                        ? "Focused on advancing biotechnology, applied sciences, and innovative scientific research through high-quality scholarly publications."
                        : "Dedicated to multidisciplinary academic research spanning interdisciplinary and emerging global domains."
                      }

                    </p>

                    {/* BUTTON */}
                    <div className="mt-8 sm:mt-10">

                      <Link
                        href={`/journals/${journal.id}`}
                        className="inline-flex items-center gap-3 px-6 sm:px-7 py-4 rounded-2xl bg-blue-900 text-white text-sm sm:text-base font-semibold hover:bg-blue-800 transition shadow-lg"
                      >
                        Explore Journal
                        <span>→</span>
                      </Link>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-slate-200 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            <div className="flex items-center gap-4">

              <Image
                src="/drl-logo.jpeg"
                alt="DRL Logo"
                width={42}
                height={42}
                className="object-contain"
              />

              <div>

                <h3 className="font-bold text-slate-900">
                  DRL Journals
                </h3>

                <p className="text-sm text-slate-500">
                  Scientific Publishing Platform
                </p>

              </div>

            </div>

            <div className="text-sm text-slate-500 text-center md:text-right">
              © 2026 DRL Journals. All Rights Reserved.
            </div>

          </div>

        </div>

      </footer>

    </main>
  );
}