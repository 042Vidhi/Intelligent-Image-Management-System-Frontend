
import UploadFiles from "../upload/upload"
export default function Navbar(){
    return <div className="flex justify-between">
            <div >
                My files ---
            </div>
            <div className="flex">
                <div className=" pr-5">
                <UploadFiles></UploadFiles>
                </div>
                
            </div>
    </div>
}