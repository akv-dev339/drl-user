import PageContainer from "@/components/ui/PageContainer";

interface PageProps {
  params: Promise<{
    journal: string;
  }>;
}

export default async function AuthorGuidelinesPage({ params }: PageProps) {

  const { journal } = await params;
  const journalId = journal;
   if (journalId === "2") {
    return (
      <PageContainer>
      

        {/* PAGE TITLE */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900">
            Detailed Author Guidelines
          </h2>
          <p className="mt-2 text-lg text-slate-600">
            DRL Journal of Multidisciplinary Studies
          </p>
          <div className="mt-3 w-20 h-1 bg-gradient-to-r from-blue-900 to-indigo-600 rounded-full" />
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-10 space-y-12 text-slate-800">

          <h3 className="text-2xl font-semibold text-slate-900">
            PART A: DETAILED AUTHOR GUIDELINES
          </h3>

          {/* 1 General Information */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-900">
              1. General Information
            </h3>

            <p>
              The DRL Journal of Multidisciplinary Studies publishes original, high-quality research in the following areas:
            </p>

            <div className="grid md:grid-cols-2 gap-2">
              <ul className="list-disc pl-6 space-y-1">
                <li>Advertising & Public Relations</li>
                <li>Architecture</li>
                <li>Arts and Humanities</li>
                <li>Banking & Finance</li>
                <li>Commerce</li>
                <li>Corporate Law</li>
                <li>Cultural Studies</li>
                <li>Design</li>
                <li>Development Studies</li>
                <li>Digital Marketing</li>
                <li>Disaster Management</li>
                <li>Economics</li>
                <li>Education</li>
                <li>Entrepreneurship & Innovation Studies</li>
                <li>Environmental Policy & Governance</li>
                <li>Event Management</li>
                <li>Fashion Design & Textile Design</li>
                <li>Film & Media Studies</li>
                <li>Fine Arts</li>
              </ul>

              <ul className="list-disc pl-6 space-y-1">
                <li>Gender Studies</li>
                <li>Hospitality & Tourism Management</li>
                <li>Hotel Management & Catering Technology</li>
                <li>Human Resource Management</li>
                <li>Interior Design</li>
                <li>International Relations</li>
                <li>Journalism and Mass Communication</li>
                <li>Law and Legal Studies</li>
                <li>Library & Information Science</li>
                <li>Management</li>
                <li>Performing Arts (Music, Dance, Theatre)</li>
                <li>Physical Education</li>
                <li>Political Science</li>
                <li>Psychology</li>
                <li>Public Administration</li>
                <li>Rural Development</li>
                <li>Social Work (MSW)</li>
                <li>Sociology</li>
                <li>Sports Management</li>
                <li>Supply Chain & Logistics Management</li>
                <li>Urban Planning</li>
              </ul>
            </div>

            <p>
              Manuscripts from all other related interdisciplinary and emerging fields are also welcome.
            </p>

            <p>
              All submitted manuscripts must be original and must not be under consideration for publication elsewhere.
            </p>
          </section>


          {/* 2 Manuscript Categories */}
          <section className="space-y-6">
            <h3 className="text-xl font-semibold text-slate-900">
              2. Manuscript Categories
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full border border-slate-200 text-left text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="p-3 border">Type</th>
                    <th className="p-3 border">Word Limit</th>
                    <th className="p-3 border">Abstract</th>
                    <th className="p-3 border">References</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border">Original Research</td>
                    <td className="p-3 border">3000–6000</td>
                    <td className="p-3 border">250–300 words</td>
                    <td className="p-3 border">25–50</td>
                  </tr>
                  <tr>
                    <td className="p-3 border">Review Article</td>
                    <td className="p-3 border">4000–8000</td>
                    <td className="p-3 border">250–300 words</td>
                    <td className="p-3 border">50+</td>
                  </tr>
                  <tr>
                    <td className="p-3 border">Short Communication</td>
                    <td className="p-3 border">1500–2500</td>
                    <td className="p-3 border">150–200 words</td>
                    <td className="p-3 border">≤20</td>
                  </tr>
                  <tr>
                    <td className="p-3 border">Case Study</td>
                    <td className="p-3 border">2000–4000</td>
                    <td className="p-3 border">200–250 words</td>
                    <td className="p-3 border">≤30</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>


          {/* 3 Formatting */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-900">
              3. Formatting Requirements
            </h3>

            <ul className="list-disc pl-6 space-y-1">
              <li>File format: MS Word (.doc/.docx)</li>
              <li>Font: Times New Roman</li>
              <li>Font size: 12 pt</li>
              <li>Line spacing: Double-spaced</li>
              <li>Alignment: Justified</li>
              <li>Margins: 1 inch (2.54 cm) on all sides</li>
              <li>Page numbering: Bottom center</li>
              <li>Use standard international referencing norms (APA 7th Edition)</li>
              <li>Avoid unnecessary abbreviations</li>
            </ul>
          </section>
          {/* 4 Manuscript Structure */}
<section className="space-y-6">
  <h3 className="text-xl font-semibold text-slate-900">
    4. Manuscript Structure
  </h3>

  <div>
    <h4 className="font-semibold text-lg">4.1 Title Page (Separate Page)</h4>
    <ul className="list-disc pl-6 space-y-1">
      <li>Title (Bold, 16 pt, Sentence case)</li>
      <li>Full names of all authors (12 pt)</li>
      <li>Affiliations (Department, Institution, City, Country)</li>
      <li>Corresponding author (Email and Phone number)</li>
      <li>ORCID ID (if available)</li>
    </ul>
  </div>

  <div>
    <h4 className="font-semibold text-lg">4.2 Abstract (250–300 words)</h4>
    <p>For research articles, use a structured format:</p>
    <ul className="list-disc pl-6">
      <li>Background</li>
      <li>Methods</li>
      <li>Results</li>
      <li>Conclusion</li>
    </ul>
    <p>Avoid citations in the abstract.</p>
  </div>

  <div>
    <h4 className="font-semibold text-lg">4.3 Keywords</h4>
    <ul className="list-disc pl-6">
      <li>4–6 keywords</li>
      <li>Arrange in alphabetical order</li>
      <li>Avoid repeating words from the title</li>
    </ul>
  </div>

  <div>
    <h4 className="font-semibold text-lg">4.4 Main Manuscript</h4>
    <ul className="list-decimal pl-6 space-y-2">

      <li>
        <strong>Introduction</strong>
        <ul className="list-disc pl-6">
          <li>Background</li>
          <li>Literature review</li>
          <li>Research gap</li>
          <li>Objective</li>
        </ul>
      </li>

      <li>
        <strong>Materials and Methods / Methodology</strong>
        <ul className="list-disc pl-6">
          <li>Study design</li>
          <li>Sample details</li>
          <li>Tools, instruments, or data sources</li>
          <li>Statistical or analytical techniques</li>
          <li>Ethical approval (if applicable)</li>
        </ul>
      </li>

      <li>
        <strong>Results / Findings</strong>
        <ul className="list-disc pl-6">
          <li>Present findings clearly</li>
          <li>Use tables and figures appropriately</li>
          <li>Do not interpret results in this section</li>
        </ul>
      </li>

      <li>
        <strong>Discussion</strong>
        <ul className="list-disc pl-6">
          <li>Interpret findings</li>
          <li>Compare with previous studies</li>
          <li>Explain theoretical/practical significance</li>
        </ul>
        <p className="text-sm text-slate-600 mt-1">
          Note: Results and Discussion may be combined if appropriate.
        </p>
      </li>

      <li>
        <strong>Conclusion</strong>
        <ul className="list-disc pl-6">
          <li>Clear and concise summary</li>
          <li>Practical implications (if applicable)</li>
          <li>No references should be included</li>
        </ul>
      </li>

    </ul>
  </div>

  <div>
    <h4 className="font-semibold text-lg">4.5 Acknowledgement</h4>
    <p>Mention funding support, institutional assistance, or technical contributions.</p>
  </div>

  <div>
    <h4 className="font-semibold text-lg">4.6 Conflict of Interest</h4>
    <p>Include the statement:</p>
    <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg">
      “The authors declare no conflict of interest.”
    </div>
  </div>

  <div>
    <h4 className="font-semibold text-lg">4.7 Funding Statement</h4>
    <p>Provide funding agency details and grant number.</p>
    <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg">
      “This research received no external funding.”
    </div>
  </div>

  <div>
    <h4 className="font-semibold text-lg">4.8 Ethical Approval</h4>
    <p>If applicable, include:</p>
    <ul className="list-disc pl-6">
      <li>Institutional Ethics Committee approval number</li>
      <li>Informed consent statement (for human studies)</li>
      <li>Data privacy compliance statement (if applicable)</li>
    </ul>
  </div>
</section>


{/* 5 Tables and Figures */}
<section className="space-y-4">
  <h3 className="text-xl font-semibold text-slate-900">
    5. Tables and Figures
  </h3>

  <h4 className="font-semibold">Tables</h4>
  <ul className="list-disc pl-6">
    <li>Must be in editable format</li>
    <li>Number consecutively (Table 1, Table 2, etc.)</li>
    <li>Title placed above the table</li>
    <li>Footnotes placed below the table</li>
  </ul>

  <h4 className="font-semibold">Figures</h4>
  <ul className="list-disc pl-6">
    <li>High resolution (minimum 300 dpi)</li>
    <li>Accepted formats: JPEG, PNG, TIFF</li>
    <li>Caption placed below the figure</li>
    <li>Mention source if adapted</li>
  </ul>
</section>


{/* 6 Reference Style */}
<section className="space-y-4">
  <h3 className="text-xl font-semibold text-slate-900">
    6. Reference Style (APA 7th Edition)
  </h3>

  <h4 className="font-semibold">In-text Citation</h4>
  <ul className="list-disc pl-6">
    <li>Single author: (Sharma, 2023)</li>
    <li>Two authors: (Gupta & Singh, 2022)</li>
    <li>Three or more authors: (Kumar et al., 2021)</li>
  </ul>

  <h4 className="font-semibold">Reference List Format</h4>
  <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg">
    Author, A. A. (Year). Title of article. Journal Name, Volume(Issue), pages. https://doi.org/xxxxx
  </div>

  <p>References must be arranged alphabetically and include DOI wherever available.</p>
</section>

          {/* 7 Plagiarism */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-900">
              7. Plagiarism Policy
            </h3>

            <ul className="list-disc pl-6">
              <li>Similarity index must be below 10%</li>
              <li>Plagiarism screening is mandatory</li>
              <li>AI-generated content must be declared</li>
              <li>Data fabrication or falsification will lead to immediate rejection</li>
            </ul>
          </section>


          {/* 8 Peer Review */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-900">
              8. Peer Review Process
            </h3>

            <ul className="list-disc pl-6">
              <li>Double-blind peer review</li>
              <li>Review period: 2–4 weeks</li>
            </ul>

            <p>Editorial decisions may include:</p>

            <ul className="list-disc pl-6">
              <li>Accept</li>
              <li>Minor Revision</li>
              <li>Major Revision</li>
              <li>Reject</li>
            </ul>
          </section>


          {/* 9 Checklist */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-900">
              9. Submission Checklist
            </h3>

            <ul className="space-y-2">
              <li>✔ Cover letter attached</li>
              <li>✔ Title page included</li>
              <li>✔ Manuscript file formatted correctly</li>
              <li>✔ Figures uploaded separately (if applicable)</li>
              <li>✔ Ethical approval mentioned (if required)</li>
              <li>✔ Conflict of interest declared</li>
              <li>✔ Plagiarism report attached</li>
            </ul>
          </section>

        </div>
      
      </PageContainer>
    );
  }
  return (
    <PageContainer>
    

      {/* ================= PAGE TITLE ================= */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900">
          Detailed Author Guidelines
        </h2>
        <p className="mt-2 text-lg text-slate-600">
          Journal of Sciences
        </p>
        <div className="mt-3 w-20 h-1 bg-gradient-to-r from-blue-900 to-indigo-600 rounded-full" />
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-10 space-y-12 text-slate-800">

        {/* ================= PART A ================= */}
        <section>
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            PART A: DETAILED AUTHOR GUIDELINES
          </h3>
        </section>

        {/* ================= 1. GENERAL INFORMATION ================= */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-slate-900">
            1. General Information
          </h3>

          <p>
            The Journal of Sciences publishes original, high-quality research in the following areas:
          </p>

          <div className="grid md:grid-cols-2 gap-2 text-slate-700">
            <ul className="list-disc pl-6 space-y-1">
              <li>Basic & Applied Sciences</li>
              <li>Agriculture</li>
              <li>Botany & Zoology</li>
              <li>Chemistry</li>
              <li>Physics</li>
              <li>Mathematics</li>
              <li>Environmental Science</li>
              <li>Biotechnology & Bioinformatics</li>
              <li>Microbiology</li>
              <li>Nanotechnology</li>
              <li>Medical Sciences</li>
              <li>Clinical Research</li>
              <li>Reproductive Biology</li>
              <li>Clinical Embryology</li>
              <li>Engineering & Technology</li>
            </ul>

            <ul className="list-disc pl-6 space-y-1">
              <li>Forensic Science</li>
              <li>Computer Science</li>
              <li>Computational Biology</li>
              <li>Pharmaceutical Sciences</li>
              <li>Green Chemistry</li>
              <li>Industrial Applications</li>
              <li>Extraction Technology</li>
              <li>Drug Designing</li>
              <li>Life Sciences</li>
              <li>Horticulture</li>
              <li>Seed Technology</li>
              <li>Food Technology</li>
              <li>Geology</li>
              <li>Material Science</li>
              <li>Earth Sciences</li>
            </ul>
          </div>

          <p>
            Manuscripts from all other disciplines related to scientific research are also welcome.
          </p>

          <p>
            All submitted manuscripts must be original and must not be under consideration for publication elsewhere.
          </p>
        </section>

        {/* ================= 2. MANUSCRIPT CATEGORIES ================= */}
        <section className="space-y-6">
          <h3 className="text-2xl font-semibold text-slate-900">
            2. Manuscript Categories
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full border border-slate-200 text-left text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="p-3 border">Type</th>
                  <th className="p-3 border">Word Limit</th>
                  <th className="p-3 border">Abstract</th>
                  <th className="p-3 border">References</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border">Original Research</td>
                  <td className="p-3 border">3000–6000</td>
                  <td className="p-3 border">250–300 words</td>
                  <td className="p-3 border">25–50</td>
                </tr>
                <tr>
                  <td className="p-3 border">Review Article</td>
                  <td className="p-3 border">4000–8000</td>
                  <td className="p-3 border">250–300 words</td>
                  <td className="p-3 border">50+</td>
                </tr>
                <tr>
                  <td className="p-3 border">Short Communication</td>
                  <td className="p-3 border">1500–2500</td>
                  <td className="p-3 border">150–200 words</td>
                  <td className="p-3 border">≤20</td>
                </tr>
                <tr>
                  <td className="p-3 border">Case Study</td>
                  <td className="p-3 border">2000–4000</td>
                  <td className="p-3 border">200–250 words</td>
                  <td className="p-3 border">≤30</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ================= 3. FORMATTING REQUIREMENTS ================= */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold">3. Formatting Requirements</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>File format: MS Word (.doc/.docx)</li>
            <li>Font: Times New Roman</li>
            <li>Font size: 12 pt</li>
            <li>Line spacing: Double-spaced</li>
            <li>Alignment: Justified</li>
            <li>Margins: 1 inch (2.54 cm) on all sides</li>
            <li>Page numbering: Bottom center</li>
            <li>Use SI units throughout</li>
            <li>Avoid unnecessary abbreviations</li>
          </ul>
        </section>

        {/* ================= 4. MANUSCRIPT STRUCTURE ================= */}
        <section className="space-y-6">
          <h3 className="text-2xl font-semibold">4. Manuscript Structure</h3>

          <div>
            <h4 className="font-semibold text-lg">4.1 Title Page (Separate Page)</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Title (Bold, 16 pt, Sentence case)</li>
              <li>Full names of all authors (12 pt)</li>
              <li>Affiliations (Department, Institution, City, Country)</li>
              <li>Corresponding author (Email and Phone number)</li>
              <li>ORCID ID (if available)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg">4.2 Abstract (250–300 words)</h4>
            <p>For research articles, use a structured format:</p>
            <ul className="list-disc pl-6">
              <li>Background</li>
              <li>Methods</li>
              <li>Results</li>
              <li>Conclusion</li>
            </ul>
            <p>Avoid citations in the abstract.</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg">4.3 Keywords</h4>
            <ul className="list-disc pl-6">
              <li>4–6 keywords</li>
              <li>Arrange in alphabetical order</li>
              <li>Avoid repeating words from the title</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg">4.4 Main Manuscript</h4>
            <ul className="list-decimal pl-6 space-y-2">
              <li>
                <strong>Introduction</strong>
                <ul className="list-disc pl-6">
                  <li>Background</li>
                  <li>Literature review</li>
                  <li>Research gap</li>
                  <li>Objective</li>
                </ul>
              </li>
              <li>
                <strong>Materials and Methods</strong>
                <ul className="list-disc pl-6">
                  <li>Study design</li>
                  <li>Sample details</li>
                  <li>Instruments and materials</li>
                  <li>Statistical analysis</li>
                  <li>Ethical approval (if applicable)</li>
                </ul>
              </li>
              <li>
                <strong>Results</strong>
                <ul className="list-disc pl-6">
                  <li>Present findings clearly</li>
                  <li>Use tables and figures appropriately</li>
                  <li>Do not interpret results in this section</li>
                </ul>
              </li>
              <li>
                <strong>Discussion</strong>
                <ul className="list-disc pl-6">
                  <li>Interpret findings</li>
                  <li>Compare with previous studies</li>
                  <li>Explain scientific significance</li>
                </ul>
                <p className="text-sm text-slate-600 mt-1">
                  Note: Results and Discussion may be combined if appropriate.
                </p>
              </li>
              <li>
                <strong>Conclusion</strong>
                <ul className="list-disc pl-6">
                  <li>Clear and concise summary</li>
                  <li>No references should be included</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        {/* ================= REMAINING SECTIONS ================= */}
        <section className="space-y-4">
          <h4 className="font-semibold text-lg">4.5 Acknowledgement</h4>
          <p>Mention funding support, institutional assistance, or technical contributions.</p>

          <h4 className="font-semibold text-lg">4.6 Conflict of Interest</h4>
          <p>Include the statement:</p>
          <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg">
            “The authors declare no conflict of interest.”
          </div>

          <h4 className="font-semibold text-lg">4.7 Funding Statement</h4>
          <p>Provide funding agency details and grant number.</p>
          <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg">
            “This research received no external funding.”
          </div>

          <h4 className="font-semibold text-lg">4.8 Ethical Approval</h4>
          <p>If applicable, include:</p>
          <ul className="list-disc pl-6">
            <li>Institutional Ethics Committee approval number</li>
            <li>Informed consent statement (for human studies)</li>
            <li>Animal ethics approval details</li>
          </ul>
        </section>

        {/* ================= 5-9 ================= */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold">5. Tables and Figures</h3>

          <h4 className="font-semibold">Tables</h4>
          <ul className="list-disc pl-6">
            <li>Must be in editable format</li>
            <li>Number consecutively (Table 1, Table 2, etc.)</li>
            <li>Title placed above the table</li>
            <li>Footnotes placed below the table</li>
          </ul>

          <h4 className="font-semibold">Figures</h4>
          <ul className="list-disc pl-6">
            <li>High resolution (minimum 300 dpi)</li>
            <li>Accepted formats: JPEG, PNG, TIFF</li>
            <li>Caption placed below the figure</li>
            <li>Mention source if adapted</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold">6. Reference Style (APA 7th Edition)</h3>

          <h4 className="font-semibold">In-text Citation</h4>
          <ul className="list-disc pl-6">
            <li>Single author: (Sharma, 2023)</li>
            <li>Two authors: (Gupta & Singh, 2022)</li>
            <li>Three or more authors: (Kumar et al., 2021)</li>
          </ul>

          <h4 className="font-semibold">Reference List Format</h4>
          <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg">
            Author, A. A. (Year). Title of article. Journal Name, Volume(Issue), pages. https://doi.org/xxxxx
          </div>

          <p>References must be arranged alphabetically and include DOI wherever available.</p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold">7. Plagiarism Policy</h3>
          <ul className="list-disc pl-6">
            <li>Similarity index must be below 10%</li>
            <li>Plagiarism screening is mandatory</li>
            <li>AI-generated content must be declared</li>
            <li>Data fabrication or falsification will lead to immediate rejection</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold">8. Peer Review Process</h3>
          <ul className="list-disc pl-6">
            <li>Double-blind peer review</li>
            <li>Review period: 2–4 weeks</li>
          </ul>
          <p>Editorial decisions may include:</p>
          <ul className="list-disc pl-6">
            <li>Accept</li>
            <li>Minor Revision</li>
            <li>Major Revision</li>
            <li>Reject</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold">9. Submission Checklist</h3>
          <ul className="space-y-2">
            <li>✔ Cover letter attached</li>
            <li>✔ Title page included</li>
            <li>✔ Manuscript file formatted correctly</li>
            <li>✔ Figures uploaded separately</li>
            <li>✔ Ethical approval mentioned</li>
            <li>✔ Conflict of interest declared</li>
            <li>✔ Plagiarism report attached</li>
          </ul>
        </section>

      </div>
    
    </PageContainer>
  );
}