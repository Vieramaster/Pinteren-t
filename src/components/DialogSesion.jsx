import IcoLogo from "./Icons/IcoLogo";
import IcoXmark from "./Icons/IcoXmark";

export default function DialogSesion({ refLogin, toggleLogin }) {
  return (
    <dialog ref={refLogin} className=" w-96 rounded-2xl py-5 relative fadeIn">
      <button
        className="absolute  w-10 h-10 right-3 top-3 rounded-full grid place-content-center hover:bg-second-color "
        onClick={toggleLogin}
      >
        <IcoXmark className={"w-6 fill-third-color"} />
      </button>
      <div className="flex flex-col w-full gap-6 items-center justify-center px-5 py-5 ">
        <IcoLogo size={"2rem"} />
        <h2 className="font-semibold text-2xl text-center text-fourth-color">
          Welcome to Pinteren't
        </h2>
        <fieldset className=" w-full">
          <form action="" className="flex flex-col w-full gap-3 items-center ">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your e-mail"
              required
              className="h-10 w-full rounded-2xl pl-5  border-2 border-second-color "
            />
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              required
              className="h-10 w-full rounded-2xl pl-5  border-2 border-second-color  "
            />
            <a
              href="https://www.pinterest.co.uk/password/reset/"
              className="font-semibold text-xs"
            >
              did you forget the password?
            </a>
            <button
              type="submit"
              className="w-full h-12 bg-fifth-color rounded-2xl text-first-color font-semibold "
            >
              Login in
            </button>
            <h3 className="font-semibold text-xs">Or</h3>
            <button
              type="submit"
              className="w-full h-12 bg-blue-700 rounded-2xl text-first-color font-semibold  "
            >
              Log in with Facebook
            </button>
            <button
              type="submit"
              className="w-full h-12 border  rounded-2xl text-fourth-color font-semibold"
            >
              Log in with Google
            </button>
            <p className="text-xs text-center font tracking-wide text-third-color">
              By continuing, you agree to Pinterest's
              <span>
                <a href="" className="font-bold text-fourth-color">
                  {" "}
                  Terms of Service{" "}
                </a>
              </span>
              and acknowledge that you have read our{" "}
              <span>
                <a
                  href="https://policy.pinterest.com/es/privacy-policy"
                  className="font-bold text-fourth-color"
                >
                  {" "}
                  Privacy Policy
                </a>
              </span>{" "}
              <span>
                <a
                  href="https://policy.pinterest.com/notice-at-collection"
                  className="font-bold text-fourth-color"
                >
                  Information Collection Notice.
                </a>
              </span>
            </p>
          </form>
        </fieldset>
        <div className="w-full text-center flex flex-col gap-3">
          <h3 className="font-semibold">You do not have an account? </h3>
          <button
            type="submit"
            className="w-full h-12 bg-fifth-color rounded-2xl text-first-color font-semibold "
          >
            Sign up!
          </button>
        </div>
      </div>
    </dialog>
  );
}
