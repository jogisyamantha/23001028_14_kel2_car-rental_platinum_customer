import "./style.css";

const WhyUsCard = (props) => {
  return (
    <div className="whyus-card">
      <img src={props.data.icon} alt={props.data.title} />
      <div className="whyus-card-title">{props.data.title}</div>
      <p>{props.data.desc}</p>
    </div>
  );
};

export default WhyUsCard;
