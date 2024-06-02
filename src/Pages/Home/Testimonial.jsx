import alumni1Img from "../../assets/alumni1.jpg";
import alumni2Img from "../../assets/alumni2.jpg";
import alumni3Img from "../../assets/alumni3.jpg";
import alumni4Img from "../../assets/alumni4.jpg";

const Testimonial = () => {
  return (
    <div className="alumni">
      <div className="test-tittle">
        <h2 className="alumni-about-title">Testimonials</h2>
      </div>
      <div className="container">
        <div className="alumni-about">
          <div className="image-wrapper">
            <img src={alumni1Img} alt="Ruths image" />
            <h3 className="name">Denzel lawrence</h3>
            <p className="text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae, voluptates!
            </p>
          </div>
        </div>

        <div className="alumni-about">
          <div className="image-wrapper">
            <img src={alumni2Img} alt="Ruths image" />
            <h3 className="name">Diana Mwende</h3>
            <p className="text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae, voluptates!
            </p>
          </div>
        </div>

        <div className="alumni-about">
          <div className="image-wrapper">
            <img src={alumni3Img} alt="Ruths image" />
            <h3 className="name">Lydia Mwangi</h3>
            <p className="text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae, voluptates!
            </p>
          </div>
        </div>

        <div className="alumni-about">
          <div className="image-wrapper">
            <img src={alumni4Img} alt="Ruths image" />
            <h3 className="name">Mirriam Mugure</h3>
            <p className="text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae, voluptates!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
