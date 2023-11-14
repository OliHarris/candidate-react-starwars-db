// Primary app navigation
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

import { UserNameContext } from "./context/UserNameProvider";

interface HeaderInterface {
  type: string;
  dataLoaded: boolean;
}

const Header = ({ type, dataLoaded }: HeaderInterface) => {
  const { userName } = useContext(UserNameContext);

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
      {dataLoaded && (
        <>
          <Link
            to="/candidate-react-web-ui/people"
            style={
              type === "people"
                ? { fontWeight: "bold" }
                : { fontWeight: "normal" }
            }
          >
            People
          </Link>
          <Link
            to="/candidate-react-web-ui/starships"
            style={
              type === "starships"
                ? { fontWeight: "bold" }
                : { fontWeight: "normal" }
            }
          >
            Starships
          </Link>
        </>
      )}
      <span>
        <em>{userName}</em>
      </span>
    </Box>
  );
};
export default Header;
