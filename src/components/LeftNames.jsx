import PropTypes from 'prop-types';

function LeftNames({ number, text, isActive }) {
  
  return (
    <div className="flex items-center gap-4 font-bold">
      <h1
        className={`rounded-full border-solid border pt-[5.6px] pb-[5.6px] pl-[12.8px] pr-[12.8px] ${isActive ? 'bg-[#bfe2fd] text-inherit' : 'text-white border-white'}`}
      >
        {number}
      </h1>
      <span className="flex flex-col">
        <span className="text-[#d5d8e5] text-sm tracking-normal">STEP {number}</span>
        <span className="text-white tracking-widest text-sm">{text}</span>
      </span>
    </div>
  );
}

LeftNames.propTypes = {
  number: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default LeftNames;
