export const metadata = {
  title: 'Privacy Policy | Coinstack',
  description: 'Coinstack privacy policy - how we collect, use, and protect your data.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAFAF7' }}>
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h1
          className="text-4xl font-bold tracking-tight mb-2"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif", color: '#1B4332' }}
        >
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-12">Last updated: March 18, 2026</p>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2
              className="text-xl font-semibold mb-3"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif", color: '#1B4332' }}
            >
              Information We Collect
            </h2>
            <p className="mb-3">
              When you use Coinstack, we may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Account information:</strong> Your name, email address, and profile details
                when you create an account.
              </li>
              <li>
                <strong>Financial data:</strong> Transaction data you connect through linked bank
                accounts or manually enter. We use read-only access and never initiate transactions
                on your behalf.
              </li>
              <li>
                <strong>Usage data:</strong> Information about how you interact with the app,
                including challenge completions, streaks, and feature usage.
              </li>
              <li>
                <strong>Device information:</strong> Browser type, operating system, and device
                identifiers for analytics and troubleshooting.
              </li>
            </ul>
          </section>

          <section>
            <h2
              className="text-xl font-semibold mb-3"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif", color: '#1B4332' }}
            >
              How We Use Your Information
            </h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Generate personalized daily spending challenges based on your habits.</li>
              <li>Track your progress, streaks, and savings over time.</li>
              <li>Improve and optimize the Coinstack experience.</li>
              <li>Send you relevant notifications and updates (with your consent).</li>
              <li>Comply with legal obligations and prevent fraud.</li>
            </ul>
          </section>

          <section>
            <h2
              className="text-xl font-semibold mb-3"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif", color: '#1B4332' }}
            >
              Data Security
            </h2>
            <p>
              We implement industry-standard security measures to protect your personal and
              financial information. All data is encrypted in transit using TLS and at rest using
              AES-256 encryption. We regularly audit our systems and work with trusted
              infrastructure providers to ensure your data remains secure.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-semibold mb-3"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif", color: '#1B4332' }}
            >
              Third-Party Services
            </h2>
            <p>
              Coinstack may integrate with third-party services such as bank aggregation providers
              (e.g., Plaid), payment processors (e.g., Stripe), and analytics tools. These services
              have their own privacy policies, and we encourage you to review them. We only share
              the minimum data necessary for these services to function.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-semibold mb-3"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif", color: '#1B4332' }}
            >
              Your Rights
            </h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request deletion of your account and associated data.</li>
              <li>Export your data in a portable format.</li>
              <li>Opt out of marketing communications at any time.</li>
            </ul>
          </section>

          <section>
            <h2
              className="text-xl font-semibold mb-3"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif", color: '#1B4332' }}
            >
              Contact Us
            </h2>
            <p>
              If you have questions about this privacy policy or your data, contact us at{' '}
              <a
                href="mailto:hello@coinstack.app"
                className="underline font-medium"
                style={{ color: '#1B4332' }}
              >
                hello@coinstack.app
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
