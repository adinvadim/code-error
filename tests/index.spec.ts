import { CodeError, isCodeError } from "../src";

describe("CodeError", () => {
  it("should properly initialize with provided code and default message", () => {
    const code = "ERROR_CODE";
    const error = new CodeError({ code });

    expect(error.code).toBe(code);
    expect(error.message).toBe(`CodeError with code ${code}`);
    expect(error.payload).toBeUndefined();
  });

  it("should properly initialize with provided code, message, and payload", () => {
    const code = "ERROR_CODE";
    const message = "Custom error message";
    const payload = { detail: "Some error details" };
    const error = new CodeError({ code, message, payload });

    expect(error.code).toBe(code);
    expect(error.message).toBe(message);
    expect(error.payload).toBe(payload);
  });

  it("should use default message if message is not provided", () => {
    const code = "ERROR_CODE";
    const error = new CodeError({ code });

    expect(error.message).toBe(`CodeError with code ${code}`);
  });
});

describe("isCodeError", () => {
  it("should return true if value is a CodeError instance", () => {
    const code = "ERROR_CODE";
    const error = new CodeError({ code });

    expect(isCodeError(error)).toBe(true);
  });

  it("shoud return true for object with code property", () => {
    const code = "ERROR_CODE";
    const error = { code };

    expect(isCodeError(error)).toBe(true);
  });

  it("should return false if value is not a CodeError instance", () => {
    expect(isCodeError(new Error())).toBe(false);
    expect(isCodeError({})).toBe(false);
    expect(isCodeError(null)).toBe(false);
    expect(isCodeError(undefined)).toBe(false);
  });
});
