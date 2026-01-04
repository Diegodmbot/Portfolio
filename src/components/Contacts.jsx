import { useState } from "react";
import urlData from "../data/urls.json";
import "./Contacts.css";

export function Contacts() {
  const [mailCopied, setMailCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(urlData.email).then(() => {
      setMailCopied(true);
      setTimeout(() => setMailCopied(false), 1500);
    });
  };

  return (
    <div className="Contacts">
      <p>Contact me</p>
      <nav>
        <a href={urlData.linkedin} target="_blank">
          <img src="/LinkedIn_logo.svg" alt="LinkedIn logo" />
        </a>
        <a href={urlData.bluesky} target="_blank">
          <img src="/Bluesky_logo.svg" alt="Bluesky logo" />
        </a>
        <a>
          <img src="/Email_logo.svg" alt="Email logo" onClick={handleCopy} />
        </a>
        {mailCopied && (
          <p className="CopiedMensage">Email copied to clipboard!</p>
        )}
      </nav>
    </div>
  );
}
