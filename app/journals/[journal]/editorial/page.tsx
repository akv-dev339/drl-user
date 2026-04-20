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

        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 rounded-full bg-[#F4A623]/10 flex items-center justify-center">
            <span className="text-2xl text-[#0A1F44]">⏳</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
          Page Coming Soon
        </h1>

        <div className="mt-4 w-20 h-1 mx-auto bg-gradient-to-r from-[#0A1F44] to-[#F4A623] rounded-full" />

        <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
          This section is currently under development.  
          The content will be available soon.
        </p>

        <p className="mt-3 text-sm text-slate-400">
          Please check back later for updates.
        </p>

      </div>
    );
  }

  /* ================= JOURNAL 1 → EDITORIAL BOARD ================= */

  const members = [
    {
      name: "Dr. Swati Dubey Mishra",
      affiliation: "Shri Vaishnav Institute of Forensic Science, Indore",
    },
    {
      name: "Dr. Bhawana Joshi",
      affiliation: "School of Basic and Applied Sciences, SGT University, Gurugram",
    },
    {
      name: "Dr. Maninder Kaur",
      affiliation: "School of Allied and Healthcare Sciences, AP Goyal Shimla University, Shimla",
    },
    {
      name: "Dr. Viplov Kumar Biswas",
      affiliation: "Pathology and Laboratory Medicine, Emory University School of Medicine, Atlanta, USA",
    },
    {
      name: "Dr. Buhara Yücesan",
      affiliation: "Bolu Abant İzzet Baysal University, Faculty of Agriculture and Natural Sciences, Turkey",
    },
    {
      name: "Dr. Sudarshanee Geekiyanage",
      affiliation: "Faculty of Agriculture, University of Ruhuna, Sri Lanka",
    },
    {
      name: "Prof. Yakubu Boyi Ngwai",
      affiliation: "Professor of Pharmaceutical Microbiology, Nasarawa State University, Nigeria",
    },
    {
      name: "Dr. Ashutosh Tripathi",
      affiliation: "Faculty of Life Health and Allied Sciences, ITM Vocational University, Vadodara, India",
    },
    {
      name: "Dr. Elif Cepni",
      affiliation: "Ebittek Biotechnology R&D, Istanbul University, Turkey",
    },
    {
      name: "Prof. Dr. Kubilay Kurtulus Bastas",
      affiliation: "Selcuk University, Faculty of Agriculture, Turkey",
    },
    {
      name: "Dr. Satyvir Singh",
      affiliation: "RWTH Aachen University, Germany",
    },
    {
      name: "Dr. Mukesh Malviya",
      affiliation: "Guangxi Academy of Agricultural Sciences, China",
    },
    {
      name: "Dr. Shiv Om Pratap",
      affiliation: "ICAR-Central Avian Research Institute, Bareilly, India",
    },
    {
  name: "Dr. Monalisa Javral",
  affiliation: "Forensic Odontologist, Dental Surgeon, Boston International Clinic School",
},
{
  name: "Dr. Neha Pandey",
  affiliation: "Food Technology, Indian Institute of Soybean Research, Indore",
},
{
  name: "Dr. M. Vijaya Simha",
  affiliation: "Department of Medical Laboratory Technology, University Institute of Allied Health Sciences, Chandigarh University, Mohali, Punjab, India",
},
{
  name: "Dr. Ravindra Rawal",
  affiliation: "Department of Zoology, Government PG College Khargone, Kranti Surya Tantya Bheel University, Khargone, India",
},
{
  name: "Dr. K. M. Kumar",
  affiliation: "Department of Bioinformatics, Pondicherry University (A Central University, Govt of India), Pondicherry, India",
},
{
  name: "Dr. Pooja Sharma",
  affiliation: "Department of Zoology, Mata Jijabai Govt Girls College, Indore, India",
},
{
  name: "Dr. Ranjana Verma",
  affiliation: "Department of Zoology, Bherulal Patidar Govt PG College, Mhow, India",
},
{
  name: "Dr. Sanjay Singh Baroniya",
  affiliation: "Department of Botany, Swa. Tukojirao Pawar Shaskiya Vigyan Mahavidyalaya, Dewas",
},
{
  name: "Dr. Praval Singh Chauhan",
  affiliation: "School of Sciences, ITM (SLS) Baroda University, Vadodara, Gujarat, India",
},
{
  name: "Dr. Ashok Kumar Khandel",
  affiliation: "Head & Principal Scientist, Bhoomi Biotechnology Venture for Research and Development, Bhopal (M.P.), India",
},
{
  name: "Dr. Shivangi Saxena",
  affiliation: "Jaypee Institute of Information Technology, Noida, India",
},
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">

      {/* HEADER */}
      <div className="mb-12 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
          Editorial Board
        </h1>

        <div className="mt-3 w-20 h-1 bg-gradient-to-r from-[#0A1F44] to-[#F4A623] rounded-full mx-auto sm:mx-0" />

        <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-2xl">
          DRL Journal of Sciences is supported by a distinguished panel of researchers,academicians, and industry experts from across the globe.
        </p>
      </div>

      {/* MEMBERS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {members.map((member, index) => (
          <div
            key={index}
            className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition duration-300"
          >

            {/* Number */}
            <span className="text-xs font-semibold text-[#F4A623]">
              #{index + 1}
            </span>

            {/* Name */}
            <h3 className="text-lg font-semibold text-slate-900 mt-2">
              {member.name}
            </h3>

            {/* Affiliation */}
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              {member.affiliation}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}