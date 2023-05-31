import "./InfoCard.css";

interface Props {
  title: string;
  current: number;
  previous: number;
  time: string;
  color?: string;
  image?: string;
}



const InfoCard = (props: Props) => {
  const { title, current, previous, time } = props;

  return (
    <div className="outer">
      <div className="card"
        style={{
          '--_icon-image': `url(${props.image})`,
          '--_icon-image-background': props.color,
        } as any}
      >
        <div className="card__title">
          <div className="card__title-text">{title}</div>
          <div className="card__title-option">
            <img src="/icon-ellipsis.svg"/>
          </div>
        </div>
        <div className="card__body">
          <div className="card__body-current">{current}hrs</div>
          <div className="card__body-previous">
            Last <span>{time}</span> - <span>{previous}hrs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

InfoCard.defaultProps = {
  title: "Work",
  current: "32",
  previous: "36",
  time: "Day",
};

export default InfoCard;
