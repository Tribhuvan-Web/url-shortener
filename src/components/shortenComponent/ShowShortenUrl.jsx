import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { IoCopy } from "react-icons/io5";
import { LiaCheckSolid } from "react-icons/lia";

function ShowShortenUrl({ shortenUrl, isCreating }) {
  const [isCopied, setIsCopied] = React.useState(false);

  React.useEffect(() => {
    setIsCopied(false);
  }, [shortenUrl]);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className={`${shortenUrl ? "block" : "hidden"} w-full mt-4`}>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
         
          <p className="text-blue-500 font-medium truncate w-full sm:w-auto">
            
            {shortenUrl}
          </p>

          <CopyToClipboard onCopy={handleCopy} text={shortenUrl}>
            <div
              className={`
              flex items-center gap-2 
              ${isCopied ? "bg-blue-700" : "bg-blue-500"} 
              text-white px-4 py-2 rounded-md 
              ${
                isCreating
                  ? "opacity-50 cursor-not-allowed"
                  : "cursor-pointer hover:bg-blue-600"
              }
              transition-colors w-full sm:w-auto justify-center
            `}
            >
              <button
                type="button"
                className="font-medium"
                disabled={isCreating}
                aria-label={
                  isCopied ? "Copied to clipboard" : "Copy to clipboard"
                }
              >
                {isCreating ? "Creating..." : isCopied ? "Copied!" : "Copy"}
              </button>
              {isCreating ? (
                <div className="animate-spin h-5 w-5 border-2 border-white/30 border-t-white rounded-full" />
              ) : isCopied ? (
                <LiaCheckSolid className="text-lg" />
              ) : (
                <IoCopy className="text-lg" />
              )}
            </div>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
}

export default ShowShortenUrl;
