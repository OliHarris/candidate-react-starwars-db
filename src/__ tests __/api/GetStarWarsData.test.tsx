// based on: https://ooanishoo.medium.com/mock-axios-with-jest-and-react-testing-library-in-typescript-react-1c084d9ea880

import getStarWarsData from "../../api/getStarWarsData";
import peoplePage1 from "../../api/__ mocks __/peoplePage1.json";
import starshipsPage1 from "../../api/__ mocks __/starshipsPage1.json";
import peopleLukePage1 from "../../api/__ mocks __/peopleLukePage1.json";

import axios, { AxiosResponse, AxiosHeaders } from "axios";
// Mock jest and set the type
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

// describe block to organise test
describe("get-star-wars-data-tests", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("With no query string, return people list", async () => {
    // our desired output
    const peopleData = peoplePage1;

    // prepare the response we want to get from axios
    const mockedResponse: AxiosResponse = {
      data: peopleData,
      status: 200,
      statusText: "OK",
      headers: {},
      config: {
        headers: {} as AxiosHeaders,
      },
    };
    // make the mock return the custom axios response
    mockedAxios.get.mockResolvedValueOnce(mockedResponse);
    expect(axios.get).not.toHaveBeenCalled();
    const data = await getStarWarsData(
      "",
      "https://swapi.dev/api/people",
      () => {}
    );
    expect(axios.get).toHaveBeenCalled();
    expect(data).toEqual(peopleData);
  });

  test("With no query string, return starships list", async () => {
    // our desired output
    const starshipsData = starshipsPage1;

    // prepare the response we want to get from axios
    const mockedResponse: AxiosResponse = {
      data: starshipsData,
      status: 200,
      statusText: "OK",
      headers: {},
      config: {
        headers: {} as AxiosHeaders,
      },
    };
    // make the mock return the custom axios response
    mockedAxios.get.mockResolvedValueOnce(mockedResponse);
    expect(axios.get).not.toHaveBeenCalled();
    const data = await getStarWarsData(
      "",
      "https://swapi.dev/api/starships",
      () => {}
    );
    expect(axios.get).toHaveBeenCalled();
    expect(data).toEqual(starshipsData);
  });

  test("With 'luke' query string, return people list", async () => {
    // our desired output
    const peopleData = peopleLukePage1;

    // prepare the response we want to get from axios
    const mockedResponse: AxiosResponse = {
      data: peopleData,
      status: 200,
      statusText: "OK",
      headers: {},
      config: {
        headers: {} as AxiosHeaders,
      },
    };
    // make the mock return the custom axios response
    mockedAxios.get.mockResolvedValueOnce(mockedResponse);
    expect(axios.get).not.toHaveBeenCalled();
    const data = await getStarWarsData(
      "luke",
      "https://swapi.dev/api/people",
      () => {}
    );
    expect(axios.get).toHaveBeenCalled();
    expect(data).toEqual(peopleData);
  });

  test("Test people endpoint error", async () => {
    // prepare the response we want to get from axios
    const mockedResponse: AxiosResponse = {
      data: {},
      status: 500,
      statusText: "Internal Server Error",
      headers: {},
      config: {
        headers: {} as AxiosHeaders,
      },
    };
    // make the mock return the custom axios response
    mockedAxios.get.mockRejectedValueOnce(mockedResponse);
    expect(axios.get).not.toHaveBeenCalled();
    const data = await getStarWarsData(
      "",
      "https://swapi.dev/api/people",
      () => {}
    );
    expect(axios.get).toHaveBeenCalled();
    expect(data).toEqual(undefined);
  });
});
