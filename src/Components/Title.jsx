// import PropTypes from 'prop-types'
// import Container from './Container';
const Title = ({ heading, subHeading }) => {
    return (
        <div className=" lg:w-7/12 mx-auto my-5 text-center">
            <h3 className="text-xl md:text-3xl font-extrabold text-[#9AA115] py-2 ">{heading}</h3>
            <p className=" max-md:text-sm  pb-2 text-sm font-semibold"> {subHeading}</p>
        </div>

    );
};
// Title.propTypes = {
//     heading: PropTypes.string.isRequired,
//     subHeading: PropTypes.string.isRequired
// }
export default Title;