"use client"

import { useState } from "react"
import UploadButton from "../ui/uploadButton";
import { setImageUploaded } from "@/lib/features/uploadNotUpload/slice";
import { useDispatch } from "react-redux";
/*eslint-disable*/
export default function UploadFiles() {
    const [files, setFiles] = useState<File[]>([]);
    const [uploaded,setUploaded] = useState<boolean>(false);
    const dispatch=useDispatch()
    const uploadDispatch=()=>{
        dispatch(setImageUploaded(true))
    }
    async function uploadFile(file: File) {
        try {
            
            const data = new FormData();
            data.append('file', file); // Append the file to FormData

            // const res = await fetch('/api/upload', {
            //     method: 'POST',
            //     body: data
            // });

            // if (!res.ok) throw new Error(await res.text());
            setUploaded(true);
            uploadDispatch()
            // You can handle success action here (e.g., notify user, clear file input, etc.)
        } catch (e: any) {
            console.error(e);
        }
    }

    function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files) {
            const selectedFiles = Array.from(e.target.files);
            setFiles(selectedFiles);
            selectedFiles.forEach(file => uploadFile(file));
        }
    }

    return (
        <UploadButton onChange={onFileChange}></UploadButton>
    );
}