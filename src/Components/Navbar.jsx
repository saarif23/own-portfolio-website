import { NavLink } from 'react-router-dom';
import Container from './Container';


const Navbar = () => {

    return (


        <Container>
            <div className="flex justify-between items-center py-3 mt-5 ">
                <div className="">
                    <h3 className='text-[#9AA115] font-extrabold text-2xl'>Arif Hossain</h3>
                </div>
                <div className="lg:flex justify-center  items-center gap-10">
                    <div>
                        <ul className='hidden  lg:flex gap-5'>
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#9AA115] font-semibold shadow-xl px-5 py-3" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#9AA115] font-semibold shadow-xl px-5 py-3" : ""
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/service"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#9AA115] font-semibold shadow-xl px-5 py-3" : ""
                                    }
                                >
                                    Service
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/projects"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#9AA115] font-semibold shadow-xl px-5 py-3" : ""
                                    }
                                >
                                    Projects
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/blogs"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#9AA115] font-semibold shadow-xl px-5 py-3" : ""
                                    }
                                >
                                    Blogs
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/resume"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#9AA115] font-semibold shadow-xl px-5 py-3" : ""
                                    }
                                >
                                    Resume
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#9AA115] font-semibold shadow-xl px-5 py-3" : ""
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>


                        </ul>
                    </div>
                </div>

            </div>
        </Container>

    );
};

export default Navbar;