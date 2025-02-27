"use client"
import React, { useState, useEffect } from "react";
import { PacmanLoader } from "react-spinners";

interface ImageData {
    id: number;
    url: string;
    filename: string;
    tags: string[];
    captions: string[];
    timestamp: string;
}

export default function AllFiles() {
    const [images, setImages] = useState<ImageData[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

    const fetchAllFiles = async () => {
        setLoading(true);
        try {
            const response = await fetch("http://localhost:5000/getAllImages");
            const data = await response.json();
            console.log("API Response in get all images:", data);
            setLoading(false);
            if (!data.error) {
                setImages(data.data);
            } else {
                setImages([]);
            }
        } catch (error) {
            console.error("Error fetching images:", error);
            setLoading(false);
            setImages([]);
        }
    };

    useEffect(() => {
        fetchAllFiles();
    }, []);

    return (
        <div className="flex items-start flex-grow px-4">
            {loading && (
                <div className="flex flex-col gap-y-2 items-center justify-center m-auto text-sm h-screen text-gray-500">
                    <PacmanLoader color="#000000" size={30} />
                    Fetching your images, please wait...
                </div>
            )}

            {images !== null && images.length > 0 && (
                <div className="flex flex-col flex-grow w-full gap-y-5 mt-6">
                    <h2 className="font-medium">All Files</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {images.map((image) => (
                            <div key={image.id} className="bg-gray-100 p-3 rounded-xl cursor-pointer shadow-md"
                                onClick={() => setSelectedImage(image)}
                            >
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

            {images !== null && images.length === 0 && (
                <div className="flex flex-col items-center justify-center text-sm h-screen mx-auto text-gray-500">
                    No files present. Try uploading in the My Files section.
                </div>
            )}

            {/* Full-Screen Image Modal */}
            {/* Full-Screen Image Modal */ }
            {selectedImage && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 overflow-auto"
                    onClick={() => setSelectedImage(null)} // Clicking outside will close
                >
                    
                        <img
                            src={selectedImage.url}
                            alt={selectedImage.filename}
                            className="w-[90vw] max-h-[90vh] object-contain"
                        />
                    
                </div>
            )}

        </div>
    );
}
