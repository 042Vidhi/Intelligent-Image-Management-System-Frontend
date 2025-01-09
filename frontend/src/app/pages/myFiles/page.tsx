"use client"
import NotUploadedScreen from "@/components/myFileDetails/notUploaded";
import UploadedScreen from "@/components/myFileDetails/uploaded";
import Navbar from "@/components/navbar/navbar";
import { useSelector } from "react-redux";
/*eslint-disable*/
export default function AllFiles(){
    const isUploaded=useSelector((data:any)=>data.isUploaded)
    return <div className="mx-10 w-full-screen">
       <Navbar></Navbar>
       {
        isUploaded? <div><UploadedScreen></UploadedScreen>
            
        </div> :
        <div>
            <NotUploadedScreen></NotUploadedScreen>
            
        </div>
        }
    </div>
}