import Image from "next/image";
import { Button } from "../ui/button";
import cat from "./cat.png"
import Tags from "../tags/tags";

export default function UploadedScreen() {
  return (
    <div className="grid grid-cols-2">
      <div className=" grid h-screen grid-rows-5">
        <div> Details!!</div>
        <div><Tags ></Tags></div>
        <div>more details</div>
      </div>
      <div className=" grid h-screen grid-rows-5">
        <div className="row-span-3 p-36">
          <Image src={cat} alt="billi meow" className="rounded-lg" width={600} height={600} />
        </div>

        <div className="row-span-2 p-10 flex justify-between px-36">
          <Button>Download</Button>
          <Button>Save</Button>
        </div>
      </div>
    </div>
  );
}
