import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Login</h3>
          <div className="space-y-2 mt-4">
            <label className="mb-3 mt-3">Email</label>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 px-2 outline-none rounded-md mt-2 mb-2"
            />
            <br />
          </div>
          <div className="space-y-2 mt-4">
            <label className="mb-3 mt-3">Password</label>
            <br />
            <input
              type="password"
              placeholder="Enter your Password"
              className="w-80 px-2 outline-none rounded-md mt-2 mb-2"
            />
          </div>
          <div className="flex justify-around mt-6">
            <button className="bg-blue-600 px-3 py-1 text-white rounded-md mr-8">
              Login
            </button>
            <p className="text-sm font-normal">
              Not register{" "}
              <Link to="/signup" className="text-blue-500 ">
                SignUp
              </Link>
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
