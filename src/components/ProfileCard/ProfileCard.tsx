import { useEffect, useRef } from "react";
import "./ProfileCard.css";

const ProfileCard = ({ setActive }: { setActive: (time: string) => void }) => {

  const timeRef = useRef<HTMLParagraphElement>(null);  

  useEffect(() => {
    if (timeRef.current) {
      timeRef.current.addEventListener("click", (e) => {
          const p = e.target as HTMLParagraphElement;
          if (e?.target !== p) return;
          setActive(p.innerText.toLowerCase());
          p.parentElement?.querySelectorAll("p").forEach((p) => {
            p.classList.remove("active");
          });
          p.classList.add("active");

      });


    }
  }
  , [setActive]);


  return (
    <div className="profile__card">
      <div className="shadow">
        <div className="profile__card__top">
          <div className="profile__card__top-img">
            <img src="/image-jeremy.png" alt="image-jeremy" />
          </div>
          <div className="profile__card__top-info">
            Report for
            <span className="profile__card__top-info--name">Jeremy Robson</span>
          </div>
        </div>
      </div>
      <div className="profile__card__bottom"
        ref={timeRef}
      >
        <p className="active">
          Daily
        </p>
        <p >Weekly</p>
        <p>Monthly</p>
      </div>
    </div>
  );
};

export default ProfileCard;
