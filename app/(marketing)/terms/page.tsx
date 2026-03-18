export const metadata = {
  title: 'Terms of Service | Coinstack',
  description: 'Coinstack terms of service - the rules and guidelines for using our platform.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAFAF7' }}>
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h1
          className="text-4xl font-bold tracking-tight mb-2"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif", color: '#1B4332' }}
        >
          Terms of Service
        </h1>
        <p className="text-sm text-gray-500 mb-12">Last updated: March 18, 2026</p>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2
              className="text-xl font-semibold mb-3"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif", color: '#1B4332' }}
            >
              Acceptance of Terms
            </h2>
            <p>
              By accessing or using Coinstack, you agree to be bound by these Terms of Service. If
              you do not agree to these terms, you may not use our service. We may update these
              terms from time to time, and continued use of Coinstack constitutes acceptance of any
              changes.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-semibold mb-3"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif", color: '#1B4332' }}
            >
              Description of Service
            </h2>
            <p>
              Coinstack is a personal finance application that analyzes your spending patterns and
              generates daily challenges to help you build better money habits. The service includes
              spending tracking, personalized challenges, streak tracking, and savings insights.
              Coinstack is not a financial advisor and does not provide investment advice.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-semibold mb-3"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif", color: '#1B4332' }}
            >
              User Accounts
            </h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials
              and for all activity that occurs under your account. You must provide accurate and
              complete information when creating an account. You agree to notify us immediately of
              any unauthorized use of your account.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-semibold mb-3"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif", color: '#1B4332' }}
            >
              Subscriptions and Payments
            </h2>
            <p>
              Coinstack offers both free and paid subscription tiers. Paid subscriptions are billed
              on a recurring basis (monthly or annually) and will auto-renew unless cancelled before
              the renewal date. You may cancel your subscription at any time through your account
              settings. Refunds are handled in accordance with applicable law and our refund policy.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-semibold mb-3"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif", color: '#1B4332' }}
            >
              Intellectual Property
            </h2>
            <p>
              All content, features, and functionality of Coinstack -- including text, graphics,
              logos, and software -- are owned by Coinstack and protected by intellectual property
              laws. You may not copy, modify, distribute, or create derivative works from any part
              of our service without prior written consent.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-semibold mb-3"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif", color: '#1B4332' }}
            >
              Limitation of Liability
            </h2>
            <p>
              Coinstack is provided &quot;as is&quot; without warranties of any kind. To the fullest
              extent permitted by law, Coinstack shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages arising from your use of the service. Our
              total liability shall not exceed the amount you paid us in the twelve months preceding
              the claim.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-semibold mb-3"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif", color: '#1B4332' }}
            >
              Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate your account at our discretion if you
              violate these terms or engage in conduct that we determine is harmful to other users
              or the service. Upon termination, your right to use the service ceases immediately.
              You may request export of your data prior to account deletion.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-semibold mb-3"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif", color: '#1B4332' }}
            >
              Contact
            </h2>
            <p>
              For questions about these terms, contact us at{' '}
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
