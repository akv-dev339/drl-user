interface SubmissionPageProps {
  params: Promise<{
    journal: string;
  }>;
}

export default async function SubmissionPage({ params }: SubmissionPageProps) {

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
    <div className="max-w-4xl">

      {/* ================= JOURNAL OF SCIENCES ================= */}
      {journal.id === 1 && (
        <>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              DRL Journal of Sciences – Manuscript Submission Guidelines
            </h2>
            <div className="mt-3 w-20 h-1 bg-gradient-to-r from-blue-900 to-indigo-600 rounded-full" />
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-10 space-y-10">
            

            {/* INTRO */}
            <section className="space-y-4">
              <p className="text-slate-700 leading-relaxed">
                The DRL Journal of Sciences currently accepts manuscripts via e-mail submission only. 
                Authors must send all required documents to the Editorial Office at:
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
                <p className="text-lg font-semibold text-blue-900">
                  📩 drlindore25@gmail.com
                </p>
              </div>

              <p className="text-slate-700">
                Authors are requested to carefully follow the instructions below to ensure smooth processing of their submission.
              </p>
            </section>

            {/* I */}
            <section className="space-y-4">
              <h3 className="text-2xl font-semibold text-slate-900">
                I. Before Submission
              </h3>

              <p className="text-slate-700">
                Please ensure the following information is available for all authors:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>First Name and Last Name</li>
                <li>Full Institutional Affiliation with Postal Address</li>
                <li>E-mail Address (Corresponding Author only)</li>
                <li>Telephone Number (Corresponding Author only)</li>
              </ul>
            </section>

            {/* II */}
            <section className="space-y-6">
              <h3 className="text-2xl font-semibold text-slate-900">
                II. Submission Requirements
              </h3>

              <p className="text-slate-700">
                Authors must submit four (4) separate files as independent attachments via email:
              </p>

              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-slate-900">
                  1. Cover Letter
                </h4>

                <p className="text-slate-700">
                  The cover letter must include:
                </p>

                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>A brief overview of the submitted manuscript.</li>
                  <li>
                    A statement confirming that:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>The manuscript has not been published previously and is not under consideration elsewhere.</li>
                      <li>All authors approve the submission.</li>
                      <li>There are no conflicts of interest related to the work.</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-slate-900">
                  2. Manuscript File
                </h4>

                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>The manuscript should contain text only.</li>
                  <li>Do not include tables, figures, or images in this file.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-slate-900">
                  3. Tables, Figures, and Images File
                </h4>

                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>Submit all tables, figures, and images in a separate file.</li>
                  <li>Include table titles and figure legends within this file.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-slate-900">
                  4. Suggested Reviewers
                </h4>

                <p className="text-slate-700">
                  Authors must provide details of at least three (3) suggested reviewers, including:
                </p>

                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>Full Name</li>
                  <li>Institutional Affiliation</li>
                  <li>Email Address</li>
                </ul>

                <p className="text-sm text-slate-600">
                  Suggested reviewers should not be colleagues or collaborators of the authors.
                </p>
              </div>
            </section>

            {/* III */}
            <section className="space-y-4">
              <h3 className="text-2xl font-semibold text-slate-900">
                III. After Submission
              </h3>

              <p className="text-slate-700">
                An acknowledgment email confirming receipt of the manuscript will be sent to the corresponding author within 2–5 working days.
              </p>
            </section>

            {/* IV */}
            <section className="space-y-4">
              <h3 className="text-2xl font-semibold text-slate-900">
                IV. Peer-Review Process
              </h3>

              <p className="text-slate-700">
                The review process typically takes 60–90 days after submission is complete. Due to a high volume of submissions, delays may occasionally occur.
              </p>

              <p className="text-slate-700">
                Manuscripts are evaluated based on:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Originality and novelty</li>
                <li>Relevance to Sciences</li>
                <li>Clear background, hypothesis, and objectives</li>
                <li>Appropriately described methodology</li>
                <li>Concise and sufficient results</li>
                <li>Accurate interpretation in discussion</li>
                <li>Proper language, correct references, and high-quality figures</li>
              </ul>
            </section>

            {/* V */}
            <section className="space-y-4">
              <h3 className="text-2xl font-semibold text-slate-900">
                V. Revision Process
              </h3>

              <p className="text-slate-700">
                Authors are expected to submit revised manuscripts within 60 days of receiving reviewers’ comments. Extensions may be granted upon written request.
              </p>
            </section>

            {/* VI */}
            <section className="space-y-4">
              <h3 className="text-2xl font-semibold text-slate-900">
                VI. Final Decision
              </h3>

              <p className="text-slate-700">
                A final decision will be communicated within 30–60 days after receiving all revised documents.
              </p>
            </section>

            {/* VII */}
            <section className="space-y-4">
              <h3 className="text-2xl font-semibold text-slate-900">
                VII. Copyright Transfer
              </h3>

              <p className="text-slate-700">
                Upon acceptance, authors must complete and sign a Copyright Transfer Agreement. This transfers copyright to the Journal of Biotech Research, which maintains open electronic access and ensures wide dissemination of published work.
              </p>
            </section>

            {/* VIII */}
            <section className="space-y-4">
              <h3 className="text-2xl font-semibold text-slate-900">
                VIII. Article Publication Charge (APC)
              </h3>

              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>There is no fee for manuscript submission.</li>
                <li>A one-time Article Publication Charge (APC) of USD 250 applies only to accepted manuscripts.</li>
                <li>The APC supports open access publication and website maintenance.</li>
                <li>Full payment of the APC is required prior to publication.</li>
                <li>The corresponding author will receive payment instructions after acceptance.</li>
              </ul>

              <p className="text-slate-700">
                Authors facing special circumstances may contact the DRL Journals Office in writing to discuss possible arrangements.
              </p>
            </section>

          </div>
        </>
      )}

      {/* ================= JOURNAL OF MULTIDISCIPLINARY STUDIES ================= */}
      {journal.id === 2 && (
        <>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              DRL Journal of Multidisciplinary Studies – Manuscript Submission Guidelines
            </h2>
            <div className="mt-3 w-20 h-1 bg-gradient-to-r from-blue-900 to-indigo-600 rounded-full" />
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-10 space-y-8 text-slate-700">

            <p>The DRL Journal of Multidisciplinary Studies currently accepts manuscripts via e-mail submission only. Authors must send all required documents to the Editorial Office at:</p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
              <p className="text-lg font-semibold text-blue-900">📩 drlindore25@gmail.com</p>
            </div>

            <p>Authors are requested to carefully follow the instructions below to ensure smooth processing of their submission.</p>

            <h3 className="text-2xl font-semibold">I. Before Submission</h3>
            <p>Please ensure the following information is available for all authors:</p>

            <ul className="list-disc pl-6">
              <li>First Name and Last Name</li>
              <li>Full Institutional Affiliation with Postal Address</li>
              <li>E-mail Address (Corresponding Author only)</li>
              <li>Telephone Number (Corresponding Author only)</li>
            </ul>

            <h3 className="text-2xl font-semibold">II. Submission Requirements</h3>
            <p>Authors must submit four (4) separate files as independent attachments via email:</p>

            <h4 className="text-xl font-semibold">1. Cover Letter</h4>
            <p>The cover letter must include:</p>

            <ul className="list-disc pl-6">
              <li>A brief overview of the submitted manuscript.</li>
              <li>The manuscript has not been published previously and is not under consideration elsewhere.</li>
              <li>All authors approve the submission.</li>
              <li>There are no conflicts of interest related to the work.</li>
            </ul>

            <h4 className="text-xl font-semibold">2. Manuscript File</h4>
            <ul className="list-disc pl-6">
              <li>The manuscript should contain text only.</li>
              <li>Do not include tables, figures, or images in this file.</li>
            </ul>

            <h4 className="text-xl font-semibold">3. Tables, Figures, and Images File</h4>
            <ul className="list-disc pl-6">
              <li>Submit all tables, figures, and images in a separate file.</li>
              <li>Include table titles and figure legends within this file.</li>
            </ul>

            <h4 className="text-xl font-semibold">4. Suggested Reviewers</h4>
            <p>Authors must provide details of at least three (3) suggested reviewers, including:</p>

            <ul className="list-disc pl-6">
              <li>Full Name</li>
              <li>Institutional Affiliation</li>
              <li>Email Address</li>
            </ul>

            <p>Suggested reviewers should not be colleagues, collaborators, or from the same institution as the authors.</p>

            <h3 className="text-2xl font-semibold">III. After Submission</h3>
            <p>An acknowledgment email confirming receipt of the manuscript will be sent to the corresponding author within 2–5 working days.</p>

            <h3 className="text-2xl font-semibold">IV. Peer-Review Process</h3>
            <p>The review process typically takes 60–90 days after submission is complete. Due to a high volume of submissions, delays may occasionally occur.</p>

            <p>Manuscripts are evaluated based on:</p>

            <ul className="list-disc pl-6">
              <li>Originality and novelty</li>
              <li>Relevance to multidisciplinary research and sciences</li>
              <li>Clear background, hypothesis, and objectives</li>
              <li>Appropriately described methodology</li>
              <li>Concise and sufficient results</li>
              <li>Accurate interpretation in discussion</li>
              <li>Proper language, correct references, and high-quality figures</li>
            </ul>

            <h3 className="text-2xl font-semibold">V. Revision Process</h3>
            <p>Authors are expected to submit revised manuscripts within 60 days of receiving reviewers’ comments. Extensions may be granted upon written request.</p>

            <h3 className="text-2xl font-semibold">VI. Final Decision</h3>
            <p>A final decision will be communicated within 30–60 days after receiving all revised documents.</p>

            <h3 className="text-2xl font-semibold">VII. Copyright Transfer</h3>
            <p>
              Upon acceptance, authors must complete and sign a Copyright Transfer Agreement. This transfers copyright to the DRL Journal of Multidisciplinary Studies, which maintains open electronic access and ensures wide dissemination of published work.
            </p>

            <h3 className="text-2xl font-semibold">VIII. Article Publication Charge (APC)</h3>

            <ul className="list-disc pl-6">
              <li>There is no fee for manuscript submission.</li>
              <li>A one-time Article Publication Charge (APC) of USD 250 applies only to accepted manuscripts.</li>
              <li>The APC supports open access publication and website maintenance.</li>
              <li>Full payment of the APC is required prior to publication.</li>
              <li>The corresponding author will receive payment instructions after acceptance.</li>
            </ul>

            <p>
              Authors facing special circumstances may contact the DRL Journals Office in writing to discuss possible arrangements.
            </p>

          </div>
        </>
      )}

    </div>
  );
}