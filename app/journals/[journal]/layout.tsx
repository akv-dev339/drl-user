// import JournalNavbar from "@/components/layout/JournalNavbar";
// import JournalTransition from "@/components/ui/JournalTransition";
// import { ReactNode } from "react";
// import Link from "next/link";
// import Image from "next/image";

// interface JournalLayoutProps {
//   children: ReactNode;
//   params: Promise<{
//     journal: string;
//   }>;
// }

// export default async function JournalLayout({
//   children,
//   params,
// }: JournalLayoutProps) {

//   const resolvedParams = await params;

//   const res = await fetch(
//     `http://localhost:8080/api/journals/${resolvedParams.journal}`,
//     { cache: "no-store" }
//   );

//   let journalTitle = "DRL Journal";
//   let journalIssn = "XXXX-XXXX";

//   if (res.ok) {
//     const journal = await res.json();
//     journalTitle = journal.title;
//     journalIssn = journal.issn;
//   }

//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-blue-50">

//       {/* ================= HEADER ================= */}
//       <header className="bg-white border-b border-slate-200">
//         <div className="max-w-6xl mx-auto px-6 py-10">

//           <Link href="/journals" className="inline-block group">
//             <div className="flex items-center gap-4">

//               {/* Logo */}
//               <Image
//                 src="/drl-logo.jpeg"
//                 alt="DRL Journals Logo"
//                 width={50}
//                 height={50}
//                 className="object-contain"
//                 priority
//               />

//               {/* Journal Title */}
//               <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 group-hover:text-blue-900 transition">
//                 {journalTitle}
//               </h1>

//             </div>
//           </Link>

//           {/* ISSN */}
//           <div className="mt-4 flex items-center gap-4 text-sm text-slate-500">
//             <span className="px-3 py-1 bg-blue-50 text-blue-800 rounded-full border border-blue-200">
//               ISSN: {journalIssn}
//             </span>
//           </div>

//         </div>
//       </header>

//       {/* ================= NAVIGATION ================= */}
//       <div className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-40">
//         <JournalNavbar journalId={resolvedParams.journal} />
//       </div>

//       {/* ================= MAIN CONTENT ================= */}
//       <main className="flex-grow py-20">
//         <div className="max-w-6xl mx-auto px-6">
//           <JournalTransition>
//             {children}
//           </JournalTransition>
//         </div>
//       </main>

//       {/* ================= FOOTER ================= */}
//       <footer className="border-t border-slate-200 bg-white text-center text-sm text-slate-600 py-8">
//         © {new Date().getFullYear()} DRL Journals. All rights reserved.
//       </footer>

//     </div>
//   );
// }


import JournalNavbar from "@/components/layout/JournalNavbar";
import JournalTransition from "@/components/ui/JournalTransition";
import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

interface JournalLayoutProps {
  children: ReactNode;
  params: Promise<{
    journal: string;
  }>;
}

export default async function JournalLayout({
  children,
  params,
}: JournalLayoutProps) {

  const resolvedParams = await params;

  const res = await fetch(
    `https://drl-backend-wlz1.onrender.com/api/journals/${resolvedParams.journal}`,
    { cache: "no-store" }
  );

  let journalTitle = "DRL Journal";
  let journalIssn = "XXXX-XXXX";

  if (res.ok) {
    const journal = await res.json();
    journalTitle = journal.title;
    journalIssn = journal.issn;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0A1F44] to-[#a0b8e6]">

      {/* ================= HEADER ================= */}
      <header className="bg-[#0A1F44] border-b border-[#0F2A5A]">
        <div className="max-w-6xl mx-auto px-6 py-10">

          <Link href="/journals" className="inline-block group">
            <div className="flex items-center gap-4">

              <Image
                src="/drl-logo.jpeg"
                alt="DRL Journals Logo"
                width={50}
                height={50}
                className="object-contain"
                priority
              />

              <h1 className="text-4xl font-extrabold tracking-tight text-white group-hover:text-[#F4A623] transition">
                {journalTitle}
              </h1>

            </div>
          </Link>

          {/* ISSN */}
          <div className="mt-4 flex items-center gap-4 text-sm">
            <span className="px-3 py-1 bg-[#F4A623]/20 text-[#F4A623] rounded-full border border-[#F4A623]/40">
              ISSN: {journalIssn}
            </span>
          </div>

        </div>
      </header>

      {/* ================= NAVIGATION ================= */}
      <div className="bg-white border-t-2 border-[#F4A623] border-b border-gray-200">
        <JournalNavbar journalId={resolvedParams.journal} />
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-grow py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-white rounded-2xl shadow-xl p-10">

            <JournalTransition>
              {children}
            </JournalTransition>

          </div>

        </div>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#0A1F44] text-center text-sm text-gray-300 py-8 border-t border-[#132C5B]">
        © {new Date().getFullYear()} DRL Journals. All rights reserved.
      </footer>

    </div>
  );
}