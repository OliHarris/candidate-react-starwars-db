// Search used alongside the tables
import { useState } from "react";
import { Button, TextField } from "@mui/material";

interface SearchInterface {
  loadData: (queryString: string) => void;
  dataLoaded: boolean;
}

const Search = ({ loadData, dataLoaded }: SearchInterface) => {
  const [searchText, setSearchText] = useState<string>("");
  const updateSearchText = (value: string) => {
    setSearchText(value);
  };
  const handleSearchButton = () => {
    loadData("&search=" + searchText);
  };

  return (
    <div>
      <TextField
        label="Search"
        size="small"
        onChange={(e) => {
          updateSearchText(e.target.value);
        }}
      />
      <Button onClick={() => handleSearchButton()} disabled={!dataLoaded}>
        Search
      </Button>
    </div>
  );
};
export default Search;
