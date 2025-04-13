import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground">
                At StartupWifi, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground mb-2">We collect several types of information from and about users of our Service, including:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Business information (company name, industry, size)</li>
                <li>Usage data (how you interact with our Service)</li>
                <li>Technical data (IP address, browser type, device information)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-2">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide and maintain our Service</li>
                <li>Process your payments and manage your subscription</li>
                <li>Send you important updates and notifications</li>
                <li>Improve and personalize your experience</li>
                <li>Analyze usage patterns and optimize our Service</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-muted-foreground">
                We do not sell or rent your personal information to third parties. We may share your information with:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
                <li>Service providers who assist in operating our Service</li>
                <li>Law enforcement when required by law</li>
                <li>Third parties in connection with a business transfer</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground mb-2">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Request data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Cookies and Tracking</h2>
              <p className="text-muted-foreground">
                We use cookies and similar tracking technologies to track activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at privacy@startupwifi.com
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy; 