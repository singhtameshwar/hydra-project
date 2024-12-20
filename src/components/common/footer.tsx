import Link from "next/link";
export const Footer = () => {
    return (
        <section className="bg-gradient-to-br col-span-2 from-black to-purple-900 py-20 grid grid-flow-row-dense">
            <div className="container mx-auto px-4">
                <footer className="text-white py-16 grid grid-cols-1 sm:grid-cols-2 gap-y-8">
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <span className="ml-2 text-2xl font-semibold">Hydar</span>
                        </div>
                        <p className="text-gray-300">
                            Boost your AI SaaS startup&apos;s online presence with Duality,<br />
                            our sleek Framer template. Join the Hydar<br />
                            family and transform your development experience today.
                        </p>
                    </div>
                    <div className="flex flex-col space-y-10">
                        <div className="grid sm:grid-cols-3 grid-cols-1 gap-y-8 sm:gap-y-0 w-full">
                            <div className="grid justify-start">
                                <h3 className="text-xl font-semibold mb-4">Pages</h3>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="/" className="link link-hover">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about" className="link link-hover">
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/pricing" className="link link-hover">
                                            Pricing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact" className="link link-hover">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="grid justify-start sm:justify-center">
                                <h3 className="text-xl font-semibold mb-4">Product</h3>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="/product" className="link link-hover">
                                            Product
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/integration" className="link link-hover">
                                            Integration
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/sign-in" className="link link-hover">
                                            Sign In
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/sign-up" className="link link-hover">
                                            Sign Up
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="grid justify-start sm:justify-end">
                                <h3 className="text-xl font-semibold mb-4">Resources</h3>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="/terms" className="link link-hover">
                                            Terms
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy" className="link link-hover">
                                            Privacy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/404" className="link link-hover">
                                            404
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
                <footer className="border-t border-gray-700 text-gray-400 py-4">
                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                        <p className="text-center sm:text-left">© {new Date().getFullYear()} Hydar. All rights reserved.</p>
                        <nav className="flex space-x-4 justify-center">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current">
                                    <path
                                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current">
                                    <path
                                        d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current">
                                    <path
                                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                </svg>
                            </a>
                        </nav>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default Footer;
