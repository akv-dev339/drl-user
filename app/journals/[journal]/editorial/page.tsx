interface PageProps {
  params: Promise<{
    journal: string;
  }>;
}

export default async function EditorialPage({ params }: PageProps) {
  const { journal } = await params;

  /* ================= JOURNAL 2 ================= */
if (journal === "2") {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">

      {/* ================= EDITOR IN CHIEF ================= */}
      <div className="mb-12">

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Editor-in-Chief
        </h2>

        <div className="mt-3 w-16 h-1 bg-[#0A1F44]" />

        <div className="mt-6 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">

          <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-relaxed">
            Dr. Lalit Kumar Dubey
          </h3>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed whitespace-pre-line">

            Ph.D. (Commerce), M.Phil., M.Com., MBA, LLB,
            Associate Professor,
            Acropolis Institute of Management Studies and Research,
            Indore

          </p>

        </div>

      </div>

      {/* ================= EDITORIAL BOARD ================= */}
      <div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Editorial Board
        </h2>

        <div className="mt-3 w-16 h-1 bg-[#0A1F44]" />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">

          {[
            {
              name: "Dr. Sonali Karnik, Ph.D.",
              affiliation:
                "Faculty of Management Studies,Assistant Professor, Marwadi University, Rajkot, Gujarat",
            },
            {
              name: "Dr. Vinod Kumar Yadav, Ph.D.",
              affiliation:
                "Assistant Professor, Department of Commerce, Rajiv Gandhi University [A Central University], Rono Hills, Doimukh-791112, Papum Pare, Arunachal Pradesh, India",
            },
            {
              name: "Dr. Jamna Mishra",
              affiliation:
                "Director, Lakshmi Narain College of Technology (LNCT), Indore (Journalism and Mass Communication)",
            },
          ].map((member, index) => (

            <div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-lg transition-all duration-300"
            >

              <div className="flex items-start gap-4">

                {/* NUMBER */}
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">

                  <span className="text-sm font-bold text-blue-900">
                    {index + 1}
                  </span>

                </div>

                {/* CONTENT */}
                <div>

                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 leading-relaxed">
                    {member.name}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {member.affiliation}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

  /* ================= DATA ================= */

  const editorInChief = {
    name: "Dr. Sandeep Kumar Verma",
    affiliation: `Professor & Head of Institute,Institute of Sciences,SAGE University, Indore, India`,
  };

  const members = [
    {
      name: "Dr. Swati Dubey Mishra",
      affiliation: "Shri Vaishnav Institute of Forensic Science,Shri Vaishnav Vidyapeeth Vishwavidyalaya,Indore, India",
    },
    {
      name: "Dr. Bhawana Joshi",
      affiliation:
        "School of Basic and Applied Sciences, SGT University, Gurugram, India",
    },
    {
      name: "Dr. Maninder Kaur",
      affiliation:
        "School of Allied and Healthcare Sciences, AP Goyal Shimla University, Shimla, India",
    },
    {
      name: "Dr. Viplov Kumar Biswas",
      affiliation:
        "Pathology and Laboratory Medicine, Emory University School of Medicine, Atlanta, USA.",
    },
    {
      name: "Dr. Buhara Yücesan",
      affiliation:
        "Bolu Abant İzzet Baysal University (BAIBU), Faculty of Agriculture and Natural Sciences, Gölköy, Bolu, Turkey",
    },
    {
      name: "Dr. Sudarshanee Geekiyanage",
      affiliation:
        "Faculty of Agriculture, University of Ruhuna Mapalana, Kamburupitiya, Sri Lanka.",
    },
    {
      name: "Prof. Yakubu Boyi Ngwai",
      affiliation:
        "Professor of Pharmaceutical Microbiology, Department of Microbiology, Nasarawa State University, Keffi, Nigeria.",
    },
    {
      name: "Dr. Ashutosh Tripathi",
      affiliation:
        "Faculty of Life Health and Allied Sciences, ITM Vocational University, Vadodara, India.",
    },
    {
      name: "Dr. Elif Cepni",
      affiliation:
        "Ebittek Biyoteknoloji Ar-Ge Tic. Ltd Şti., Istanbul Universitesi Avcılar Kampüsü, Argem Binası, Ofis No: 13-14, Avcılar, Istanbul, Turkey",
    },
     {
      name: "Dr. Cenap Özel	",
      affiliation:
        "Department of Mathematics, Faculty of Science, King Abdulaziz UniversityLocation: Jeddah 21589, Saudi Arabia",
    },
    {
      name: "Prof. Dr. Kubilay Kurtulus Bastas",
      affiliation:
        "Selcuk University, Faculty of Agriculture, Department of Plant Protection, 42031 Campus / Konya / Turkey",
    },
    {
      name: "Dr. Satyvir Singh",
      affiliation:
        "Institute for Applied and Computational Mathematics, RWTH Aachen University, Schinkelstr. 2, D-52062 Aachen, Germany",
    },
    {
      name: "Dr. Mukesh Malviya",
      affiliation:
        "Guangxi Academy of Agricultural Sciences, Address: 174 Daxue East Road, Nanning City Guangxi -530007 China.",
    },
    {
      name: "Dr. Shiv Om Pratap",
      affiliation:
        "Research Fellow, Division of Biotechnology, ICAR-Central Avian Research Institute, Izzatnagar Bareilly (UP), India.",
    },
    {
      name: "Dr. Monalisa Javral",
      affiliation:
        "Forensic Odontologist, Dental Surgeon, Boston International Clinic School",
    },
    {
      name: "Dr. Neha Pandey",
      affiliation:
        "Food Technology, Indian Institute of Soybean Research, Indore",
    },
    {
      name: "Dr. M. Vijaya Simha",
      affiliation:
        "Department of Medical Laboratory Technology, University Institute of Allied Health Sciences, Chandigarh University, Mohali, Punjab, India",
    },
    {
      name: "Dr. Ravindra Rawal",
      affiliation:
        "Department of Zoology, Government PG College Khargone, Kranti Surya Tantya Bheel University Khargon, India",
    },
    {
      name: "Dr. K. M. Kumar",
      affiliation:
        "Department of Bioinformatics, Pondicherry University (A Central University, Govt of India), Pondicherry, India.",
    },
    {
      name: "Dr. Pooja Sharma",
      affiliation:
        "Department of Zoology, Mata Jijabai Govt Girls College, Indore, India",
    },
    {
      name: "Dr. Ranjana Verma",
      affiliation:
        "Department of Zoology, Bherulal Patidar Govt PG College, MHOW, India.",
    },
    {
      name: "Dr. Sanjay Singh Baroniya",
      affiliation:
        "Department of Botany, Swa. Tukojirao Pawar Shaskiya Vigyan Mahavidyalaya, Dewas",
    },
    {
      name: "Dr. Praval Singh Chauhan",
      affiliation:
        "School of Sciences, ITM (SLS) Baroda University, Vadodara, Gujarat, India",
    },
    {
      name: "Dr. Ashok Kumar Khandel",
      affiliation:
        "Head & Principal Scientist, Bhoomi Biotechnology Venture for Research and Development, Bhopal (M.P.), India",
    },
    {
      name: "Dr. Shivangi Saxena",
      affiliation:
        "Jaypee Institute of Information Technology, Noida",
    },
    {
      name: "Dr. Amita Jain",
      affiliation:
        "Department of Computer Science & Engineering, Prestige Institute of Engineering Management and Research (PIEMR), Indore",
    },
    {
      name: "Dr. Lakshmi Pillai",
      affiliation:
        "Department of Bioinformatics, Institute of Sciences, SAGE University, Indore",
    },
    {
      name: "Dr. Doel Bose Pande",
      affiliation:
        "B.E (Electronics), M.Sc, Ph.D, ESHRE Certified Senior Clinical Embryologist, Indore Infertility Centre, Indore",
    },
    {
      name: "Dr. Rachana Bajpai",
      affiliation:
        "Embryologist, Dept. of Clinical Embryology, Mohak IVF, Sri Aurobindo University, Indore, India.",
    },
     {
      name: "Dr.Sunil Ghatge",
      affiliation:
        "Research Professor, Sustainable Resource Engineering Lab, College of Life Science and Biotechnology, Korea University, Seoul, South Korea",
    },
     {
      name: "Dr. Sunita Kataria",
      affiliation:
        "Woman Scientists,School of Biochemistry, Devi Ahilya Vishwavidyalaya,Indore, India",
    },
    {
      name: "Dr. Dipul Kumar Biswas ",
      affiliation:
        "Department of Biotechnology, Institute of Sciences, SAGE University Indore, India",
    },
    {
      name: "Prof. Nitin Puranik",
      affiliation:
        "Department of Biotechnology,Institute of Sciences,SAGE University Indore",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">

      {/* ================= EDITOR IN CHIEF ================= */}
      <div className="mb-10">

  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
    Editor-in-Chief
  </h2>

  <div className="mt-3 w-16 h-1 bg-[#0A1F44]" />

  <div className="mt-4 bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300">

    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">

      {/* LEFT */}
      <div>

        <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
          {editorInChief.name}
        </h3>

        <p className="text-sm sm:text-base text-slate-600 mt-3 whitespace-pre-line leading-relaxed">
          {editorInChief.affiliation}
        </p>

      </div>

      {/* RIGHT */}
      <a
        href="https://scholar.google.com/citations?user=PS2X9BcAAAAJ&hl=en"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-all duration-300 shrink-0 w-fit"
      >

        {/* ICON */}
         <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5 text-blue-700"
  >
    <path d="M12 24a7 7 0 1 1 7-7 7.008 7.008 0 0 1-7 7zm0-12a5 5 0 1 0 5 5 5.006 5.006 0 0 0-5-5zm0-12L0 9l12 9 9-6.75V18h3V9z"/>
  </svg>

  {/* TEXT */}
  <span className="text-sm font-medium text-slate-700">
    Google Scholar
  </span>

      </a>

    </div>

  </div>

</div>
      {/* ================= EDITORIAL BOARD ================= */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Editorial Board
        </h2>

        <div className="mt-3 w-16 h-1 bg-[#0A1F44]" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-base font-semibold text-slate-900">
                {member.name}
              </h3>

              <p className="text-sm text-slate-600 mt-2 whitespace-pre-line">
                {member.affiliation}
              </p>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}