export const Home = () => {
  return (
    <main className="my-16 mx-16 space-y-8 bg-red-500">
      <div className="flex select-none flex-col items-center">
        <i className="ri-shield-check-fill ri-5x"></i>
        <h1 className="text-lg">Welcome</h1>
        <p className="text-sm">Log in to continue</p>
      </div>

      <form className="flex flex-col items-start space-y-4">
        {/* <i className="ri-eye-close-line"></i> */}
        {/* <i className="ri-eye-line"></i> */}
        <input
          className="w-full rounded-md border-[1px] border-gray-400 p-2"
          type="text"
          placeholder="Enter your email..."
        />

        <input
          className="w-full rounded-md border-[1px] border-gray-400 p-2"
          type="text"
          placeholder="Enter your password..."
        />

        <button className="text-sm font-bold text-blue-700">Forgot your password?</button>

        <button className="w-full select-none rounded-md bg-blue-700 py-2 font-bold text-white">Continue</button>

        <p className="text-sm">
          Don't have an account?&nbsp;
          <button className="font-bold text-blue-700">Sign up</button>
        </p>
      </form>

      <div className="space-y-4">
        <span className="flex items-center justify-center">
          <hr className="w-full border-[0.5px] border-gray-400" />
          <p className="mx-4 text-sm">OR</p>
          <hr className="w-full border-[0.5px] border-gray-400" />
        </span>

        <button className="flex w-full items-center justify-center rounded-md border-[0.5px] border-gray-400 py-2">
          <i className="ri-google-fill mr-4"></i>Continue with Google
        </button>
      </div>
    </main>
  );
};
