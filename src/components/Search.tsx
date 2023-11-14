// Search used alongside the tables
import { Button, TextField } from "@mui/material";

interface SearchInterface {
  searchText: string;
  setSearchText: (value: string) => void;
  setDataPageValue: (value: number) => void;
  loadData: (event: string) => void;
  dataLoaded: boolean;
}

const Search = ({
  searchText,
  setSearchText,
  setDataPageValue,
  loadData,
  dataLoaded,
}: SearchInterface) => {
  const updateSearchText = (value: string) => {
    setSearchText(value);
  };
  const handleSearchButton = () => {
    setDataPageValue(1);
    loadData("?page=1" + "&search=" + searchText);
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
