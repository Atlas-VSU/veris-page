const sections = [
  {
    title: "1. Definitions",
    body: "• Service: The VERIS platform, including its software, interfaces, and related documentation.\n• Subscriber: The university registered organization entering into a subscription agreement to use the Service.\n• Officers (Authorized Users): Individuals designated by the Subscriber to manage the organization's account and access the platform's administrative features.\n• Students (End Users/Data Subjects): Individuals whose attendance, clearance, and payment data are managed within the Service by the Subscriber.",
  },
  {
    title: "2. Acceptance of Terms",
    body: "By accessing, subscribing to, or using the Service, the Subscriber and its Officers agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the Service. We may revise these Terms from time to time. Continued use of the Service after the effective date of updated Terms constitutes acceptance of the revised Terms.",
  },
  {
    title: "3. Intellectual Property",
    body: "All software, source code, branding, logos, user interface designs, documentation, and related intellectual property remain the exclusive property of VERIS. Subscribers may not copy, modify, distribute, sublicense, resell, or create derivative works from the Service except as expressly permitted.",
  },
  {
    title: "4. Description of Service and Data Processing",
    body: "The platform provides software-as-a-service (SaaS) solutions for university organizations. By using the Service, the Subscriber authorizes the platform to process personal data solely for the purpose of providing attendance management, managing fees, fines, clearance, payment processing, reporting, security, backup, and technical support.",
  },
  {
    title: "5. Data Ownership and Roles",
    body: "The Subscriber remains the owner and controller of all student and organizational data uploaded to the Service. The platform acts solely as a service provider (Personal Information Processor) that processes such information on behalf of the Subscriber for the purpose of delivering the subscribed services.",
  },
  {
    title: "6. Subscription and Payment Terms",
    body: "• Billing Cycle: Subscription plans are billed on a per-semester basis unless otherwise specified in a separate written agreement.\n• Fees and Refunds: Subscribers agree to pay the fees associated with their chosen subscription tier. Subscription fees are generally non-refundable except where required by applicable Philippine law or expressly provided in the subscription agreement.\n• Upgrades/Downgrades: Tier upgrades can be requested at any time, subject to prorated billing. Downgrades take effect at the end of the current billing cycle.",
  },
  {
    title: "7. Acceptable Use Policy",
    body: "Subscribers and their Officers must use the platform responsibly. Organizations may not:\n• Attempt to hack, bypass security, or reverse engineer the software.\n• Scrape data or use automated systems to extract platform information.\n• Share Officer accounts among multiple individuals, unless explicitly authorized by the Service Provider.\n• Upload malicious files or harmful code.\n• Abuse the payment verification system or conduct fraudulent transactions.\n• Impersonate other users or organizations.",
  },
  {
    title: "8. Security Responsibilities",
    body: "While the platform implements enhanced security measures, Subscribers are explicitly responsible for:\n• Protecting passwords and implementing secure login practices.\n• Promptly informing us of the officers who must be removed with their access from the site.\n• Ensuring any imported data (such as member directories) is accurate and legally obtained.\n• All activities performed using their officer accounts.",
  },
  {
    title: "9. Service Suspension and Termination",
    body: "We reserve the right to suspend or terminate a Subscriber's access to the Service for reasons including, but not limited to: unpaid subscriptions, fraudulent payment activity, sharing of officer accounts without consent, platform abuse, repeated security violations, or direct disciplinary requests from university administration.",
  },
  {
    title: "10. Warranty Disclaimer",
    body: 'The Service is provided "AS IS" and "AS AVAILABLE." We disclaim all warranties, whether express or implied, regarding the platform\'s fitness for a particular purpose or uninterrupted availability.',
  },
  {
    title: "11. Limitation of Liability",
    body: "To the maximum extent permitted by Philippine law, the Service shall not be liable for indirect, incidental, consequential, or special damages arising from the use or inability to use the platform. This includes losses stemming from server downtime, internet outages, university network failures, or force majeure events.",
  },
  {
    title: "12. Governing Law and Dispute Resolution",
    body: "These Terms shall be governed by the laws of the Republic of the Philippines. Any disputes shall be settled through amicable negotiation, or if unresolved, in the competent local courts of Baybay City, Leyte.",
  },
];

export function TermsContent() {
  return (
    <article className="py-12 max-w-4xl mx-auto px-4 space-y-6 text-sm text-[#2C2C24]">
      <h1
        className="text-3xl font-bold text-[#2C2C24]"
        style={{ fontFamily: "var(--font-fraunces, serif)" }}
      >
        Terms of Service (ToS)
      </h1>
      <p className="text-xs text-[#78786C]">Effective Date: Aug 2, 2026</p>

      <div className="p-6 sm:p-8 bg-[#FEFEFA] border border-[#DED8CF] rounded-[1.5rem] shadow-[0_4px_20px_-2px_rgba(93,112,82,0.15)] divide-y divide-[#DED8CF]">
        {sections.map((section) => (
          <section
            key={section.title}
            className="py-5 first:pt-0 last:pb-0 space-y-2"
          >
            <h2 className="text-lg font-semibold text-[#5D7052]">
              {section.title}
            </h2>
            <p className="text-xs leading-relaxed text-[#2C2C24] text-justify sm:text-left whitespace-pre-line">
              {section.body}
            </p>
          </section>
        ))}
      </div>
    </article>
  );
}
