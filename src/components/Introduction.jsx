import "./Introduction.css";

export function Introduction() {
  return (
    <div className="Introduction">
      <img
        className="ProfileIMG"
        src="/public/DiegoProfile.jpg"
        alt="Profile image"
      />
      <p className="JobTag">#opentowork</p>
      <section>
        <h2>{"Hi! I'm Diego Díaz Morón"}</h2>
        <p>
          {
            "I'm a software engineer from Tenerife. I'm passionate about game developoment and web development."
          }
        </p>
      </section>
    </div>
  );
}
