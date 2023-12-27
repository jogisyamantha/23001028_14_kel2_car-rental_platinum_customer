import rightButton from "../../assets/images/right_button.png";
import leftButton from "../../assets/images/left_button.png";
import "./style.css";
import photo from "../../assets/images/img_photo.png";
import rate from "../../assets/images/rate.png";

const Carousel = () => {
  return (
    <div>
      <section class="pt-5 pb-5">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div
                id="carouselExampleIndicators2"
                class="carousel slide"
                data-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="row row-gap-3">
                      <div class="col-md-4 mb-3">
                        <div class="carousel-card">
                          <img src={photo} alt="" />
                          <div className="carousel-card-right">
                            <img src={rate} alt="" className="carousel-rate" />
                            <p>
                              “Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit, sed do eiusmod lorem ipsum dolor
                              sit amet, consectetur adipiscing elit, sed do
                              eiusmod lorem ipsum dolor sit amet, consectetur
                              adipiscing elit, sed do eiusmod”
                            </p>
                            <p>John Dee 32, Bromo</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4 mb-3">
                        <div class="carousel-card">
                          <img src={photo} alt="" />
                          <div className="carousel-card-right">
                            <img src={rate} alt="" className="carousel-rate" />
                            <p>
                              “Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit, sed do eiusmod lorem ipsum dolor
                              sit amet, consectetur adipiscing elit, sed do
                              eiusmod lorem ipsum dolor sit amet, consectetur
                              adipiscing elit, sed do eiusmod”
                            </p>
                            <p>John Dee 32, Bromo</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4 mb-3">
                        <div class="carousel-card">
                          <img src={photo} alt="" />
                          <div className="carousel-card-right">
                            <img src={rate} alt="" className="carousel-rate" />
                            <p>
                              “Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit, sed do eiusmod lorem ipsum dolor
                              sit amet, consectetur adipiscing elit, sed do
                              eiusmod lorem ipsum dolor sit amet, consectetur
                              adipiscing elit, sed do eiusmod”
                            </p>
                            <p>John Dee 32, Bromo</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="row row-gap-3">
                      <div class="col-md-4 mb-3">
                        <div class="carousel-card">
                          <img src={photo} alt="" />
                          <div className="carousel-card-right">
                            <img src={rate} alt="" className="carousel-rate" />
                            <p>
                              “Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit, sed do eiusmod lorem ipsum dolor
                              sit amet, consectetur adipiscing elit, sed do
                              eiusmod lorem ipsum dolor sit amet, consectetur
                              adipiscing elit, sed do eiusmod”
                            </p>
                            <p>John Dee 32, Bromo</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4 mb-3">
                        <div class="carousel-card">
                          <img src={photo} alt="" />
                          <div className="carousel-card-right">
                            <img src={rate} alt="" className="carousel-rate" />
                            <p>
                              “Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit, sed do eiusmod lorem ipsum dolor
                              sit amet, consectetur adipiscing elit, sed do
                              eiusmod lorem ipsum dolor sit amet, consectetur
                              adipiscing elit, sed do eiusmod”
                            </p>
                            <p>John Dee 32, Bromo</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4 mb-3">
                        <div class="carousel-card">
                          <img src={photo} alt="" />
                          <div className="carousel-card-right">
                            <img src={rate} alt="" className="carousel-rate" />
                            <p>
                              “Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit, sed do eiusmod lorem ipsum dolor
                              sit amet, consectetur adipiscing elit, sed do
                              eiusmod lorem ipsum dolor sit amet, consectetur
                              adipiscing elit, sed do eiusmod”
                            </p>
                            <p>John Dee 32, Bromo</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="row row-gap-3">
                      <div class="col-md-4 mb-3">
                        <div class="carousel-card">
                          <img src={photo} alt="" />
                          <div className="carousel-card-right">
                            <img src={rate} alt="" className="carousel-rate" />
                            <p>
                              “Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit, sed do eiusmod lorem ipsum dolor
                              sit amet, consectetur adipiscing elit, sed do
                              eiusmod lorem ipsum dolor sit amet, consectetur
                              adipiscing elit, sed do eiusmod”
                            </p>
                            <p>John Dee 32, Bromo</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4 mb-3">
                        <div class="carousel-card">
                          <img src={photo} alt="" />
                          <div className="carousel-card-right ">
                            <img src={rate} alt="" className="carousel-rate" />
                            <p>
                              “Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit, sed do eiusmod lorem ipsum dolor
                              sit amet, consectetur adipiscing elit, sed do
                              eiusmod lorem ipsum dolor sit amet, consectetur
                              adipiscing elit, sed do eiusmod”
                            </p>
                            <p>John Dee 32, Bromo</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4 mb-3">
                        <div class="carousel-card">
                          <img src={photo} alt="" />
                          <div className="carousel-card-right">
                            <img src={rate} alt="" className="carousel-rate" />
                            <p>
                              “Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit, sed do eiusmod lorem ipsum dolor
                              sit amet, consectetur adipiscing elit, sed do
                              eiusmod lorem ipsum dolor sit amet, consectetur
                              adipiscing elit, sed do eiusmod”
                            </p>
                            <p>John Dee 32, Bromo</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-1 text-right mx-auto">
              <a
                class="mb-3 mr-1 pr-2"
                href="#carouselExampleIndicators2"
                role="button"
                data-slide="prev"
              >
                <img src={leftButton} alt="" className="" />
              </a>
              <a
                class="mb-3 pl-2"
                href="#carouselExampleIndicators2"
                role="button"
                data-slide="next"
              >
                <img src={rightButton} alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carousel;
