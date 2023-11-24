import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitterIcon.svg";
import { ReactComponent as InstaIcon } from "../../assets/icons/instaIcon.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebookIcon.svg";

import "./footer.css";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer_wrapper">
				<div className="text_wrapper">
					<LogoIcon />
					<span className="descr">
						Powered by <span>Webflow</span> <br /> All rights reserved
						Wishbone+Partners, Inc. <span>Licensing</span>
					</span>
				</div>

				<div className="icons_wrapper">
					<TwitterIcon />
					<InstaIcon />
					<FacebookIcon />
				</div>
			</div>
		</div>
	);
};

export default Footer;
