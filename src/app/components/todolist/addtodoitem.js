import React from "react";
import {
	ListItem,
	FormControl,
	InputLabel,
	Input,
	InputAdornment,
	IconButton,
	Box,
	TextField,
} from "@mui/material";
import { AddCircle as AddCircleIcon } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { addTodoItem } from "@/app/redux/slices/todolistSlice";

export default function AddTodoItem({}) {
	const [newTodoItem, setNewTodoItem] = React.useState("");
	const dispatch = useDispatch();

	return (
		<ListItem alignItems="flex-start">
			<FormControl
				sx={{
					width: "95%",
					margin: "0 auto",
					padding: "5px",
				}}
				variant="standard"
				color="primary"
			>
				<InputLabel htmlFor="standard-adornment-password">
					New Task
				</InputLabel>
				<Input
					id="standard-adornment-password"
					type="text"
					endAdornment={
						<InputAdornment
							position="end"
							sx={{ marginBottom: "10px" }}
						>
							<IconButton
								onClick={(e) => {
									dispatch(addTodoItem(newTodoItem));
									setNewTodoItem("");
								}}
							>
								<AddCircleIcon
									fontSize="large"
									color="primary"
								/>
							</IconButton>
						</InputAdornment>
					}
					value={newTodoItem}
					onChange={(e) => {
						setNewTodoItem(e.target.value);
					}}
					sx={{ fontSize: "20px" }}
				/>
			</FormControl>
		</ListItem>
	);
}
