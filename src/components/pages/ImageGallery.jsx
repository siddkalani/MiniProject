import PropTypes from "prop-types";
import FeatureCard from "../FeatureCard";
import {features} from "../../assets/features/features"

const ImageGallery = ({ className = "" }) => {
  return (
    <div id="F">
      <section
        className={`self-stretch flex flex-col relative items-center justify-center bg-white`}
        id="gallery"
      >
        <div
          id="features"
          className="w-full h-fit flex flex-col items-center font-Poppins justify-center gap-20 bg-white text-black py-5 md:py-[var(--section-padding)]"
        >
          <h1 className="text-4xl">Benefits of HealGrimage</h1>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5 md:gap-20">
            {features.map((feature, index) => (
              <FeatureCard
                image={feature.image}
                name={feature.name}
                key={index}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

ImageGallery.propTypes = {
  className: PropTypes.string,
};

export default ImageGallery;
