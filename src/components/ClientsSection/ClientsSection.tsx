import MarbleBg from "../../assets/img/bg/marble_bg.png";
import SwirlingBg from "../../assets/img/bg/swirling_bg.png";

import { ReactComponent as ClientHillIcon } from "../../assets/icons/clientHill.svg";
import { ReactComponent as ClientRiksIcon } from "../../assets/icons/clientRiksgransen.svg";
import { ReactComponent as ClientStudioIcon } from "../../assets/icons/clientStudio.svg";
import { ReactComponent as ClientChillIcon } from "../../assets/icons/studioChill.svg";

import "./clientsSection.css";

const ClientsSection = () => {
	return (
		<div className="clietnts">
			<div className="marble_wrapper">
				<img src={MarbleBg} alt="marbel_bg" className="marble" />
				<div className="text_wrapper">
					<div>
						<div className="title">The marble staircase</div>
						<div className="descr">
							Lorem ipsum dolor sit amet, dolor sit amet dolor sit amet.
						</div>
					</div>
				</div>
			</div>

			<div className="clietnts_section">
				<div className="clietnts_wrapper">
					<div className="text_wrapper">
						<div>
							<div className="sub_title">prior clients</div>
							<div className="title">Happy customers.</div>
							<div className="descr">
								Morbi neque ex, condimentum dapibus congue et, vulputate ut
								ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et
								nisi ultrices, ut faucibus orci tincidunt.
							</div>
						</div>
					</div>
					<div className="icons_wrapper">
						<div className="icon_wrapper">
							<ClientHillIcon />
						</div>
						<div className="icon_wrapper">
							<ClientRiksIcon />
						</div>
						<div className="icon_wrapper">
							<ClientStudioIcon />
						</div>
						<div className="icon_wrapper">
							<ClientChillIcon />
						</div>
					</div>
				</div>
			</div>

			<div className="swirling_wrapper">
				<img src={SwirlingBg} alt="swirling_bg" className="swirling" />
				<div className="text_wrapper">
					<div>
						<div className="title">The swirling staircase</div>
						<div className="descr">
							Lorem ipsum dolor sit amet, dolor sit amet dolor sit amet.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ClientsSection;
