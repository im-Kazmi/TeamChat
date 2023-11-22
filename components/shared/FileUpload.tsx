"use client";
import React from "react";
import "@uploadthing/react/styles.css";
import { UploadDropzone } from "@/lib/uploadThing";
import Image from "next/image";
interface FileUploadInterface {
  endpoint: "messageFile" | "serverImage";
  value: string;
  onChange: (url: string) => void;
}

const FileUpload = ({ endpoint, value, onChange }: FileUploadInterface) => {
  const fileType = value && value.split(".").pop();

  if (value && fileType !== "pdf") {
    return (
      <div className=" flex w-full justify-center items-center my-5">
        <Image
          src={value}
          width={100}
          height={100}
          className=" rounded-full"
          alt="value"
        />
      </div>
    );
  }
  return (
    <div>
      <UploadDropzone
        endpoint={endpoint}
        onClientUploadComplete={(res) => {
          onChange(res[0].url);
        }}
        onUploadError={(error) => {
          console.log(error);
        }}
      />
    </div>
  );
};

export default FileUpload;
