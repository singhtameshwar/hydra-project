'use client';

import React from "react";

export const SHARING = () => {
    const templatePages = [
        "Home v1",
        "Home v2",
        "Product tour",
        "About v1",
        "About v2",
        "Pricing",
        "Contact us",
        "Integration"
    ];

    return (
        <section className="bg-black text-white min-h-screen flex items-center justify-center py-16">
            <div className="container border rounded-3xl border-[#fff4ff1a] mx-auto grid md:grid-cols-2 gap-12 px-10 py-10 items-center justify-center">
                <div className="space-y-8 text-center md:text-left">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-bold">Sharing</h2>
                        <p className="text-lg text-gray-300">
                            With Hydar, you have the power to craft compelling content that resonates with your audience, effortlessly.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl">Template pages:</h3>
                        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                            {templatePages.map((page) => (
                                <button
                                    key={page}
                                    className="btn btn-ghost bg-zinc-900 hover:bg-zinc-800 text-white rounded-full"
                                >
                                    {page}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-4 max-w-md mx-auto md:mx-0">
                        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                            <input
                                type="email"
                                placeholder="name@email.com"
                                className="input input-bordered bg-zinc-900 border-0 text-white placeholder:text-gray-400 rounded-full w-full md:w-auto"
                            />
                            <button className="btn bg-violet-600 hover:bg-violet-700 rounded-full px-6">
                                Submit
                            </button>
                        </div>
                        <p className="text-sm text-gray-400 text-center md:text-left">
                            🔥 We promise not to spam!
                        </p>
                    </div>
                </div>

                <div className="relative pb-20 pt-20 flex justify-center">
                    <figure>
                        <img
                            src="/images/details.avif"
                            alt="graph"
                            className="md:w-full "
                        />
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default SHARING;
