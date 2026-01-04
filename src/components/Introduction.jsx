import "./Introduction.css";
import miscData from "../data/misc.json";
import urlData from "../data/urls.json";

export function Introduction() {
  return (
    <div>
      <div className="Introduction">
        <img className="ProfileIMG" src="/ProfilePic.png" alt="Profile image" />
        <a className="JobTag" href={urlData.linkedin}>
          #opentowork
        </a>
      </div>
      <section>
        <h2>{"Hi! I'm Diego Díaz Morón"}</h2>
        <p>{miscData.abstract}</p>
      </section>
    </div>
  );
}
