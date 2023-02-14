import Nav from "./components/Nav";
import HeroImage from "./assets/HeroImage.png";

function Home() {
  return (
    <>
      <Nav isLoggedIn={false} />
      <Hero />
    </>
  );
}

function Hero() {
  return (
    <section className="flex justify-center items-center h-screen w-full gap-10">
      <div className="flex justify-center items-start flex-col w-[550px] gap-4">
        <h2 className="text-4xl font-semibold">
          An easy to use study app powered by Artificial intelligence.
        </h2>
        <p className="text-lg">
          Study faster and more efficiently with the help of AI.
        </p>
        <a className="pt-2 pb-2 btn w-[100px] text-center font-bold">Study</a>
      </div>
      <img src={HeroImage} alt="hero image" />
    </section>
  );
}

export default Home;
