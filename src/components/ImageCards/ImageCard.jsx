import PropTypes from "prop-types";

const ImageCard = ({source , name}) => {
  return (
    <div
      className={`flex-1 flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[0.625rem] box-border gap-[1.312rem] min-w-[15.25rem] max-w-[15.563rem] text-center text-[1.5rem] text-black font-cormo`}
    >
      <img
        className="self-stretch h-[17.25rem] relative max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src={source}
      />
      <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pl-[3.25rem] pr-[3.125rem]">
        <div className="flex-1 relative [text-shadow:0px_6px_4px_rgba(0,_0,_0,_0.1)] mq450:text-[1.188rem]">
          {name}
        </div>
      </div>
    </div>
  );
};

ImageCard.propTypes = {
  className: PropTypes.string,
};

export default ImageCard;
