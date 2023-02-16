import Nav from "./components/Nav";

function About() {
  return (
    <>
      <Nav isLoggedIn={false} />
      <main className="flex justify-center flex-col items-center h-screen ">
        <div className="flex justify-center items-center flex-col h-full">
          <div className="flex justify-center items-center">
            <h1 className="text-2xl font-bold">Studyswipe</h1>
          </div>

          <p className="text-lg">
            Studyswipe is a web application which helps people study with with
            the use of flash cards powered by{" "}
            <strong>Artificial Intelligence</strong>
          </p>

          <p className="text-lg">
            Studyswipe is built by one sole devoloper named Baythe Lungah
          </p>
        </div>
      </main>
    </>
  );
}

export default About;
