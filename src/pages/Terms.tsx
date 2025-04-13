import TermsOfService from "@/components/TermsOfService";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <TermsOfService />
      </main>
      <Footer />
    </div>
  );
};

export default TermsPage; 