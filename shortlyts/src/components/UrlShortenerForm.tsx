import { useState } from "react";

interface Props {
  onShorten: (url: string) => void;
}

export const UrlShortenerForm = ({ onShorten }: Props) => {
  const [inputUrl, setInputUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputUrl.trim()) return;
    onShorten(inputUrl.trim());
    setInputUrl("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-3 mt-8">
      <input
        type="url"
        required
        placeholder="Enter a long URL"
        value={inputUrl}
        onChange={(e) => setInputUrl(e.target.value)}
        className="p-2 border border-gray-300 rounded w-96"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Shorten
      </button>
    </form>
  );
};
