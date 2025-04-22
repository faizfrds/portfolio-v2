import React from "react";
import Link from "next/link";
import Image from "next/image"; // ✅ Import Next Image
import { HiOutlineGlobeAlt, HiArrowLeft } from "react-icons/hi";

import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

export const dynamic = "force-dynamic"; // needed if data changes often

async function getImageNames() {
  const s3 = new S3Client({
    region: "us-east-2",
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
  });

  const command = new ListObjectsV2Command({ Bucket: "picturesforfaiz" });
  const response = await s3.send(command);

  const imageNames = response.Contents?.map((item) => {
    if (item) return item.Key;
  });
  console.log(imageNames);
  return imageNames;
}

export default async function Gallery() {
  const imageNames = await getImageNames();
  // console.log(imageNames)

  return (
    <main className="bg-gradient-to-b from-slate-950 to-teal-950 lg:px-20 py-10 justify-center flex">
      <div className="flex flex-wrap w-3/4 md:w-2/3 lg:mt-10 mt-20">
        <Link href="/">
          <div className="group flex items-center gap-x-1 text-white font-semibold">
            <HiArrowLeft
              size={15}
              className="group-hover:-translate-x-1 group-hover:cursor-pointer transition"
            />
            Return
          </div>
        </Link>

        <div className="justify-center flex flex-col">
          <h1 className="text-yellow-300 text-4xl font-bold my-5">Gallery</h1>
          <div className="columns-1 sm:columns-2 sm:gap-8 md:columns-3">
            {imageNames.map((link, key) => (
              <div
                key={key}
                className={`bg-white p-1 rounded-md ${key !== 0 ? "mt-3" : ""}`}
              >
                <Image
                  src={`https://picturesforfaiz.s3.us-east-2.amazonaws.com/${link}`}
                  alt={link}
                  width={400}
                  height={300}
                  className="rounded-lg w-full h-auto"
                  loading="lazy" // ✅ ensures async loading
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
