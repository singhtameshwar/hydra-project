export const HeroSection = () => {
    return (
        <section className="bg-black  text-white px-4 py-16 md:px-8">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2">
                    <div className="space-y-12">
                        <div className="space-y-6">
                                <h1 className="text-2xl md:text-2xl lg:ml-24 lg:text-3xl font-bold leading-tight">
                                    Stay connected <br /> with Our cloud <br /> software
                                </h1>
                                <p className="text-gray-400 lg:ml-24  text-lg">
                                    Streamline and manage your department's service delivery<br />end-to-end, and enable digital transformation<br /> in a matter of days, not years.
                                </p>
                            </div>
                            <div className="grid grid-cols-3 lg:ml-24 gap-4 py-8">
                                <div className="space-y-2">
                                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                                        2.3m
                                    </div>
                                    <div className="text-sm text-gray-400">Total sales</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                                        13m+
                                    </div>
                                    <div className="text-sm text-gray-400">Total revenue</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                                        4100+
                                    </div>
                                    <div className="text-sm text-gray-400">Happy customers</div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div className="space-y-14">
                                <div className="flex gap-4 items-start">
                                    <div className="p-3 rounded-lg">
                                        <svg
                                            className="w-6 h-6"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-semibold">Multiple user support</h3>
                                        <p className="text-gray-400">
                                            Streamline and manage your department's service delivery
                                            end-to-end, and <br/> enable digital transformation in a matter of
                                            days, not years.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="p-3 rounded-lg">
                                        <svg
                                            className="w-6 h-6"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.37 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.64 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16ZM16 17H8V11C8 8.52 9.51 6.5 12 6.5C14.49 6.5 16 8.52 16 11V17Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-semibold">Push notification</h3>
                                        <p className="text-gray-400">
                                            Streamline and manage your department's service delivery
                                            end-to-end, and <br/> enable digital transformation in a matter of
                                            days, not years.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="p-3 rounded-lg">
                                        <svg
                                            className="w-6 h-6"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-semibold">Track from everywhere</h3>
                                        <p className="text-gray-400">
                                            Streamline and manage your department's service delivery
                                            end-to-end, and <br/> enable digital transformation in a matter of
                                            days, not years.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}
