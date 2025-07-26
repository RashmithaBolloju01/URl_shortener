// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div>
// //         <a href="https://vite.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.tsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }

// // export default App

// const App = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-slate-100">
//       <h1 className="text-4xl text-blue-600 font-bold underline">
//         ✅ Tailwind is working!
//       </h1>
//     </div>
//   );
// };

// export default App;
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
