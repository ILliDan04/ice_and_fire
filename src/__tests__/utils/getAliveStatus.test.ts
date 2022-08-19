import { getAliveStatus } from "../../utils/getAliveStatus";

describe("getAliveStatus", () => {
  it('should return "Unknown" if the is no birth and death', () => {
    const result = getAliveStatus("", "");
    expect(result).toBe("Unknown");
  });

  it('should return "No" if birth is not defined death is defined', () => {
    const result = getAliveStatus("", "Defined");
    expect(result).toBe("No");
  });

  it('should return "Yes" if the birth is defined death is not defined', () => {
    const result = getAliveStatus("Defined", "");
    expect(result).toBe("Yes");
  });

  it('should return "No, died at 90 years old" if both the birth and death are defined', () => {
    const result = getAliveStatus("900", "990");
    expect(result).toBe("No, died at 90 years old");
  });
});
