import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

export default function BoxIcon({
	label = "Label Here",
	boxColor = "primary",
	icon = <></>,
}) {
	return (
		<Box
			sx={{
				bgcolor: boxColor,
				padding: "6px",
				fontSize: "14px",
				color: "#FFF",
			}}
			component="span"
			color={boxColor}
		>
			{icon} {label}
		</Box>
	);
}

BoxIcon.propType = {
	/**
	 * Box Color
	 */
	boxColor: PropTypes.string,
	/**
	 * Icon
	 */
	icon: PropTypes.node,
	/**
	 * Icon Color
	 */
	iconColor: PropTypes.string,
};
