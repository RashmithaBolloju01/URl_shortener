import type { ShortUrl } from "../types";

interface Props {
  urls: ShortUrl[];
}

export const ShortenedUrlList = ({ urls }: Props) => {
  return (
    <div className="mt-6 space-y-4">
      {urls.map((url, idx) => (
        <div key={idx} className="p-4 bg-white shadow-md rounded border">
          <p><strong>Original:</strong> {url.original}</p>
          <p>
            <strong>Shortened:</strong>{" "}
            <a
              href={url.original}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {url.shortened}
            </a>
          </p>
        </div>
      ))}
    </div>
  );
};
