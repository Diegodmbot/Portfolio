import { useState } from "react";
import "./Contacts.css";

export function Contacts() {
  const [mailCopied, setMailCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("diazmorondiego@gmail.com").then(() => {
      setMailCopied(true);
      setTimeout(() => setMailCopied(false), 1500);
    });
  };

  return (
    <div className="Contacts">
      <p>Contact me</p>
      <nav>
        <a href="https://www.linkedin.com/in/diazmorondiego/">
          <img src="/LinkedIn_logo.svg" alt="LinkedIn logo" />
        </a>
        <a href="https://bsky.app/profile/diegodmbot.bsky.social">
          <img src="/Bluesky_logo.svg" alt="Bluesky logo" />
        </a>
        <a>
          <img src="/Email_logo.svg" alt="Email logo" onClick={handleCopy} />
        </a>
        {mailCopied && (
          <p className="CopiedMensage">Text copied to clipboard!</p>
        )}
      </nav>
    </div>
  );
}
