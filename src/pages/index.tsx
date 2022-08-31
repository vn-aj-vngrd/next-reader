import type { NextPage } from "next";
import Tesseract from "tesseract.js";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import { useState } from "react";
import Image from "next/image";
import Output from "../components/Output";

type OnClick = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => any;
};

const Home: NextPage = () => {
  const [image, setImage] = useState<string>(`/images/default.png`);
  const [text, setText] = useState<string | null>(null);

  const uploader = new Uploader({
    // Get production API keys from Upload.io
    apiKey: "free",
  });

  const onComplete = (files: any) => {
    if (files[0]?.fileUrl) {
      const img = files[0]?.fileUrl || `/images/default.png`;
      setImage(files[0]?.fileUrl || null);
      Tesseract.recognize(img, "eng", { logger: (m) => console.log(m) }).then(
        ({ data: { text } }) => {
          console.log(text);
          setText(text);
        }
      );
    }
  };

  return (
    <div className="flex flex-col items-center space-y-12 text-center">
      <div className="container ">
        <div className="items-center bg-white border border-gray-200 rounded shadow-sm">
          <Image src={image} height={500} width={1024} alt="" />
        </div>

        <div className="pt-2">
          {text && (
            <h4 className="text-white">
              <Output text={text} />
            </h4>
          )}
        </div>
      </div>

      <div>
        <UploadButton
          uploader={uploader}
          options={{ multi: false }}
          onComplete={onComplete}
        >
          {({ onClick }: OnClick) => (
            <button
              className="p-2 text-white bg-blue-500 rounded-md"
              onClick={onClick}
            >
              Upload an Image
            </button>
          )}
        </UploadButton>
      </div>
    </div>
  );
};

export default Home;
