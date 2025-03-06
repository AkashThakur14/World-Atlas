import { IoCallSharp } from "react-icons/io5";
import footerContact from "../../api/footerApi.json";
import { TbMailPlus } from "react-icons/tb";
import { MdPlace } from "react-icons/md";

export const Footer = () => {

    const footerIcon = {
        MdPlace: <MdPlace />,
        IoCallSharp: <IoCallSharp />,
        TbMailPlus:<TbMailPlus />
    }
    return (
        <footer className="footer-section">
            <div className="footer-wrapper container">
                {footerContact.map((curData, index) => {
                    const { icon, title, details } = curData;
                    return (
                        <div className="footer-contact" key={index}>
                            <span className="icon">{footerIcon[icon]}</span>
                            <div className="footer-text">
                                <h4>{title}</h4>
                                <p>{details}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Copyright Section */}
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Akash Singh. All rights reserved.</p>
            </div>
        </footer>
    );
};
