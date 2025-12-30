'use client';
import { useState } from 'react';

export default function ResumePage() {
    const [isLoading, setIsLoading] = useState(false);

    const handleDownload = () => {
        setIsLoading(true);
        // Replace with your actual resume PDF path
        const link = document.createElement('a');
        link.href = '/PavanSai_Mucherla_Resume.pdf'; // Place your PDF in the public folder
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setIsLoading(false);
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
                        {isLoading ? 'Downloading...' : 'Download Resume'}
                    </button>
                </div>
            </div>
        </div>
    );
}