"use client";

import ImageModifications from '@/components/imageModifications';
import React, { useState } from "react";
import { PacmanLoader } from "react-spinners";
import { toast } from "sonner"

interface ImageData {
  file: File;
  tags: string[];
  caption: string[];
  size: number;
}

const MyFiles: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const [file, setFile] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [fileLoading, setFileLoading] = useState(false);

  // Handle single file upload
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) return;

    setLoading(true);
    const file = event.target.files[0];

    if (!file.type.startsWith("image/")) {
      console.error("Selected file is not an image");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("images", file);

    fetch("http://localhost:5000/generateTags", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("API Response:", result);
        

        setSelectedImage({
          file,
          tags: result?.data[0]?.tags || [],
          caption: result?.data[0]?.captions || [],
          size: result?.data[0]?.image_size,
        });

        setLoading(false);
        toast.success("Image uploaded successfully!");
      })
      .catch((error) => {
        console.error("Error fetching image tags:", error);
        setLoading(false);
        toast.warning('Failed to upload image. Please try again later.');
      });
  };
  //save the image to the database
  const onClickSave = async (selectedImage: ImageData | null) => {
    if (!selectedImage) return;
  
    setFileLoading(true);
    const formData = new FormData();
  
    formData.append("image", selectedImage.file);
    formData.append("filename", selectedImage.file.name);
    formData.append("tags", Array.isArray(selectedImage.tags) ? selectedImage.tags.join(",") : "");
    formData.append("captions", Array.isArray(selectedImage.caption) ? selectedImage.caption.join(",") : ""); 
  
    try {
      const response = await fetch("http://localhost:5000/saveImage", {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log("API Response:", result);
      
      setFile(result.data);
      toast.success("Image saved successfully!");
    } catch (error) {
      console.error("Error saving image:", error);
      toast.warning('Failed to save image. Please try again later.');
    } finally {
      setFileLoading(false);
    }
  };
  


  return (
    <div className="flex flex-col h-screen relative font-Inter">
      {/* Header Section */}
      <div className="flex flex-row  p-2 items-start border-b-[1px] border-gray ">
        

        <div className="flex flex-row ml-auto">
          {!selectedImage ? (
            <>
              <button className="outline-none text-white bg-black rounded-[5px] text-[14px] ml-[20px]">
                <label htmlFor="fileInput" className="cursor-pointer flex flex-row gap-x-[10px] items-center px-[22px] py-[10px] box-border">
                  <div>Upload</div>
                  
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  id="fileInput"
                  style={{ display: "none" }}
                />
              </button>
            </>
          ) : (
            <button
              className="flex flex-row gap-x-[10px] items-center outline-none text-purple-dark border-[1px] border-purple-dark font-semibold px-[22px] py-[10px] rounded-[5px] text-[14px] box-border"
              onClick={() => setSelectedImage(null)}
            >
              Cancel
              
            </button>
          )}
        </div>

       
      </div>
      {selectedImage  &&
                <ImageModifications 
                image = {selectedImage}
                setSelectedImage={setSelectedImage}
                onClickSave={onClickSave}
                
                />
            }
      
      {/* No Files Message */}
      {!selectedImage && !loading && !fileLoading && file.length === 0 && (
        <div className="flex flex-col items-center justify-center h-screen text-gray-500">
          Upload a new image.
        </div>
      )}


      {loading && (
        <div className="flex flex-col gap-y-[10px] items-center justify-center m-auto text-[14px] text-[#606060]">
          <PacmanLoader
            color="#000000"
            size={30}
            />
          Hold on, we are processing your image
        </div>
      )}
    </div>
  );
};

export default MyFiles;
