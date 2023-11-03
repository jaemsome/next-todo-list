import React from "react";
import { PropTypes } from "prop-types";
import { Button } from "@mui/material";
import { DeleteSweep as DeleteSweepIcon } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { deleteAllItems } from "@/app/redux/slices/todolistSlice";

export default function DeleteItems({
	color = "error",
	size = "small",
	sx = {},
}) {
	const dispatch = useDispatch();

	return (
		<Button
			color={color}
			variant="contained"
			size={size}
			sx={{ textTransform: "capitalize", ...sx }}
			startIcon={<DeleteSweepIcon />}
			onClick={() => {
				dispatch(deleteAllItems());
			}}
		>
			Tasks
		</Button>
	);
}

DeleteItems.propType = {
	/**
	 * Font Color
	 */
	color: PropTypes.string,
	/**
	 * Size
	 */
	size: PropTypes.string,
	/**
	 * Additional styles
	 */
	sx: PropTypes.object,
};
