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

  /* ================= EDITOR-IN-CHIEF ================= */
  const editorInChief = {
    name: "Dr. Sandeep Kumar Verma",
    affiliation: "Professor & Head of Institute, SAGE University, Indore",
  };

  /* ================= MEMBERS ================= */
  const members = [
    { name: "Dr. Swati Dubey Mishra", affiliation: "Shri Vaishnav Institute of Forensic Science, Indore" },
    { name: "Dr. Bhawana Joshi", affiliation: "School of Basic and Applied Sciences, SGT University, Gurugram" },
    { name: "Dr. Maninder Kaur", affiliation: "School of Allied and Healthcare Sciences, AP Goyal Shimla University, Shimla" },
    { name: "Dr. Viplov Kumar Biswas", affiliation: "Emory University School of Medicine, Atlanta, USA" },
    { name: "Dr. Buhara Yücesan", affiliation: "Bolu Abant İzzet Baysal University, Turkey" },
    { name: "Dr. Sudarshanee Geekiyanage", affiliation: "University of Ruhuna, Sri Lanka" },
    { name: "Prof. Yakubu Boyi Ngwai", affiliation: "Nasarawa State University, Nigeria" },
    { name: "Dr. Ashutosh Tripathi", affiliation: "ITM Vocational University, Vadodara, India" },
    { name: "Dr. Elif Cepni", affiliation: "Istanbul University, Turkey" },
    { name: "Prof. Dr. Kubilay Kurtulus Bastas", affiliation: "Selcuk University, Turkey" },
    { name: "Dr. Satyvir Singh", affiliation: "RWTH Aachen University, Germany" },
    { name: "Dr. Mukesh Malviya", affiliation: "Guangxi Academy of Agricultural Sciences, China" },
    { name: "Dr. Shiv Om Pratap", affiliation: "ICAR-Central Avian Research Institute, India" },
    { name: "Dr. Monalisa Javral", affiliation: "Forensic Odontologist, Boston International Clinic School" },
    { name: "Dr. Neha Pandey", affiliation: "Indian Institute of Soybean Research, Indore" },
    { name: "Dr. M. Vijaya Simha", affiliation: "Chandigarh University, Punjab, India" },
    { name: "Dr. Ravindra Rawal", affiliation: "Govt PG College Khargone, India" },
    { name: "Dr. K. M. Kumar", affiliation: "Pondicherry University, India" },
    { name: "Dr. Pooja Sharma", affiliation: "Mata Jijabai Govt Girls College, Indore" },
    { name: "Dr. Ranjana Verma", affiliation: "Govt PG College, Mhow" },
    { name: "Dr. Sanjay Singh Baroniya", affiliation: "Govt Science College, Dewas" },
    { name: "Dr. Praval Singh Chauhan", affiliation: "ITM Baroda University, Gujarat" },
    { name: "Dr. Ashok Kumar Khandel", affiliation: "Bhoomi Biotechnology, Bhopal" },
    { name: "Dr. Shivangi Saxena", affiliation: "Jaypee Institute of Information Technology, Noida" },
    { name: "Dr. Amita Jain", affiliation: "PIEMR, Indore" },
    { name: "Dr. Lakshmi Pillai", affiliation: "SAGE University, Indore" },
    { name: "Dr. Doel Bose Pande", affiliation: "Indore Infertility Centre" },
    { name: "Dr. Rachana Bajpai", affiliation: "Sri Aurobindo University, Indore" },
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
          DRL Journal of Sciences is supported by a distinguished panel of researchers,
          academicians, and experts from across the globe.
        </p>
      </div>

      {/* EDITOR-IN-CHIEF */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-[#0A1F44] to-[#1e3a8a] text-white rounded-2xl p-6 sm:p-8 shadow-lg">

          <span className="text-sm uppercase tracking-wide text-[#F4A623] font-semibold">
            Editor-in-Chief
          </span>

          <h2 className="text-2xl sm:text-3xl font-bold mt-2">
            {editorInChief.name}
          </h2>

          <p className="mt-2 text-sm sm:text-base text-gray-200">
            {editorInChief.affiliation}
          </p>

        </div>
      </div>

      {/* MEMBERS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {members.map((member, index) => (
          <div
            key={index}
            className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition"
          >

            <span className="text-xs font-semibold text-[#F4A623]">
              #{index + 1}
            </span>

            <h3 className="text-lg font-semibold text-slate-900 mt-2">
              {member.name}
            </h3>

            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              {member.affiliation}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}