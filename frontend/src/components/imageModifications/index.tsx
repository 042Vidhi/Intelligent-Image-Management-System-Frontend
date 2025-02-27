import React, { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
import AutoTagging from "./tabs/autoTagging";

interface ImageData {
  file: File;
  tags: string[];
  caption: string[];
  size: number;
}

interface ImageModificationsProps {
  image: ImageData | null;
  setSelectedImage: React.Dispatch<React.SetStateAction<ImageData | null>>;
  onClickSave: (image: ImageData) => void;
}

const ImageModifications: React.FC<ImageModificationsProps> = ({
  image,
  setSelectedImage,
  onClickSave,
}) => {
  const [saving, setSaving] = useState<boolean>(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (image) {
      const objectUrl = URL.createObjectURL(image.file);
      setPreviewUrl(objectUrl);

      return () => URL.revokeObjectURL(objectUrl); // Cleanup
    }
  }, [image]);

  if (!image) return <div>No image selected</div>;

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  const downloadImageClickHandler = () => {
    if (!image) return;
    const a = document.createElement("a");
    a.href = URL.createObjectURL(image.file);
    a.download = image.file.name;
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(a.href);
    document.body.removeChild(a);
  };

  return (
    <div className="flex flex-grow flex-row relative font-Inter">
      {/* Left Panel */}
      <div className="flex flex-col min-w-[43%] border-r-[1px] border-gray">
        <AutoTagging image={image} setSelectedImage={setSelectedImage} />
      </div>

      {/* Right Panel */}
      <div className="flex flex-col min-w-[57%] pb-[20px]">
        {/* Image Information */}
        <div className="flex flex-row justify-between h-[138px] w-full border-b-[1px] border-gray p-[20px] text-[14px]">
          <div className="flex flex-col gap-y-[10px] w-[50%]">
            <div className="flex flex-row">
              <div className="w-[70px] font-medium">Name: </div>
              <div>{image.file.name.split(".")[0]}</div>
            </div>

            <div className="flex flex-row">
              <div className="w-[70px] font-medium">Size: </div>
              <div>{(image.file.size / 1024).toFixed(2)} KB</div>
            </div>

            <div className="flex flex-row">
              <div className="w-[70px] font-medium">Format: </div>
              <div>{image.file.type.split("/").pop()}</div>
            </div>
          </div>

          {/* Last Modified */}
          <div className="flex flex-col w-[50%]">
            <div className="flex flex-row">
              <div className="min-w-[100px] font-medium">Last Modified: </div>
              <div className="pl-[5px]">{formatDate(image.file.lastModified)}</div>
            </div>
          </div>
        </div>

        {/* Image Preview */}
        <div className="flex flex-col flex-grow h-[calc(100vh-300px)] mb-[10px]">
          <div className="flex justify-center h-[95%] w-full p-[15px] pb-[5px] items-center object-contain">
            {previewUrl && (
              <img src={previewUrl} className="max-h-full object-contain box-border" alt="Preview" />
            )}
          </div>
          <div className="flex justify-center text-[14px]">
            {Array.isArray(image.caption) ? image.caption.join(', ') : image.caption}
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto h-auto px-5 w-full">
          {/* Download Button */}
          <button
            className="flex flex-row gap-x-4 items-center justify-center outline-none text-purple-dark bg-purple-light border-[1px] border-purple-dark font-medium px-6 py-3 rounded-lg text-sm w-full"
            onClick={downloadImageClickHandler}
          >
            Download
          </button>

          {/* Save Button / Loading Spinner */}
          {!saving ? (
            <button
              className="flex flex-row gap-x-4 items-center justify-center border-none outline-none bg-black text-white font-medium px-6 py-3 rounded-lg text-sm w-full"
              onClick={() => {
                onClickSave(image);
                setSaving(true);
                setTimeout(() => setSaving(false), 2000); // Simulating save delay
              }}
            >
              Save
            </button>
          ) : (
            <div className="w-full flex justify-center items-center">
              <ScaleLoader color="#000000" loading={saving} height={20} width={2} radius={2} margin={2} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageModifications;
