import axios from "axios";
import realtySingleton from "../realtySingleton.js";
jest.mock("axios");

describe("Testing realty singleton", () => {
  it("Should receive the singleton instance", async () => {
    axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve({ data: "mock data" }));
    await realtySingleton.loadRealties();
    expect(realtySingleton.realties).toEqual("mock data");
  });

  it("The instance must keep loaded, even if called from another function", () => {
    expect(realtySingleton.realties).toEqual("mock data");
  });
});
