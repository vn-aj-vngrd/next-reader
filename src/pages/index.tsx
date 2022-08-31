import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import Tesseract from "tesseract.js";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import { useState } from "react";
import Image from "next/image";

type OnClick = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => any;
};

const Home: NextPage = () => {
  const [image, setImage] = useState<string | null>(null);
  const [text, setText] = useState<string | null>(null);

  const uploader = new Uploader({
    // Get production API keys from Upload.io
    apiKey: "free",
  });

  const onComplete = (files: any) => {
    setImage(files[0]?.fileUrl || null);
    const img: string = files[0]?.fileUrl || "";

    if (files[0]?.fileUrl)
      Tesseract.recognize(img, "eng", { logger: (m) => console.log(m) }).then(
        ({ data: { text } }) => {
          console.log(text);
          setText(text);
        }
      );
  };

  return (
    <div className="">
      <div>
        <UploadButton
          uploader={uploader}
          options={{ multi: false }}
          onComplete={onComplete}
        >
          {({ onClick }: OnClick) => (
            <button className="btn btn-primary btn-sm" onClick={onClick}>
              Upload a file
            </button>
          )}
        </UploadButton>
      </div>

      <div className="flex flex-col space-y-12">
        <div>
          {image && (
            <Image
              className="text-white"
              src={`${image}`}
              height={100}
              width={100}
              alt=""
            />
          )}
        </div>

        <div>{text && <h4 className="text-white">{text}</h4>}</div>
      </div>
    </div>
  );
};

export default Home;
