import AppBar from "@mui/material/AppBar";
import { Typography } from "@mui/material";

function Appbar() {
	return (
		<div>
			<AppBar
				position="static"
				style={{ display: "flex", justifyContent: "space-between" }}
			>
				<div>
					<Typography variant={"h4"} style={{ marginLeft: 5, padding: 2 }}>
						{" "}
						Todo List
					</Typography>
				</div>
			</AppBar>
		</div>
	);
}

export default Appbar;
