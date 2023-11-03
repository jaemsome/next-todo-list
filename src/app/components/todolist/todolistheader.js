import React from "react";
import { Box } from "@mui/material";
import TotalItems from "./totalitems";
import TotalCompletedItems from "./totalcompleteditems";
import DeleteCompletedItems from "./deletecompleteditems";
import DeleteItems from "./deleteItems";

export default function TodoListHeader({}) {
	const style = {
		marginRight: "10px",
	};

	return (
		<Box
			component="div"
			sx={{
				backgroundColor: "grey",
				width: "100%",
				textAlign: "right",
				padding: "10px",
			}}
		>
			<TotalItems label="Tasks" sx={style} />
			<TotalCompletedItems label="Tasks Done" sx={style} />
			<DeleteCompletedItems sx={style} />
			<DeleteItems />
		</Box>
	);
}
