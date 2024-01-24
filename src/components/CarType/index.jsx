import { IoPeopleOutline } from "react-icons/io5";

const CarType = (props) => {
  if (props.type == "small") {
    return (
      <div className="type-flex">
        <IoPeopleOutline style={{ width: 12, height: 12 }} />
        <p>2-4 orang</p>
      </div>
    );
  } else if (props.type == "medium") {
    return (
      <div className="type-flex">
        <IoPeopleOutline style={{ width: 12, height: 12 }} />
        <p>4-6 orang</p>
      </div>
    );
  } else if (props.type == "large") {
    return (
      <div className="type-flex">
        <IoPeopleOutline style={{ width: 12, height: 12 }} />
        <p>6-8 orang</p>
      </div>
    );
  }
};

export default CarType;
