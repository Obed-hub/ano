import { motion } from "framer-motion";

const TermsOfService = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using StartupWifi ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
              <p className="text-muted-foreground">
                StartupWifi provides landing page creation and customer acquisition services for startups. The Service includes various features and tools designed to help businesses connect with their target audience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. User Obligations</h2>
              <p className="text-muted-foreground">
                As a user of the Service, you agree to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
                <li>Provide accurate and complete information when registering</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use the Service in compliance with all applicable laws</li>
                <li>Not engage in any activity that interferes with or disrupts the Service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Subscription and Payments</h2>
              <p className="text-muted-foreground">
                The Service is offered on a subscription basis. You agree to pay all fees associated with your subscription plan. Fees are non-refundable except as required by law or as explicitly stated in our refund policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
              <p className="text-muted-foreground">
                All content and materials available on the Service, including but not limited to text, graphics, logos, and software, are the property of StartupWifi and are protected by applicable intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                StartupWifi shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the Service. Your continued use of the Service after such changes constitutes your acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
              <p className="text-muted-foreground">
                For any questions regarding these Terms of Service, please contact us at support@startupwifi.com
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TermsOfService; 