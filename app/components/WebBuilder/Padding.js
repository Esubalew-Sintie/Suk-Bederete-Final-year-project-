import React from "react";

function Padding() {
	return (
		<>
			<h3>Padding in (px)</h3>
			<div className=" flex  gap-2">
				<div>
					<input
						type="number"
						className=" w-16 text-black"
						name="margin"
						defaultValue={0}
						id="margin"
					/>
					<button className=" text-center w-full">Left</button>
				</div>
				<div>
					<input
						type="number"
						defaultValue={0}
						className=" w-16 text-black"
						name="margin"
						id="margin"
					/>
					<button className=" text-center w-full">Right</button>
				</div>
				<div>
					<input
						type="number"
						defaultValue={0}
						className=" w-16 text-black"
						name="margin"
						id="margin"
					/>
					<button className=" text-center w-full">Top</button>
				</div>
				<div>
					<input
						type="number"
						defaultValue={0}
						className=" w-16 text-black"
						name="margin"
						id="margin"
					/>
					<button className=" text-center w-full">Bottom</button>
				</div>
			</div>
		</>
	);
}

export default Padding;
