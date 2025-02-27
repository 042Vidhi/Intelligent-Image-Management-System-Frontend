"use client";

import React, { useState } from "react";
import { PacmanLoader } from "react-spinners";



interface ImageData {
    id: number;
    url: string;
    filename: string;
    tags: string[];
    captions: string[];
    timestamp: string;
}

const baseURL = "http://localhost:5000"; 

export default function AllFiles() {
    const [images, setImages] = useState<ImageData[] | null>(null);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState(""); // State for search input


    // Function to search images based on query
    const handleSearch = async () => {
        
        try {
            setLoading(true);
            const response = await fetch(`${baseURL}/search?query=${query}`);
            const data = await response.json();
            setLoading(false);
            if (!data.error) {
                setImages(data.data || []);
            } else {
                setImages([]);
            }
        } catch (error) {
            console.error("Error fetching search results:", error);
            setLoading(false);
            setImages([]);
        }
    };


    return (
        <div className="flex flex-col items-center w-full p-6">
            {/* Search Bar + Button */}
            <div className="flex w-full max-w-lg mb-6">
                <input
                    type="text"
                    placeholder="Search images..."
                    className="w-full p-3 border border-gray-300 rounded-l-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
                <button
                    onClick={handleSearch}
                    className="bg-black text-white px-5 rounded-r-lg  flex items-center justify-center"
                >
                    Search
                </button>
            </div>

            {/* Loading Spinner */}
            {loading && (
                <div className="flex flex-col items-center justify-center h-screen text-gray-500">
                    <PacmanLoader color="#000000" size={30} />
                    Fetching your images, please wait...
                </div>
            )}

            {/* Display Images */}
            {images !== null && images.length > 0 && (
                <div className="flex flex-col w-full gap-y-5">
                    <h2 className="text-lg font-semibold">My Files</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {images.map((image) => (
                            <div key={image.id} className="bg-gray-100 p-3 rounded-lg shadow-md">
                                <img
                                    src={image.url}
                                    alt={image.filename}
                                    width={300}
                                    height={200}
                                    className="w-full h-48 object-cover rounded-md"
                                />
                                <h3 className="mt-2 text-sm font-semibold">{image.filename}</h3>
                                <p className="text-xs text-gray-600">
                                    {image.tags.length > 0 ? `Tags: ${image.tags.join(", ")}` : "No tags"}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* No Files Message */}
            {images !== null && images.length === 0 && !loading && (
                <div className="flex flex-col items-center justify-center h-screen text-gray-500">
                    No files found. Try uploading in the My Files section.
                </div>
            )}

            {/* Initial Search Screen*/}
            {images !== null && images.length === 0 && !loading && (
                <div className="flex flex-col items-center justify-center h-screen text-gray-500">
                    No files found. Try uploading in the My Files section.
                </div>
            )}
        </div>
    );
}
