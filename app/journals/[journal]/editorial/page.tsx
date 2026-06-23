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

  // const editorInChief = {
  //   name: "Dr. Sandeep Kumar Verma",
  //   affiliation: `Professor & Head of Institute,Institute of Sciences,SAGE University, Indore, India`,
  // };

  const editorInChief = {
  name: "Dr. Sandeep Kumar Verma",
  affiliation: `Professor, Head of the Institute,Institute of Sciences, SAGE University Indore,Kailod Kartal, Rau Bypass Road,Indore (M.P.), 452020, India.`,
  email: "hoi.sciences@sageuniversity.in",
  link: "https://sageuniversity.in/sciencedetail",
};
  // const members = [
  //   {
  //     name: "Dr. Swati Dubey Mishra",
  //     affiliation: "Shri Vaishnav Institute of Forensic Science,Shri Vaishnav Vidyapeeth Vishwavidyalaya,Indore, India",
  //   },
  //   {
  //     name: "Dr. Bhawana Joshi",
  //     affiliation:
  //       "School of Basic and Applied Sciences, SGT University, Gurugram, India",
  //   },
  //   {
  //     name: "Dr. Maninder Kaur",
  //     affiliation:
  //       "School of Allied and Healthcare Sciences, AP Goyal Shimla University, Shimla, India",
  //   },
  //   {
  //     name: "Dr. Viplov Kumar Biswas",
  //     affiliation:
  //       "Pathology and Laboratory Medicine, Emory University School of Medicine, Atlanta, USA.",
  //   },
  //   {
  //     name: "Dr. Buhara Yücesan",
  //     affiliation:
  //       "Bolu Abant İzzet Baysal University (BAIBU), Faculty of Agriculture and Natural Sciences, Gölköy, Bolu, Turkey",
  //   },
  //   {
  //     name: "Dr. Sudarshanee Geekiyanage",
  //     affiliation:
  //       "Faculty of Agriculture, University of Ruhuna Mapalana, Kamburupitiya, Sri Lanka.",
  //   },
  //   {
  //     name: "Prof. Yakubu Boyi Ngwai",
  //     affiliation:
  //       "Professor of Pharmaceutical Microbiology, Department of Microbiology, Nasarawa State University, Keffi, Nigeria.",
  //   },
  //   {
  //     name: "Dr. Ashutosh Tripathi",
  //     affiliation:
  //       "Faculty of Life Health and Allied Sciences, ITM Vocational University, Vadodara, India.",
  //   },
  //   {
  //     name: "Dr. Elif Cepni",
  //     affiliation:
  //       "Ebittek Biyoteknoloji Ar-Ge Tic. Ltd Şti., Istanbul Universitesi Avcılar Kampüsü, Argem Binası, Ofis No: 13-14, Avcılar, Istanbul, Turkey",
  //   },
  //    {
  //     name: "Dr. Cenap Özel	",
  //     affiliation:
  //       "Department of Mathematics, Faculty of Science, King Abdulaziz UniversityLocation: Jeddah 21589, Saudi Arabia",
  //   },
  //   {
  //     name: "Prof. Dr. Kubilay Kurtulus Bastas",
  //     affiliation:
  //       "Selcuk University, Faculty of Agriculture, Department of Plant Protection, 42031 Campus / Konya / Turkey",
  //   },
  //   {
  //     name: "Dr. Satyvir Singh",
  //     affiliation:
  //       "Institute for Applied and Computational Mathematics, RWTH Aachen University, Schinkelstr. 2, D-52062 Aachen, Germany",
  //   },
  //   {
  //     name: "Dr. Mukesh Malviya",
  //     affiliation:
  //       "Guangxi Academy of Agricultural Sciences, Address: 174 Daxue East Road, Nanning City Guangxi -530007 China.",
  //   },
  //   {
  //     name: "Dr. Shiv Om Pratap",
  //     affiliation:
  //       "Research Fellow, Division of Biotechnology, ICAR-Central Avian Research Institute, Izzatnagar Bareilly (UP), India.",
  //   },
  //   {
  //     name: "Dr. Monalisa Javral",
  //     affiliation:
  //       "Forensic Odontologist, Dental Surgeon, Boston International Clinic School",
  //   },
  //   {
  //     name: "Dr. Neha Pandey",
  //     affiliation:
  //       "Food Technology, Indian Institute of Soybean Research, Indore",
  //   },
  //   {
  //     name: "Dr. M. Vijaya Simha",
  //     affiliation:
  //       "Department of Medical Laboratory Technology, University Institute of Allied Health Sciences, Chandigarh University, Mohali, Punjab, India",
  //   },
  //   {
  //     name: "Dr. Ravindra Rawal",
  //     affiliation:
  //       "Department of Zoology, Government PG College Khargone, Kranti Surya Tantya Bheel University Khargon, India",
  //   },
  //   {
  //     name: "Dr. K. M. Kumar",
  //     affiliation:
  //       "Department of Bioinformatics, Pondicherry University (A Central University, Govt of India), Pondicherry, India.",
  //   },
  //   {
  //     name: "Dr. Pooja Sharma",
  //     affiliation:
  //       "Department of Zoology, Mata Jijabai Govt Girls College, Indore, India",
  //   },
  //   {
  //     name: "Dr. Ranjana Verma",
  //     affiliation:
  //       "Department of Zoology, Bherulal Patidar Govt PG College, MHOW, India.",
  //   },
  //   {
  //     name: "Dr. Sanjay Singh Baroniya",
  //     affiliation:
  //       "Department of Botany, Swa. Tukojirao Pawar Shaskiya Vigyan Mahavidyalaya, Dewas",
  //   },
  //   {
  //     name: "Dr. Praval Singh Chauhan",
  //     affiliation:
  //       "School of Sciences, ITM (SLS) Baroda University, Vadodara, Gujarat, India",
  //   },
  //   {
  //     name: "Dr. Ashok Kumar Khandel",
  //     affiliation:
  //       "Head & Principal Scientist, Bhoomi Biotechnology Venture for Research and Development, Bhopal (M.P.), India",
  //   },
  //   {
  //     name: "Dr. Shivangi Saxena",
  //     affiliation:
  //       "Jaypee Institute of Information Technology, Noida",
  //   },
  //   {
  //     name: "Dr. Amita Jain",
  //     affiliation:
  //       "Department of Computer Science & Engineering, Prestige Institute of Engineering Management and Research (PIEMR), Indore",
  //   },
  //   {
  //     name: "Dr. Lakshmi Pillai",
  //     affiliation:
  //       "Department of Bioinformatics, Institute of Sciences, SAGE University, Indore",
  //   },
  //   {
  //     name: "Dr. Doel Bose Pande",
  //     affiliation:
  //       "B.E (Electronics), M.Sc, Ph.D, ESHRE Certified Senior Clinical Embryologist, Indore Infertility Centre, Indore",
  //   },
  //   {
  //     name: "Dr. Rachana Bajpai",
  //     affiliation:
  //       "Embryologist, Dept. of Clinical Embryology, Mohak IVF, Sri Aurobindo University, Indore, India.",
  //   },
  //    {
  //     name: "Dr.Sunil Ghatge",
  //     affiliation:
  //       "Research Professor, Sustainable Resource Engineering Lab, College of Life Science and Biotechnology, Korea University, Seoul, South Korea",
  //   },
  //    {
  //     name: "Dr. Sunita Kataria",
  //     affiliation:
  //       "Woman Scientists,School of Biochemistry, Devi Ahilya Vishwavidyalaya,Indore, India",
  //   },
  //   {
  //     name: "Dr. Dipul Kumar Biswas ",
  //     affiliation:
  //       "Department of Biotechnology, Institute of Sciences, SAGE University Indore, India",
  //   },
  //   {
  //     name: "Prof. Nitin Puranik",
  //     affiliation:
  //       "Department of Biotechnology,Institute of Sciences,SAGE University Indore",
  //   },
  // ];

  const members = [
  {
    name: "Dr. Swati Dubey Mishra",
    affiliation:
      "Associate Professor and Head of Institute, Shri Vaishnav Institute of Forensic Science, Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore – Ujjain Road, Indore, (M.P.) 453111, India.",
    email: "swati.dubeymishra@svvv.edu.in",
    link: "https://svvv.edu.in/Teaching-staff.html",
  },
  {
    name: "Dr. Bhawana Joshi",
    affiliation:
      "Assistant Professor, Department of Forensic Science, School of Basic and Applied Sciences, SGT University, Gurgaon-Badli Road Chandu, Budhera, Gurugram, Haryana 122505.",
    email: "bhawana_fosc@sgtuniversity.org",
    link: "https://sgtuniversity.ac.in/science/professors/dr-bhawana-joshi",
  },
  {
    name: "Dr. Maninder Kaur",
    affiliation:
      "Associate Professor (Chemistry) and HoD, School of Sciences, AP Goyal Shimla University, Shimla (HP)-171013.",
    email: "kaurmaninder.87@gmail.com",
  },
  {
    name: "Dr. Viplov Kumar Biswas",
    affiliation:
      "Research Scientist, Department of Veterinary and Biomedicine, University of Minnesota, Greater Minneapolis-St. Paul Area 55108, United States.",
    email: "vbiswas@umn.edu",
  },
  {
    name: "Dr. Buhara Yücesan",
    affiliation:
      "Professor, Department of Science, Seed Science and Technology, Bolu Abant İzzet Baysal University (BAIBU), Faculty of Agriculture and Natural Sciences, Gölköy, Bolu, Turkey.",
    email: "buhara@ibu.edu.tr",
    link: "http://tbt.zdf.ibu.edu.tr/tr/page/akademik-kadro/19685",
  },
  {
    name: "Dr. Sudarshanee Geekiyanage",
    affiliation:
      "Professor, Department of Agricultural Biology, Faculty of Agriculture, University of Ruhuna Mapalana, Kamburupitiya, Sri Lanka.",
    email: "sudarshanee@agbio.ruh.ac.lk",
  },
  {
    name: "Prof. Yakubu Boyi Ngwai",
    affiliation:
      "Professor of Pharmaceutical Microbiology, Department of Microbiology, Nasarawa State University, P.M.B. 1022 Keffi, Nasarawa State, Nigeria.",
    email: "ngwaiyb@nsuk.edu.ng",
  },
  {
    name: "Dr. Ashutosh Tripathi",
    affiliation:
      "Dean, Faculty of Life Health and Allied Sciences, ITM Vocational University, Vadodara, India.",
    email: "deanflhas@itmvu.in",
    link: "https://www.itm.ac.in/faculty/",
  },
  {
    name: "Dr. Elif Cepni",
    affiliation:
      "Assistant Professor, Faculty of Science, Department Of Molecular Biology And Genetics, Istanbul Universitesi Avcılar Kampüsü, Argem Binası, Ofis No: 13-14, Avcılar, Istanbul, Turkey.",
    email: "ecepniyuzbasioglu@istanbul.edu.tr",
    link: "https://avesis.istanbul.edu.tr/ecepniyuzbasioglu",
  },
  {
    name: "Dr. Cenap Ozel",
    affiliation:
      "Professor, Department of Mathematics, Faculty of Science, King Abdulaziz University, Jeddah 21589, Saudi Arabia.",
    email: "cozel@kau.edu.sa",
  },
  {
    name: "Prof. Dr. Kubilay Kurtulus BASTAS",
    affiliation:
      "Professor, Department of Plant Protection, Faculty of Agriculture, Selcuk University, 42031 Campus, Konya, Turkey.",
    email: "kbastas@selcuk.edu.tr",
    link: "https://selcuk.edu.tr/birim/personeldetay/6427/kbastas",
  },
  {
    name: "Dr. Satyvir Singh",
    affiliation:
      "Postdoctoral Fellow, Institute for Applied and Computational Mathematics, RWTH Aachen University, Schinkelstr. 2, D-52062 Aachen, Germany.",
    email: "singh@acom.rwth-aachen.de",
    link: "https://acom.rwth-aachen.de/the-lab/team-people/name:satyvir_singh",
  },
  {
    name: "Dr. Neha Pandey",
    affiliation:
      "Scientist, Food Technology, ICAR-Indian Institute of Soybean Research, Indore, India.",
    email: "Neha.Pandey@icar.gov.in",
    link: "https://icar-nsri.res.in/ms_neha.html",
  },
  {
    name: "Dr. K. M. Kumar",
    affiliation:
      "Associate Professor, Department of Bioinformatics, Pondicherry University (A Central University, Govt of India), Pondicherry, India.",
    email: "kumarkm@bicpu.edu.in",
    link: "https://backup.pondiuni.edu.in/PU_Establishment/profile_view/?node=1579",
  },
  {
    name: "Dr. Doel Bose Pande",
    affiliation:
      "Senior Clinical Embryologist, Indore Infertility Centre, Indore.",
    email: "doelpande@gmail.com",
    link: "https://www.indoreinfertilityclinic.com/ms-doel-bose-pande/",
  },
  {
    name: "Dr. M. Vijaya Simha",
    affiliation:
      "Professor, Department of Medical Laboratory Technology, University Institute of Allied Health Sciences, Chandigarh University, Mohali, Punjab, India.",
    email: "vijaya.e19133@cumail.in",
  },
  {
    name: "Dr. Ravindra Rawal",
    affiliation:
      "Assistant Professor, Department of Zoology, Government PG College Khargone, Kranti Surya Tantya Bheel University Khargon-451001, India.",
    email: "rawalsr74@gmail.com",
    link: "https://govtpgcollegekhargone.org/zoology/",
  },
  {
    name: "Dr. Ranjana Verma",
    affiliation:
      "Assistant Professor, Department of Zoology, Bherulal Patidar Govt PG College, MHOW, India.",
    email: "ranjana_verma3@yahoo.com",
    link: "https://blpgovtpgcollegemhow.ac.in/department/zoology",
  },
  {
    name: "Dr. Sanjay Singh Baroniya",
    affiliation:
      "Assistant Professor, Department of Botany, Swa. Tukojirao Pawar Shaskiya Vigyan Mahavidyalaya, Dewas.",
    email: "sajaybaroniya@gmail.com",
  },
  {
    name: "Dr. Praval Singh Chauhan",
    affiliation:
      "Associate Professor, Department of Microbiology, School of Science, ITM (SLS) Baroda University, Vadodara, Gujarat, India.",
    email: "praval.chauhan@itmbu.ac.in",
    link: "https://itmbu.ac.in/sos-faculty-and-adjunct-professors/",
  },
  {
    name: "Dr. Ashok Kumar Khandel",
    affiliation:
      "Head & Principal Scientist, Bhoomi Biotechnology Venture for Research and Development, Bhopal (M.P.), India.",
    email: "khandel.ak@gmail.com",
    link: "https://www.bhoomibiotech.com/portfolio.php",
  },
  {
    name: "Dr. Amita Jain",
    affiliation:
      "Associate Professor, Department of Computer Science & Engineering, Prestige Institute of Engineering Management and Research (PIEMR), Indore.",
    email: "dr.amita@piemr.edu.in",
    link: "https://piemr.edu.in/faculty-list/dr-amita-jain/",
  },
  {
    name: "Dr. Lakshmi Pillai",
    affiliation:
      "Associate Professor, Department of Bioinformatics, Institute of Sciences, SAGE University Indore, Rau Bypass Road, Kalod Kartal, Indore, Madhya Pradesh 452020.",
    email: "lakshmipillai1@gmail.com",
    link: "https://sageuniversity.in/sciencedetail",
  },
  {
    name: "Dr. Rachana Bajpayee",
    affiliation:
      "Assistant Professor, Dept. of Clinical Embryology, Mohak IVF, Sri Aurobindo University, Indore, India.",
    email: "rachanatripathi1@gmail.com",
  },
  {
    name: "Dr. Sunil Ghatge",
    affiliation:
      "Research Professor, Sustainable Resource Engineering Lab, College of Life Science and Biotechnology, Korea University, Seoul, South Korea.",
    email: "ghatgesunil@gmail.com",
  },
  {
    name: "Dr. Sunita Kataria",
    affiliation:
      "Woman Scientists, School of Biochemistry, Devi Ahilya Vishwavidyalaya, Indore, India.",
    email: "sunita_kataria@yahoo.com",
    link: "https://biochem.dauniv.ac.in/researchers.php",
  },
  {
    name: "Dr. Dipul Kumar Biswas",
    affiliation:
      "Assistant Professor, Department of Biotechnology, Institute of Sciences, SAGE University Indore India, Rau Bypass Road, Kalod Kartal, Indore, Madhya Pradesh 452020.",
    email: "dipul.biswas@gmail.com",
    link: "https://sageuniversity.in/sciencedetail",
  },
  {
    name: "Dr. Mukesh Kumar Malviya",
    affiliation:
      "Associate Professor, Department of Microbiology, Institute of Sciences, SAGE University Indore India, Rau Bypass Road, Kalod Kartal, Indore, Madhya Pradesh 452020.",
    email: "malviyamm1983@gmail.com",
    link: "https://sageuniversity.in/sciencedetail",
  },
  {
    name: "Dr. Nitin Puranik",
    affiliation:
      "Assistant Professor, Department of Biotechnology, Institute of Sciences, SAGE University Indore India, Rau Bypass Road, Kalod Kartal, Indore, Madhya Pradesh 452020.",
    email: "nitin.puranik@sageuniversity.in",
    link: "https://sageuniversity.in/sciencedetail",
  },
  {
    name: "Dr. Roopesh Tiwari",
    affiliation:
      "Associate Professor, Mechanical Engineering, Institute of Engineering and Technology, SAGE University Indore India, Rau Bypass Road, Kalod Kartal, Indore, Madhya Pradesh 452020.",
    email: "roopeshyati@gmail.com",
    link: "https://sageuniversity.in/mechanicaldetail",
  },
];
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">

      {/* ================= EDITOR IN CHIEF ================= */}
      <div className="mb-12">

  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
    Editor-in-Chief
  </h2>

  <div className="mt-3 w-20 h-1 rounded-full bg-[#0A1F44]" />

  <div className="mt-6 rounded-3xl border border-blue-100 bg-gradient-to-r from-slate-50 to-blue-50 p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300">

    <div className="flex flex-col lg:flex-row lg:justify-between gap-6">

      {/* LEFT */}
      <div className="flex-1">

        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
          {editorInChief.name}
        </h3>

        <p className="mt-4 text-sm sm:text-base text-slate-700 whitespace-pre-line leading-relaxed">
          {editorInChief.affiliation}
        </p>

        {/* EMAIL */}
        <div className="mt-5 pt-4 border-t border-slate-200">

          <p className="text-xs uppercase tracking-wide font-semibold text-slate-400 mb-2">
            Email
          </p>

          <a
            href={`mailto:${editorInChief.email}`}
            className="text-sm text-blue-700 hover:text-blue-900 break-all"
          >
            {editorInChief.email}
          </a>

        </div>

      </div>

      {/* RIGHT */}
      <div className="flex flex-col gap-3 shrink-0">

        {/* Academic Page */}
        <a
          href={editorInChief.link}
          target="_blank"
          rel="noopener noreferrer"
         className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#0A1F44] text-white font-semibold hover:bg-[#14346f] shadow-sm hover:shadow-md transition-all duration-300">
          Academic / Institutional Page
        </a>

        {/* Google Scholar */}
        <a
          href="https://scholar.google.com/citations?user=PS2X9BcAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-blue-700"
          >
            <path d="M12 24a7 7 0 1 1 7-7 7.008 7.008 0 0 1-7 7zm0-12a5 5 0 1 0 5 5 5.006 5.006 0 0 0-5-5zm0-12L0 9l12 9 9-6.75V18h3V9z"/>
          </svg>

          <span className="text-sm font-semibold text-slate-700">
            Google Scholar
          </span>
        </a>

      </div>

    </div>

  </div>

</div>
      {/* ================= EDITORIAL BOARD ================= */}

<div>
  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
    Editorial Board
  </h2>

  <div className="mt-3 w-20 h-1 rounded-full bg-[#0A1F44]" />

  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 mt-8">

    {members.map((member, index) => (

      <div
        key={index}
        className="h-full group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 transition-all duration-300"
      >

        {/* TOP ACCENT */}
        <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#0A1F44] via-blue-700 to-indigo-600" />

        <div className="flex flex-col h-full">

          {/* NUMBER */}
          {/* <div className="mb-5">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 border border-blue-100">
              <span className="text-sm font-bold text-blue-900">
                {index + 1}
              </span>
            </div>

          </div> */}

          {/* NAME */}
          <h3 className="text-lg font-bold text-slate-900 leading-snug">
            {member.name}
          </h3>

          {/* AFFILIATION */}
          <p className="mt-4 text-sm text-slate-600 leading-relaxed whitespace-pre-line flex-grow">
            {member.affiliation}
          </p>

          {/* EMAIL */}
          {member.email && (
            <div className="mt-5 pt-4 border-t border-slate-100">

              <p className="text-xs uppercase tracking-wide font-semibold text-slate-400 mb-2">
                Email
              </p>

              <a
                href={`mailto:${member.email}`}
                className="text-sm text-blue-700 hover:text-blue-900 break-all"
              >
                {member.email}
              </a>

            </div>
          )}

          {/* PROFILE LINK */}
          {member.link && (
            <div className="mt-4">

              <a
                href={member.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors"
              >
                Academic / Institutional Page

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17L17 7M17 7H8M17 7V16"
                  />
                </svg>

              </a>

            </div>
          )}

        </div>

      </div>

    ))}

  </div>

</div>
    </div>
  );
}