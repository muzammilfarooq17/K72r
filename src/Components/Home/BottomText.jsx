import { Link } from "react-router-dom";

const BottomText = () => {
  return (
    <div className="text-white font-[font1] flex items-center justify-center gap-[3vw] sm:gap-[4vw] w-full mt-auto mb-4 flex-shrink-0 z-10 px-4">
      <Link
        className="text-[6vw] sm:text-[5.5vw] hover:border-yellow-400 hover:text-yellow-400 leading-[6vw] sm:leading-[5.5vw] border-[3px] sm:border-[4px] border-white rounded-full px-6 sm:px-12 pt-3 sm:pt-4 pb-2 uppercase transition-colors duration-200"
        to='/Work'
      >
        Work
      </Link>
      <Link
        className="text-[6vw] sm:text-[5.5vw] hover:border-yellow-400 hover:text-yellow-400 leading-[6vw] sm:leading-[5.5vw] border-[3px] sm:border-[4px] border-white rounded-full px-6 sm:px-12 pt-3 sm:pt-4 pb-2 uppercase transition-colors duration-200"
        to='/Agency'
      >
        agency
      </Link>
    </div>
  );
};

export default BottomText;