// import Link from "next/link";

// interface ArchivePageProps {
//   params: Promise<{
//     journal: string;
//   }>;
// }

// export default async function ArchivePage({ params }: ArchivePageProps) {

//   const resolvedParams = await params;
//   const journalId = resolvedParams.journal;

//   const volumesRes = await fetch(
//     `https://drl-backend-wlz1.onrender.com/api/volumes/journal/${journalId}`,
//     { cache: "no-store" }
//   );

//   if (!volumesRes.ok) {
//     return (
//       <div className="text-center py-16">
//         <h2 className="text-2xl font-semibold text-slate-900">
//           No volumes available.
//         </h2>
//       </div>
//     );
//   }

//   const volumes = await volumesRes.json();

//   if (!volumes || volumes.length === 0) {
//     return (
//       <div className="text-center py-16">
//         <h2 className="text-2xl font-semibold text-slate-900">
//           No volumes available.
//         </h2>
//       </div>
//     );
//   }

//   const archivedVolumes = volumes.filter(
//     (v: any) => v.isCurrent === false
//   );

//   return (
//     <div className="max-w-6xl mx-auto">

//       {/* ================= PAGE HEADER ================= */}
//       <div className="mb-16">

//         <h2 className="text-4xl font-bold text-slate-900">
//           Archive
//         </h2>

//         <p className="mt-3 text-slate-500 text-lg">
//           Browse previously published volumes and issues
//         </p>

//         <div className="mt-4 w-24 h-1 bg-gradient-to-r from-[#0A1F44] to-[#F4A623] rounded-full" />

//       </div>

//       {/* ================= ARCHIVED VOLUMES ================= */}
//       {archivedVolumes.length === 0 ? (
//         <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center text-slate-600 shadow-sm">
//           No archived volumes available.
//         </div>
//       ) : (
//         <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

//           {archivedVolumes.map((volume: any) => (
//             <Link
//               key={volume.id}
//               href={`/journals/${journalId}/volume/${volume.id}`}
//               className="group relative bg-white border border-slate-200 rounded-2xl p-8 
//                          shadow-sm hover:shadow-xl transition-all duration-300"
//             >

//               {/* Year Badge */}
//               <span className="absolute top-6 right-6 text-xs font-medium 
//                                px-3 py-1 rounded-full 
//                                bg-[#F4A623]/10 text-[#0A1F44] border border-[#F4A623]/40">
//                 {volume.year}
//               </span>

//               {/* Volume Title */}
//               <h3 className="text-xl font-semibold text-slate-900 
//                              group-hover:text-[#F4A623] transition">
//                 {volume.title}
//               </h3>

//               {/* Decorative Divider */}
//               <div className="mt-6 w-12 h-[2px] bg-gradient-to-r from-[#0A1F44] to-[#F4A623]" />

//               {/* Metadata */}
//               <p className="mt-5 text-sm text-slate-500">
//                 Published in {volume.year}
//               </p>

//               {/* View Link */}
//               <div className="mt-6 flex items-center justify-between">

//                 <span className="text-sm text-[#0A1F44] font-medium group-hover:text-[#F4A623] transition">
//                   View Volume
//                 </span>

//                 <span className="text-[#0A1F44] group-hover:text-[#F4A623] transition">
//                   →
//                 </span>

//               </div>

//             </Link>
//           ))}

//         </div>
//       )}

//     </div>
//   );
// }

import Link from "next/link";

interface ArchivePageProps {
  params: Promise<{
    journal: string;
  }>;
}

export default async function ArchivePage({ params }: ArchivePageProps) {

  const resolvedParams = await params;
  const journalId = resolvedParams.journal;

  const volumesRes = await fetch(
    `https://drl-backend-wlz1.onrender.com/api/volumes/journal/${journalId}`,
    { cache: "no-store" }
  );

  if (!volumesRes.ok) {
    return (
      <div className="text-center py-12 sm:py-16">
        <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
          No volumes available.
        </h2>
      </div>
    );
  }

  const volumes = await volumesRes.json();

  if (!volumes || volumes.length === 0) {
    return (
      <div className="text-center py-12 sm:py-16">
        <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
          No volumes available.
        </h2>
      </div>
    );
  }

  const archivedVolumes = volumes.filter(
    (v: any) => v.isCurrent === false
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">

      {/* Header */}
      <div className="mb-12 sm:mb-16">

        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
          Archive
        </h2>

        <p className="mt-3 text-slate-500 text-base sm:text-lg">
          Browse previously published volumes and issues
        </p>

        <div className="mt-4 w-20 sm:w-24 h-1 bg-gradient-to-r from-[#0A1F44] to-[#F4A623] rounded-full" />

      </div>

      {/* Volumes */}
      {archivedVolumes.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 text-center text-slate-600 shadow-sm">
          No archived volumes available.
        </div>
      ) : (
        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          {archivedVolumes.map((volume: any) => (
            <Link
              key={volume.id}
              href={`/journals/${journalId}/volume/${volume.id}`}
              className="group relative bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 
                         shadow-sm hover:shadow-xl transition-all duration-300"
            >

              <span className="absolute top-5 right-5 text-xs font-medium 
                               px-3 py-1 rounded-full 
                               bg-[#F4A623]/10 text-[#0A1F44] border border-[#F4A623]/40">
                {volume.year}
              </span>

              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 
                             group-hover:text-[#F4A623] transition">
                {volume.title}
              </h3>

              <div className="mt-6 w-12 h-[2px] bg-gradient-to-r from-[#0A1F44] to-[#F4A623]" />

              <p className="mt-5 text-sm text-slate-500">
                Published in {volume.year}
              </p>

              <div className="mt-6 flex items-center justify-between">

                <span className="text-sm text-[#0A1F44] font-medium group-hover:text-[#F4A623] transition">
                  View Volume
                </span>

                <span className="text-[#0A1F44] group-hover:text-[#F4A623] transition">
                  →
                </span>

              </div>

            </Link>
          ))}

        </div>
      )}

    </div>
  );
}