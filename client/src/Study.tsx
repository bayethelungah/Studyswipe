import Nav from "./components/Nav";

function Study() {
  const loggedIn = false;

  return (
    <main className="h-screen">
      <Nav isLoggedIn={loggedIn} />
      {loggedIn ? <UserDashboard /> : <GuestDashboard />}
    </main>
  );
}

function UserDashboard() {
  return <div className="flex justify-center items-center"></div>;
}

function GuestDashboard() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-lg font-bold">
          Log in to save and view other users collections
        </h2>
        <div className="flex justify-center items-center gap-2">
          <a className="btn p-2" href="/signin">
            Sign in
          </a>
          <a className="btn p-2" href="/sign up">
            Sign Up
          </a>
        </div>
      </div>
      <Spacer height={200} classArgs="m-10" />
      <div className="flex justify-center items-center">
        <h2 className="text-lg font-bold">
          Create A Collection Collection as Guest
        </h2>
      </div>
    </div>
  );
}

type SpacerArgs = {
  height: number;
  classArgs: string;
};

function Spacer({ height, classArgs }: SpacerArgs) {
  return (
    <div
      style={{ width: "2px", height, background: "black" }}
      className={classArgs}
    ></div>
  );
}

export default Study;
