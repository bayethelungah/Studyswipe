type NavProps = {
  isLoggedIn: boolean;
};

function Nav({ isLoggedIn }: NavProps) {
  return (
    <nav className="flex justify-around h-10 mt-2 items-center gap-4 fixed w-screen">
      <div className="logo font-bold text-3xl">
        <a href="/">StudySwipe</a>
      </div>
      <ul
        className="flex content-center items-center gap-5 font-bold
       text-lg"
      >
        <li>
          <a href="/About" className="">
            About
          </a>
        </li>
        <li>
          <a href="/Study" className="">
            Study
          </a>
        </li>
        <AuthDisplay isLoggedIn />
      </ul>
    </nav>
  );
}

type AuthDisplayProps = {
  isLoggedIn: boolean;
};

function AuthDisplay({ isLoggedIn }: AuthDisplayProps) {
  return (
    <>
      {isLoggedIn ? (
        <>
          <li>
            <a href="" className="btn p-2">
              Login
            </a>
          </li>
          <li>
            <a href="" className="btn-outline p-2">
              Sign Up
            </a>
          </li>
        </>
      ) : (
        <>
          <li>
            <a href="" className="btn p-2">
              username
            </a>
          </li>
          <li>
            <a href="" className="btn-outline">
              Sign out
            </a>
          </li>
        </>
      )}
    </>
  );
}

export default Nav;
