// Table of people data
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import {
  Paper,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@mui/material";

import Header from "../Header";
import Search from "../Search";

interface TablePageInterface {
  type: string;
}

const TablePage = ({ type }: TablePageInterface) => {
  const [pageName, setPageName] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("");
  const [starWarsData, setStarWarsData] = useState<[]>([]);
  const [starWarsDataCount, setStarWarsDataCount] = useState<number>(0);
  const [dataPageValue, setDataPageValue] = useState(1);
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);

  const loadData = useCallback(
    (queryString: string) => {
      const displayResults = (dataUrl: string) => {
        setStarWarsData([]);
        setDataLoaded(false);
        axios
          .get(queryString ? dataUrl + queryString : dataUrl)
          .then((response) => {
            console.log(response);
            const data = response.data;
            setStarWarsData(data.results);
            setStarWarsDataCount(data.count);
          })
          .catch((error) => {
            console.log(error);
          })
          .then(() => {
            setDataLoaded(true);
          });
      };

      switch (type) {
        case "people":
          setPageName("People");
          displayResults("https://swapi.dev/api/people?page=" + dataPageValue);
          break;
        case "starships":
          setPageName("Starships");
          displayResults(
            "https://swapi.dev/api/starships?page=" + dataPageValue
          );
          break;
        default:
      }
    },
    [dataPageValue, type]
  );
  useEffect(() => {
    setSearchText("");
    loadData("");
  }, [loadData]);

  return (
    <div style={{ margin: "0 0.5em" }}>
      <Header type={type} dataLoaded={dataLoaded} />
      <hr />
      <Typography variant="h5" sx={{ marginBottom: "10px" }}>
        {pageName}
      </Typography>
      <Search
        searchText={searchText}
        setSearchText={setSearchText}
        loadData={loadData}
        dataLoaded={dataLoaded}
      />
      {!dataLoaded && (
        <div>
          <br />
          Loading...
          <hr />
        </div>
      )}
      {dataLoaded && !starWarsData.length && (
        <div>
          <br />
          No data
          <hr />
        </div>
      )}
      {starWarsData.length > 0 && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 400 }}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Birth Year</TableCell>
              </TableRow>
            </TableHead>
            {type === "people" && (
              <TableBody>
                {starWarsData.map(
                  (
                    item: {
                      name: string;
                      height: string;
                      mass: string;
                      hair_color: string;
                      skin_color: string;
                      eye_color: string;
                      birth_year: string;
                      gender: string;
                      homeworld: string;
                      films: string[];
                      species: string[];
                      vehicles: string[];
                      starships: string[];
                      created: string;
                      edited: string;
                      url: string;
                    },
                    index: number
                  ) => (
                    <TableRow key={index}>
                      <TableCell align="left">{item.name}</TableCell>
                      <TableCell align="left">{item.gender}</TableCell>
                      <TableCell align="left">{item.birth_year}</TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            )}
            {type === "starships" && (
              <TableBody>
                {starWarsData.map(
                  (
                    item: {
                      name: string;
                      model: string;
                      manufacturer: string;
                      cost_in_credits: string;
                      length: string;
                      max_atmosphering_speed: string;
                      crew: string;
                      passengers: string;
                      cargo_capacity: string;
                      consumables: string;
                      hyperdrive_rating: string;
                      MGLT: string;
                      starship_class: string;
                      pilots: string[];
                      films: string[];
                      created: string;
                      edited: string;
                      url: string;
                    },
                    index: number
                  ) => (
                    <TableRow key={index}>
                      <TableCell align="left">{item.name}</TableCell>
                      <TableCell align="left">{item.model}</TableCell>
                      <TableCell align="left">{item.manufacturer}</TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            )}
          </Table>
        </TableContainer>
      )}
      <Pagination
        count={Math.ceil(starWarsDataCount / 10)}
        onChange={(_e, value) => setDataPageValue(value)}
        disabled={!dataLoaded || !starWarsData.length}
      />
    </div>
  );
};
export default TablePage;
