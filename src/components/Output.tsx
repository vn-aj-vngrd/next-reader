import React, { useEffect, useState } from "react";

type Props = {
  text: string;
  onRemoveImage: () => void;
};

const Output: React.FC<Props> = ({ text, onRemoveImage }) => {
  const [_text, set_Text] = useState<string>();

  useEffect(() => {
    set_Text(text);
  }, [text]);

  const onCopyToClipboard = () => {
    navigator.clipboard.writeText(_text || "");
  };

  return (
    <div className="w-full border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-600">
      <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-900">
        <textarea
          id="comment"
          rows={4}
          defaultValue={text}
          className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400"
        ></textarea>
      </div>
      <div className="flex items-center justify-end px-3 py-5 space-x-4 border-t dark:border-gray-900">
        <button
          type="button"
          className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-red-500 rounded-lg focus:ring-4 focus:ring-red-200 dark:focus:ring-red-900 hover:bg-red-400"
          onClick={onRemoveImage}
        >
          Remove Image
        </button>
        <button
          type="button"
          className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-green-500 rounded-lg focus:ring-4 focus:ring-green-200 dark:focus:ring-green-900 hover:bg-green-400"
          onClick={onCopyToClipboard}
        >
          Copy to Clipboard
        </button>
      </div>
    </div>
  );
};

export default Output;
