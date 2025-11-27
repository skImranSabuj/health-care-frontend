import Banner from "@/src/components/UI/HomePage/Banner/Banner";
import HowItWorks from "@/src/components/UI/HomePage/HowItWorks/HowItWorks";
import Specialities from "@/src/components/UI/HomePage/Specialities/Specialities";
import TopDoctors from "@/src/components/UI/HomePage/TopDoctors/TopDoctors";
import WhyUs from "@/src/components/UI/HomePage/WhyUs/WhyUs";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Specialities />
      <TopDoctors />
      <WhyUs />
      <HowItWorks />
    </>
  );
};

export default HomePage;
