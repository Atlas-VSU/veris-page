const sections = [
  {
    title: "1. Information Collection",
    body: "VERIS collects minimal necessary data for guest bug reports (email, description) and student services, including account details, campus service usage, and device information needed to operate the platform.",
  },
  {
    title: "2. Information Usage",
    body: "Collected information is used to operate, maintain, and improve VERIS platforms such as CORAL, USSC Connect, and E-Passport, respond to support requests, and personalize student services.",
  },
  {
    title: "3. Data Protection",
    body: "We maintain strict security measures, including encryption in transit and access controls, to protect submitted guest reports and system telemetry from unauthorized access, alteration, or disclosure.",
  },
  {
    title: "4. Cookie Policy",
    body: "VERIS uses essential cookies to keep you signed in and remember your preferences. We do not use third-party advertising cookies or trackers.",
  },
  {
    title: "5. Third-Party Disclosure",
    body: "We do not sell or share personal data with third parties. Limited data may be shared with university departments or service providers strictly to deliver campus services on our behalf.",
  },
  {
    title: "6. User Rights",
    body: "Users have the right to access, correct, or request deletion of their submitted data at any time by contacting our support team.",
  },
  {
    title: "7. Policy Changes",
    body: "We may update this Privacy Policy from time to time. Material changes will be posted on this page with an updated revision date.",
  },
  {
    title: "8. Contact Information",
    body: "Questions about this Privacy Policy can be directed to our support team through the Bug Report page or your campus VERIS administrator.",
  },
];

export function PrivacyContent() {
  return (
    <article className="py-12 max-w-4xl mx-auto px-4 space-y-6 text-sm text-[#2C2C24]">
      <h1 className="text-3xl font-bold text-[#2C2C24]" style={{ fontFamily: "var(--font-fraunces, serif)" }}>
        Privacy Policy
      </h1>
      <p className="text-xs text-[#78786C]">Last updated: July 2026</p>

      <div className="p-6 sm:p-8 bg-[#FEFEFA] border border-[#DED8CF] rounded-[1.5rem] shadow-[0_4px_20px_-2px_rgba(93,112,82,0.15)] divide-y divide-[#DED8CF]">
        {sections.map((section) => (
          <section key={section.title} className="py-5 first:pt-0 last:pb-0 space-y-2">
            <h2 className="text-lg font-semibold text-[#5D7052]">{section.title}</h2>
            <p className="text-xs leading-relaxed text-[#2C2C24] text-justify sm:text-left">{section.body}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
