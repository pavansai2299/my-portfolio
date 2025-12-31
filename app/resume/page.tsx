"use client";
import { useState } from "react";

export default function ResumePage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    setIsLoading(true);
    const url = "/PavanSai_Mucherla_Resume.pdf";

    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

    if (!isIOS) {
      // Desktop / Android / non-iOS: use normal anchor download
      const link = document.createElement("a");
      link.href = url;
      link.download = "PavanSai_Mucherla_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsLoading(false);
      return;
    }

    // iOS: open a blank tab to preserve user gesture, fetch blob and navigate the tab to it
    const newWin = window.open("", "_blank");

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Network response was not ok");

      const blob = await res.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      if (newWin) {
        newWin.location.href = blobUrl;
      } else {
        // fallback: open blob in same tab via anchor (won't trigger download but lets user share/save)
        const a = document.createElement("a");
        a.href = blobUrl;
        a.target = "_blank";
        document.body.appendChild(a);
        a.click();
        a.remove();
      }

      setTimeout(() => window.URL.revokeObjectURL(blobUrl), 1000);
    } catch (err) {
      // fallback: let Safari handle the original URL
      if (newWin) newWin.location.href = url;
      else window.open(url, "_blank", "noopener,noreferrer");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 pt-10">Resume</h1>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <iframe
            src={`/PavanSai_Mucherla_Resume.pdf`}
            className="w-full h-screen rounded-lg border border-gray-300"
            title="Resume PDF"
          />
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleDownload}
            disabled={isLoading}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200 disabled:opacity-50"
          >
            {isLoading ? "Downloading..." : "Download Resume"}
          </button>
        </div>
      </div>
    </div>
  );
}
