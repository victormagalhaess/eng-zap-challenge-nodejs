import * as zapService from "../../Services/zapService.js";
import * as zapController from "../zapController.js";

describe("Testing zapController", () => {
  it("Must return 200", async () => {
    zapService.findAllZapRealties = jest.fn().mockImplementationOnce(() => {
      return "mock data";
    });
    const mockReq = { query: { page: 1, pageSize: 1 } };
    const mockRes = {
      status: jest.fn().mockImplementationOnce(() => mockRes),
      send: jest.fn().mockImplementationOnce(() => mockRes),
    };
    const mockValidationResult = jest.fn().mockImplementationOnce(() => {
      return {
        isEmpty: jest.fn().mockImplementationOnce(() => true),
      };
    });
    await zapController.getZapRealties(mockReq, mockRes, mockValidationResult);
    expect(mockRes.status).toBeCalledWith(200);
    expect(mockRes.send).toBeCalledWith("mock data");
  });

  it("Must return 400", async () => {
    zapService.findAllZapRealties = jest.fn().mockImplementationOnce(() => {
      return "mock data";
    });
    const mockReq = { query: { page: "a", pageSize: 1 } };
    const mockRes = {
      status: jest.fn().mockImplementationOnce(() => mockRes),
      send: jest.fn().mockImplementationOnce(() => mockRes),
    };
    const mockValidationResult = jest.fn().mockImplementationOnce(() => {
      return {
        isEmpty: jest.fn().mockImplementationOnce(() => false),
      };
    });
    await zapController.getZapRealties(mockReq, mockRes, mockValidationResult);
    expect(mockRes.status).toBeCalledWith(400);
    expect(mockRes.send).toBeCalledWith("Bad request.");
  });

  it("Must return 500", async () => {
    zapService.findAllZapRealties = jest.fn().mockImplementationOnce(() => {
      return "mock data";
    });
    const mockReq = { query: { page: "a", pageSize: 1 } };
    const mockRes = {
      status: jest.fn().mockImplementationOnce(() => mockRes),
      send: jest.fn().mockImplementationOnce(() => mockRes),
    };
    const mockValidationResult = jest.fn();
    await zapController.getZapRealties(mockReq, mockRes, mockValidationResult);
    expect(mockRes.status).toBeCalledWith(500);
    expect(mockRes.send).toBeCalledWith("Internal server error.");
  });
});
