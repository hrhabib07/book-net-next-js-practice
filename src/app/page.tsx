import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Navbar></Navbar>
      <h1 className="text-4xl">Welcome To Book Net Home Page</h1>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
