import PrivacyPolicy from "@/components/PrivacyPolicy";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <PrivacyPolicy />
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPage; 