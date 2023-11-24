// Primary app navigation
import { useContext, CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

import { UserNameContext } from "./context/UserNameProvider";

interface HeaderInterface {
  type: string;
  dataLoaded: boolean;
}

const Header = ({ type, dataLoaded }: HeaderInterface) => {
  const { userName } = useContext(UserNameContext);

  const peopleHighlightStyle = {
    fontWeight: type === "people" ? "bold" : "normal",
    pointerEvents: (type !== "people" && dataLoaded
      ? "auto"
      : "none") as CSSProperties["pointerEvents"],
  };
  const starshipsHighlightStyle = {
    fontWeight: type === "starships" ? "bold" : "normal",
    pointerEvents: (type !== "starships" && dataLoaded
      ? "auto"
      : "none") as CSSProperties["pointerEvents"],
  };

  return (
    <Box
      sx={{
        typography: "body1",
        "& > :not(style) + :not(style)": {
          ml: 2,
        },
      }}
      style={{ textAlign: "center" }}
    >
      <>
        <Link to="/candidate-react-starwars-db/people" style={peopleHighlightStyle}>
          People
        </Link>
        <Link
          to="/candidate-react-starwars-db/starships"
          style={starshipsHighlightStyle}
        >
          Starships
        </Link>
      </>
      <span>
        <em>{userName}</em>
      </span>
    </Box>
  );
};
export default Header;
