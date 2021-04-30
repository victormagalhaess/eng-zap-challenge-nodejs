import axios from "axios";
jest.mock("axios");

import realtyRepository from "../realtyRepository.js";

describe("Test realtyRepository", () => {
  it("realtyRepository should fetch data", async () => {
    axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve({ data: "mock data" }));
    const expectedResult = "mock data";
    const result = await realtyRepository.findAllRealties("/");
    expect(result).toEqual(expectedResult);
  });

  it("realtyRepository should throw exception", async () => {
    expect.assertions(1);
    axios.get = jest.fn().mockImplementationOnce(() => {
      throw "error";
    });
    try {
      await realtyRepository.findAllRealties("/");
    } catch (err) {
      expect(err).toEqual(`Error fetching the list of realties: error`);
    }
  });
});
