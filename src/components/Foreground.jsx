import React,{ useRef } from "react";
import Card from "./Card";

function Foreground() {

    const ref= useRef(null);

  const data = [
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati.",
            filesize: ".4mb",
            close: false,
            tag: { isOpen:true, tagTitle:"Download Now", tagColor:"bg-green-600" },
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati.",
            filesize: ".9mb",
            close: false,
            tag: { isOpen:true, tagTitle:"Download Now", tagColor:"bg-blue-600" },
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati.",
            filesize: "1mb",
            close: true,
            tag: { isOpen:false, tagTitle:"Upload", tagColor:"bg-green-600" },
        },
    ];

  return (
    <div ref={ref} className="fixed top-0 left-0 w-full h-screen z-[3] flex flex-wrap gap-10 p-5">
      {data.map((item,index)=>(
        <Card data={item} reference={ref} key={index}/>
      ))}
    </div>
  );
}

export default Foreground;
