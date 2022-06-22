import React from "react";
import CountUp from 'react-countup';


function CardDisplay(props) {
	const array = props.array;
	return (
		<div>
			{array.map(function (array) {
				return (
					<div>
						<p>{array.id}</p>
						<div className="flex-container">
							<div className="clockIcon"></div>
							<CountUp
                               start={0}
                               end={60}
                               duration={3600}
                               separator=" "
                               decimals={0}
                               suffix="mins"
                               onEnd="Long time "
                               onStart={() => console.log('Started! 💨')}
                               >
                           </CountUp>
							{/* <p>{array.postTime}</p> */}
							<p>{array.name}</p>
							<p>Room: {array.room_number}</p>
							<p>Question: {array.message}</p>
							<div>
								<p>{array.keyword}</p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default CardDisplay;
