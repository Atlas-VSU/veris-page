const sections = [
  {
    title: "1. Introduction",
    body: "VERIS respects your privacy and is committed to protecting personal data in compliance with the Data Privacy Act of 2012 (Republic Act No. 10173) of the Philippines. This policy explains how we process information when you use our platform.",
  },
  {
    title: "2. Legal Basis for Processing",
    body: "Personal data is processed based on contractual necessity, legitimate interests, legal obligations, and, where applicable, the consent of the data subject. For organizational data, the Subscriber acts as the Personal Information Controller (PIC), and we act as the Personal Information Processor (PIP).",
  },
  {
    title: "3. Information We Collect",
    body: "From Subscribing Organizations: Organization name and logo, officer names and emails, official contact details, and payment information. From Students/Members: Student ID numbers, full names, course/year level, attendance timestamps, and payment verification data. Children's Data: If a user is below the age of majority, processing of personal data shall be subject to applicable laws and university policies.",
  },
  {
    title: "4. Cookies and Session Management",
    body: "The Service may use cookies and similar technologies to maintain user sessions, improve security, remember preferences, and analyze platform usage. This includes tokens utilized for authentication and secure state management.",
  },
  {
    title: "5. International Data Transfers and Third-Party Services",
    body: "Some information may be processed or stored in data centers located outside the Philippines through trusted cloud providers. Appropriate safeguards are implemented to ensure compliance with applicable data protection laws. We utilize the following third-party services: Firebase Authentication, Cloud Firestore, Firebase Storage, Google OAuth.",
  },
  {
    title: "6. Data Sharing and Disclosure",
    body: "Data is securely isolated. Authorized officers can only access their respective organization's data. We do not sell data. Information is only shared with trusted cloud infrastructure providers or if strictly mandated by law or formal university administration inquiries.",
  },
  {
    title: "7. Data Breach Notification",
    body: "In the event of a personal data breach affecting personal information, we will comply with applicable notification requirements under the Data Privacy Act of 2012 and the guidelines set by the National Privacy Commission (NPC).",
  },
  {
    title: "8. Data Retention",
    body: "Personal data is retained only for as long as necessary to fulfill the operational purposes of the Subscriber's contract. We are responsible for deleting student data from their respective dashboards once it is no longer required, or once the student graduated, filed a LOA or any reason from discontinuing in his studies.",
  },
  {
    title: "9. Rights of the Data Subject",
    body: "Under the Data Privacy Act of 2012, users have the right to be informed, access, object, dispute, and request the erasure or blocking of their data. Students seeking to exercise these rights regarding their organization records should first direct their requests to the respective Subscriber (the organization).",
  },
  {
    title: "10. Contact Information",
    body: "For data privacy concerns, policy inquiries, or technical assistance regarding data rights, please contact our designated privacy representative: Data Protection Officer (DPO), Email: veris-dev@vsu.edu.ph",
  },
];

export function PrivacyContent() {
  return (
    <article className="py-12 max-w-4xl mx-auto px-4 space-y-6 text-sm text-[#2C2C24]">
      <h1 className="text-3xl font-bold text-[#2C2C24]" style={{ fontFamily: "var(--font-fraunces, serif)" }}>
        Privacy Policy
      </h1>
      <p className="text-xs text-[#78786C]">Effective Date: Aug 2, 2026</p>

      <div className="p-6 sm:p-8 bg-[#FEFEFA] border border-[#DED8CF] rounded-[1.5rem] shadow-[0_4px_20px_-2px_rgba(93,112,82,0.15)] divide-y divide-[#DED8CF]">
        {sections.map((section) => (
          <section key={section.title} className="py-5 first:pt-0 last:pb-0 space-y-2">
            <h2 className="text-lg font-semibold text-[#5D7052]">{section.title}</h2>
            <p className="text-xs leading-relaxed text-[#2C2C24] text-justify sm:text-left">{section.body}</p>
          </section>
        ))}
      </div>

      <p className="text-xs italic leading-relaxed text-[#78786C]">
        This Privacy Policy is not final and may be revised or updated as the
        platform evolves or as required by applicable laws and regulations.
      </p>
    </article>
  );
}
