import { getOverflow } from ".";

describe("getOverflow", () => {
  it('should return "hidden"', () => {
    const expected = "hidden";

    expect(getOverflow("emphatic")).toEqual(expected);
    expect(getOverflow("emphatic-r")).toEqual(expected);
  });

  it('should return "visible', () => {
    const expected = "visible";

    expect(getOverflow("3dx")).toEqual(expected);
    expect(getOverflow("3dx-r")).toEqual(expected);
    expect(getOverflow("3dy")).toEqual(expected);
    expect(getOverflow("3dy-r")).toEqual(expected);
    expect(getOverflow("3dxy")).toEqual(expected);
    expect(getOverflow("3dxy-r")).toEqual(expected);
    expect(getOverflow("arrow")).toEqual(expected);
    expect(getOverflow("arrow-r")).toEqual(expected);
    expect(getOverflow("arrowalt")).toEqual(expected);
    expect(getOverflow("arrowalt-r")).toEqual(expected);
    expect(getOverflow("arrowturn")).toEqual(expected);
    expect(getOverflow("arrowturn-r")).toEqual(expected);
    expect(getOverflow("boring")).toEqual(expected);
    expect(getOverflow("collapse")).toEqual(expected);
    expect(getOverflow("collapse-r")).toEqual(expected);
    expect(getOverflow("elastic")).toEqual(expected);
    expect(getOverflow("elastic-r")).toEqual(expected);
    expect(getOverflow("minus")).toEqual(expected);
    expect(getOverflow("slider")).toEqual(expected);
    expect(getOverflow("slider-r")).toEqual(expected);
    expect(getOverflow("spin")).toEqual(expected);
    expect(getOverflow("spin-r")).toEqual(expected);
    expect(getOverflow("spring")).toEqual(expected);
    expect(getOverflow("spring-r")).toEqual(expected);
    expect(getOverflow("stand")).toEqual(expected);
    expect(getOverflow("stand-r")).toEqual(expected);
    expect(getOverflow("squeeze")).toEqual(expected);
    expect(getOverflow("vortex")).toEqual(expected);
    expect(getOverflow("vortex-r")).toEqual(expected);
  });
});
