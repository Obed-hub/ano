import FAQ from "@/components/FAQ";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FAQPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage; 