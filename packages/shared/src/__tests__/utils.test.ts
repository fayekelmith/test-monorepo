import { describe, it, expect } from "vitest";
import { validateEmail, capitalize, formatResponse } from "../utils";

describe("validateEmail", () => {
  it("should return true for valid email", () => {
    expect(validateEmail("test@example.com")).toBe(true);
  });

  it("should return false for invalid email", () => {
    expect(validateEmail("invalid-email")).toBe(false);
  });
});

describe("capitalize", () => {
  it("should capitalize first letter", () => {
    expect(capitalize("hello")).toBe("Hello");
  });
});

describe("formatResponse", () => {
  it("should format success response", () => {
    const result = formatResponse({ id: 1 });
    expect(result.success).toBe(true);
    expect(result.data).toEqual({ id: 1 });
  });

  it("should format error response", () => {
    const result = formatResponse(null, "Error occurred");
    expect(result.success).toBe(false);
    expect(result.error).toBe("Error occurred");
  });
});
