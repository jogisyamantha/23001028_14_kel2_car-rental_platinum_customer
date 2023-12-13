import "./style.css";

const Accordion = (props) => {
  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed accordion-button-text"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${props.data.id}`}
            aria-expanded="false"
            aria-controls={`collapse${props.data.id}`}
          >
            {props.data.title}
          </button>
        </h2>
        <div
          id={`collapse${props.data.id}`}
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>{props.data.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
