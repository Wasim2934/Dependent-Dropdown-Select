import { useState } from "react";
import countries from './dropdownData';

const Dropdown = () => {
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-87.5 space-y-6">

                <h2 className="text-2xl font-semibold text-gray-800 text-center">
                    Select Location
                </h2>

                {/* Country Dropdown */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-600">
                        Country
                    </label>
                    <select
                        value={country}
                        onChange={(e) => {
                            setCountry(e.target.value);
                            setCity("");
                        }}
                        className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    >
                        <option value="">Select country</option>
                        {Object.keys(countries).map((c) => (
                            <option key={c} value={c}>
                                {c}
                            </option>
                        ))}
                    </select>
                </div>

                {/* City Dropdown */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-600">
                        City
                    </label>
                    <select
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        disabled={!country}
                        className={`p-3 rounded-lg border transition
                    ${country
                                ? ("border-gray-300 focus:ring-2 focus:ring-blue-500")
                                : ("bg-gray-100 cursor-not-allowed")
                            }`}>

                        <option value="">Select city</option>
                        {country &&
                            countries[country].map((c) => (
                                <option key={c} value={c}>
                                    {c}
                                </option>
                            ))}
                    </select>
                </div>

                {/* Output */}
                <div className="text-center text-gray-700 text-sm">
                    {country && city ? (
                        <p>
                            📍 {city}, {country}
                        </p>
                    ) : (
                        <p className="text-gray-400">Select location above</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dropdown;