import React from "react";
import PropTypes from "prop-types";
import { Chip, Box } from "@mui/material";

const shapeStyles = { bgcolor: "#FFF", color: "#000", width: 10, height: 10 };
const shapeCircleStyles = { borderRadius: "50%", padding: "0 3px" };
const circle = (value = 0) => (
	<Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }}>
		{value}
	</Box>
);

export default function ChipBadge({
	label = "Label Here",
	badge = 0,
	color = "primary",
	sx = {},
}) {
	return (
		<Chip
			color={color}
			label={
				<>
					<Box component="span" sx={{ marginRight: "5px" }}>
						{label}
					</Box>
					{circle(badge)}
				</>
			}
			sx={sx}
		/>
	);
}

ChipBadge.propType = {
	/**
	 * Chip Label
	 */
	label: PropTypes.string,
	/**
	 * Badge Count
	 */
	badge: PropTypes.number,
	/**
	 * Chip Color
	 */
	color: PropTypes.string,
	/**
	 * Additional styles
	 */
	sx: PropTypes.object,
};
