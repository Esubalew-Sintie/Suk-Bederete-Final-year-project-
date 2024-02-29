import Image from "next/image";
import {AiFillStar} from "react-icons/ai";

const Card = ({id, text}) => {
	return (
		<div className=" border-2 flex flex-col items-center  rounded-lg  w-full bg-inherit ">
			<Image
				src={text.bg}
				alt={text.text}
				width={200}
				height={200}
				className=" w-full "
				priority
			/>
			<div>
				<h3>Name</h3>
				<p>Lorem ipsum dolor sit amet consectetu</p>
				<p className=" font-semibold text-red-500">$34</p>
				<p className=" flex ">
					<AiFillStar />
					<AiFillStar />
					<AiFillStar />
					<AiFillStar />
					<AiFillStar />
				</p>
			</div>
		</div>
	);
};
export default Card;
