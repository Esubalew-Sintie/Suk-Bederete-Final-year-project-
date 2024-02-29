import {useState} from "react";
import Style from "./RightSidbar.module.css";
import EditImage from "./EditImage";
import EditText from "./EditText";
function RightSidebar() {
	const [isText, setText] = useState(true);
	return (
		<div className=" bg-blueGray-800 text-white h-screen px-3">
			{isText ? <EditText /> : <EditImage />}
		</div>
	);
}

export default RightSidebar;
