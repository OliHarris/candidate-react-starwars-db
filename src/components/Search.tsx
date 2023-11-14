// Search used alongside the tables
import { Button, TextField } from "@mui/material";

interface SearchInterface {
  searchText: string;
  setSearchText: (value: string) => void;
  loadData: (event: string) => void;
  dataLoaded: boolean;
}

const Search = ({
  searchText,
  setSearchText,
  loadData,
  dataLoaded,
}: SearchInterface) => {
  const updateSearchText = (value: string) => {
    setSearchText(value);
  };
  const handleSearchButton = () => {
    loadData("&search=" + searchText);
  };

  return (
    <div>
      <TextField
        value={searchText}
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
