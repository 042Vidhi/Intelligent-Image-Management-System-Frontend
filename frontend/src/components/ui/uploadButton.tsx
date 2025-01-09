import { Button } from "./button";

interface UploadButtonProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  export default function UploadButton({ onChange }: UploadButtonProps) {
    return (
      <div className="relative">
        <input
          type="file"
          name="file"
          accept="image/*"
          multiple
          onChange={onChange}
          className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
        />
        <Button>
          Upload File
        </Button>
      </div>
    );
  }