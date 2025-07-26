import { useState } from "react";
import { UrlShortenerForm } from "./components/UrlShortenerForm";
import { ShortenedUrlList } from "./components/ShortenedUrlList";
import type { ShortUrl } from "./types";

const App = () => {
  const [shortUrls, setShortUrls] = useState<ShortUrl[]>([]);

  const generateShortCode = () => {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    return Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  };

  const handleShorten = (originalUrl: string) => {
    const code = generateShortCode();
    const shortened = `https://short.ly/${code}`;
    const newEntry: ShortUrl = { original: originalUrl, shortened };
    setShortUrls([newEntry, ...shortUrls]);
  };

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-blue-700">🔗 ShortlyTS – URL Shortener</h1>
      <UrlShortenerForm onShorten={handleShorten} />
      <ShortenedUrlList urls={shortUrls} />
    </div>
  );
};

export default App;
