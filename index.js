import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Mock results
    setResults([
      { app: "Zepto", price: "₹50", delivery: "10 mins" },
      { app: "Blinkit", price: "₹52", delivery: "8 mins" },
      { app: "Instamart", price: "₹49", delivery: "15 mins" }
    ]);
  };

  return (
    <main className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">QuickCommerce Price Compare</h1>
      <input
        className="border px-4 py-2 mb-4 w-80 rounded"
        placeholder="Search for product (e.g. Milk)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleSearch}
      >
        Search
      </button>
      <div className="mt-6 space-y-2 w-full max-w-md">
        {results.map((res, idx) => (
          <div
            key={idx}
            className="p-4 border rounded flex justify-between bg-gray-50"
          >
            <span>{res.app}</span>
            <span>{res.price}</span>
            <span>{res.delivery}</span>
          </div>
        ))}
      </div>
    </main>
  );
}