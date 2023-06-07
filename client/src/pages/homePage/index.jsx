import React from "react";
import "./index.scss";
import bigImage from "../../assets/images/front.svg";
import photo1 from "../../assets/images/Primary Photo Placeholder.svg";
import photo2 from "../../assets/images/Primary Photo Placeholder (1).svg";
import centerImage1 from "../../assets/images/group.svg";

const HomePage = () => {
  return (
    <div id="home">
      <section>
        <div className="headerText">
          <h1>Welcome to Pointer Calculator</h1>
        </div>
        <div className="bigImage">
          <img src={bigImage} alt="image" />
        </div>
      </section>
      <section>
        <div className="image">
          <img src={photo1} alt="image" />
        </div>
        <div className="text">
          <h1>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            blanditiis fuga quaerat, tempore quos veniam velit. Autem, nulla
            rerum, perferendis aliquam in, ut culpa repellendus quas architecto
            quia accusamus. Necessitatibus dolore hic aperiam quisquam,
            excepturi voluptatum molestias placeat repellendus dolor eveniet quo
            ipsum nisi dolores debitis. Voluptatem quis accusantium sequi?
            Veniam, delectus aliquam autem, laudantium vitae eos temporibus
            eveniet dolor rem ad nulla? Eum numquam obcaecati odit voluptatem
            ipsa repudiandae quasi error fuga eos a. Cupiditate aspernatur minus
            laudantium fugit pariatur vero aliquam architecto quam perferendis
          </h1>
        </div>
      </section>

      <div className="centerImage">
        <img src={centerImage1} alt="" />
      </div>

      <section>
        <div className="text">
          <h1>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            blanditiis fuga quaerat, tempore quos veniam velit. Autem, nulla
            rerum, perferendis aliquam in, ut culpa repellendus quas architecto
            quia accusamus. Necessitatibus dolore hic aperiam quisquam,
            excepturi voluptatum molestias placeat repellendus dolor eveniet quo
            ipsum nisi dolores debitis. Voluptatem quis accusantium sequi?
            Veniam, delectus aliquam autem, laudantium vitae eos temporibus
            eveniet dolor rem ad nulla? Eum numquam obcaecati odit voluptatem
            ipsa repudiandae quasi error fuga eos a. Cupiditate aspernatur minus
            laudantium fugit pariatur vero aliquam architecto quam perferendis
          </h1>
        </div>
        <div className="image">
          <img src={photo2} alt="image" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
