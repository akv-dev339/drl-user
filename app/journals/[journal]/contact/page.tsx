import PageContainer from "@/components/ui/PageContainer";

export default function ContactPage() {
  return (
    <PageContainer>
    

      {/* ================= PAGE HEADER ================= */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900">
          Contact the Editorial Office
        </h2>
        <div className="mt-3 w-20 h-1 bg-gradient-to-r from-blue-900 to-indigo-600 rounded-full" />
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-10 space-y-10 text-slate-800 leading-relaxed">

        {/* ================= GENERAL CONTACT ================= */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-slate-900">
            General Inquiries
          </h3>

          <p>
            For manuscript submissions, editorial inquiries, publication policies,
            or general questions regarding the Journal of Sciences, please contact
            the Editorial Office via email.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
            <p className="text-lg font-semibold text-blue-900">
              📩 drlindore25@gmail.com
            </p>
          </div>

          <p className="text-sm text-slate-600">
            All official communication regarding submissions, revisions, and publication
            decisions will be conducted via email.
          </p>
        </section>

        {/* ================= EDITORIAL OFFICE ================= */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-slate-900">
            Editorial Office
          </h3>

          <p>
            Journal of Sciences<br />
            DRL Journals Editorial Office
          </p>

          <p className="text-slate-700">
            The Editorial Office is responsible for managing manuscript submissions,
            coordinating peer review, handling publication queries, and ensuring
            adherence to journal policies.
          </p>
        </section>

        {/* ================= RESPONSE TIME ================= */}


        {/* ================= PROFESSIONAL NOTE ================= */}
        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <p className="text-slate-700">
            We encourage authors and researchers to carefully review the
            Submission Guidelines and Author Guidelines before contacting the
            Editorial Office to ensure a smooth communication process.
          </p>
        </section>

      </div>
    
    </PageContainer>
  );
}