interface PageProps {
  params: Promise<{
    journal: string;
  }>;
}

export default async function EditorialPage({ params }: PageProps) {
  const { journal } = await params;

  /* ================= JOURNAL 2 → COMING SOON ================= */
  if (journal === "2") {
    return (
      <div className="max-w-4xl mx-auto text-center py-24 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
          Page Coming Soon
        </h1>

        <div className="mt-4 w-20 h-1 mx-auto bg-gradient-to-r from-[#0A1F44] to-[#F4A623] rounded-full" />

        <p className="mt-6 text-base sm:text-lg text-slate-600">
          This section is currently under development. The content will be available soon.
        </p>
      </div>
    );
  }

  /* ================= DATA ================= */

  const editorInChief = {
    name: "Dr. Sandeep Kumar Verma",
    affiliation: `Professor & Head of Institute,
SAGE University, Indore.`,
  };

  const members = [
    {
      name: "Dr. Swati Dubey Mishra",
      affiliation: "Shri Vaishnav Institute of Forensic Science, Indore",
    },
    {
      name: "Dr. Bhawana Joshi",
      affiliation:
        "School of Basic and Applied Sciences, SGT University, Gurugram",
    },
    {
      name: "Dr. Maninder Kaur",
      affiliation:
        "School of Allied and Healthcare Sciences, AP Goyal Shimla University, Shimla",
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
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">

      {/* ================= EDITOR IN CHIEF ================= */}
      <div className="mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Editor-in-Chief
        </h2>

        <div className="mt-3 w-16 h-1 bg-[#0A1F44]" />

        <div className="mt-4 bg-white border rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">
            {editorInChief.name}
          </h3>
          <p className="text-sm text-slate-600 mt-2 whitespace-pre-line">
            {editorInChief.affiliation}
          </p>
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