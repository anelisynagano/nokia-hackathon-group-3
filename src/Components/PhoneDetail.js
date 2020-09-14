import React from 'react';
import battery from '../icons/clean-battery.svg';
import fourG from '../icons/4g.svg';
import camera from '../icons/camera.jpg';
import flashLight from '../icons/Flashlight-512.png'

function PhoneDetail({ phoneDetail }) {
	console.log(phoneDetail);
	console.log(phoneDetail.pictures);

	return (
		<div>
			<div className="phoneDetailsTitle">
				<h1>{phoneDetail.model}</h1>
			</div>

			<div className="phoneDetailsOuterDiv">
				<div className="phoneDetailsImageDiv">
					<img className="phoneDetailsImage" src={phoneDetail.pictures[1]} />
				</div>

	
					<div className="phoneDetailsDetailsInner">
						<div className="phoneFeature">
							<div>
								<img src={battery} className="batteryImage" />
							</div>

							<h3>{phoneDetail.talkAndStandby}</h3>
						</div>

						{phoneDetail.networks.includes('LTE') && (
							<div className="phoneFeature">
                <div>
                  <img src={fourG} className="fourGImage" />
                </div>
		
								<h3>{phoneDetail.networks}</h3>
							</div>
						)}

						{phoneDetail.camera && (
							<div className="phoneFeature">
                <div>
                <img src={camera} className="cameraImage" />
                  </div>
								<h3>{phoneDetail.camera}</h3>
							</div>
						)}
            	{phoneDetail.torch == "Yes" && (
							<div className="phoneFeature">
                <div>
                <img src={flashLight} className="cameraImage" />
                  </div>
								<h3>Flashlight</h3>
							</div>
						)}

						<button className="buyButton">Buy</button>
					</div>
				</div>

		</div>
	);
}

export default PhoneDetail;
