import "./Introduction.css";

export function Introduction() {
  return (
    <div>
      <div className="Introduction">
        <img className="ProfileIMG" src="/ProfilePic.png" alt="Profile image" />
        <a
          className="JobTag"
          href="https://www.linkedin.com/in/diazmorondiego/"
        >
          #opentowork
        </a>
      </div>
      <section>
        <h2>{"Hi! I'm Diego Díaz Morón"}</h2>
        <p>
          {
            "I'm a software engineer based in Tenerife. Experienced in web and game development and UX/UI design. I also have a big experience in event coordination and teamworking. Currently part of Python Spain's Board, creating community in the Canary Islands and the rest of Spain."
          }
        </p>
      </section>
    </div>
  );
}
