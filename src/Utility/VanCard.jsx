export default function VanCard(props) {
	return (
		<div className="vcard">
			<div className="vcard-img_container">
				<img src={props.img} alt="" className="vcard-img" />
			</div>
			<div className="vcard-details">
				<p className="vcard-name">{props.name}</p>
				<div className="vcard-price">
					<p className="amount">${props.price}</p>
				</div>
			</div>
			<div className="vcard-type">
				<i className={`${props.type}`}>{props.type}</i>
				<div className="perday">/day</div>
			</div>
		</div>
	);
}
