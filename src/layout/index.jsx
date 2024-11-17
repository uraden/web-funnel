
import PropTypes from 'prop-types';

const Wrapper = ({ children }) => {
    return (
      <div className=''>
        <div className="flex mx-[19px] justify-center backdrop-blur-sm bg-white/30 py-[15px] rounded-[10px] mb-[10px]">
          <img src="images/logo.png" alt="logo" className="w-[35.1px] h-[28.29px]"/>
          <div className="text-white text-[20px] font-black	ml-[10px]">
          ELIZIUM
          </div>
        </div>
        {children}
      </div>
    );
    }

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
};
  
  export default Wrapper;
  

  