export const NAVBAR = () => {
  return (
    <section>
      <div className="navbar container w-full px-4 md:pl-28">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="text-xl flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Hydra
          </a>
        </div>

        <div className="navbar-center lg:flex relative">
          <ul className="menu menu-horizontal px-1 z-10 flex items-center">
            <li className="relative">
              <details className="relative">
                <summary className="text-white cursor-pointer hover:text-purple-500 transition-colors duration-200">
                  Pages
                </summary>
                <ul className="md:w-96 bg-black border border-gray-400 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 z-20">
                  <li className="transition-transform transform hover:scale-105 hover:bg-purple-600 hover:rounded-lg p-2">
                    <a className="text-white hover:text-white transition-colors duration-200">Home V1</a>
                  </li>
                  <li className="transition-transform transform hover:scale-105 hover:bg-purple-600 hover:rounded-lg p-2">
                    <a className="text-white hover:text-white transition-colors duration-200">Home v2</a>
                  </li>
                  <li className="transition-transform transform hover:scale-105 hover:bg-purple-600 hover:rounded-lg p-2">
                    <a className="text-white hover:text-white transition-colors duration-200">About v1</a>
                  </li>
                  <li className="transition-transform transform hover:scale-105 hover:bg-purple-600 hover:rounded-lg p-2">
                    <a className="text-white hover:text-white transition-colors duration-200">About v2</a>
                  </li>
                  <li className="transition-transform transform hover:scale-105 hover:bg-purple-600 hover:rounded-lg p-2">
                    <a className="text-white hover:text-white transition-colors duration-200">Pricing</a>
                  </li>
                  <li className="transition-transform transform hover:scale-105 hover:bg-purple-600 hover:rounded-lg p-2">
                    <a className="text-white hover:text-white transition-colors duration-200">Product Tour</a>
                  </li>
                  <li className="transition-transform transform hover:scale-105 hover:bg-purple-600 hover:rounded-lg p-2">
                    <a className="text-white hover:text-white transition-colors duration-200">Integration</a>
                  </li>
                  <li className="transition-transform transform hover:scale-105 hover:bg-purple-600 hover:rounded-lg p-2">
                    <a className="text-white hover:text-white transition-colors duration-200">Contact</a>
                  </li>
                  <li className="transition-transform transform hover:scale-105 hover:bg-purple-600 hover:rounded-lg p-2">
                    <a className="text-white hover:text-white transition-colors duration-200">Terms</a>
                  </li>
                  <li className="transition-transform transform hover:scale-105 hover:bg-purple-600 hover:rounded-lg p-2">
                    <a className="text-white hover:text-white transition-colors duration-200">Privacy</a>
                  </li>
                  <li className="transition-transform transform hover:scale-105 hover:bg-purple-600 hover:rounded-lg p-2">
                    <a className="text-white hover:text-white transition-colors duration-200">Feature</a>
                  </li>
                  <li className="transition-transform transform hover:scale-105 hover:bg-purple-600 hover:rounded-lg">
                    <a className="text-white hover:text-white transition-colors duration-200">Changelog</a>
                  </li>
                  <li className="transition-transform transform hover:scale-105 hover:bg-purple-600 hover:rounded-lg p-2">
                    <a className="text-white hover:text-white transition-colors duration-200">Sign In</a>
                  </li>
                  <li className="transition-transform transform hover:scale-105 hover:bg-purple-600 hover:rounded-lg p-2">
                    <a className="text-white hover:text-white transition-colors duration-200">Sign Up</a>
                  </li>
                  <li className="transition-transform transform hover:scale-105 hover:bg-purple-600 hover:rounded-lg p-2">
                    <a className="text-white hover:text-white transition-colors duration-200">404</a>
                  </li>
                </ul>
              </details>
            </li>
            <li className="transition-transform transform hover:scale-105 hover:bg-purple-600 hover:rounded-lg p-2">
              <a className="text-white hover:text-white transition-colors duration-200">Pricing</a>
            </li>
            <li className="transition-transform transform hover:scale-105 hover:bg-purple-600 hover:rounded-lg p-2">
              <a className="text-white hover:text-white transition-colors duration-200">About</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end gap-4">
          <a>Contact</a>
          <a className="btn rounded-3xl relative overflow-hidden px-6 py-3 text-white bg-gradient-to-r from-purple-500 to-blue-500">
            <span
              className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-50"
              style={{
                animation: "border-beam 2s linear infinite",
                transform: "translateX(-100%)",
              }}
            ></span>
            <span className="relative">Get Template</span>
          </a>
        </div>
      </div>
    </section>
  );
};
export default NAVBAR;
