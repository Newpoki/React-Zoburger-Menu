import { getPerspective } from ".";

describe("getPerspective", () => {
  it('should return "80px"', () => {
    const expected = "80px";

    expect(getPerspective("3dx")).toEqual(expected);
    expect(getPerspective("3dx-r")).toEqual(expected);
    expect(getPerspective("3dy")).toEqual(expected);
    expect(getPerspective("3dy-r")).toEqual(expected);
    expect(getPerspective("3dxy")).toEqual(expected);
    expect(getPerspective("3dxy-r")).toEqual(expected);
  });

  it('should return "none', () => {
    const expected = "none";

    expect(getPerspective("arrow")).toEqual(expected);
    expect(getPerspective("arrow-r")).toEqual(expected);
    expect(getPerspective("arrowalt")).toEqual(expected);
    expect(getPerspective("arrowalt-r")).toEqual(expected);
    expect(getPerspective("arrowturn")).toEqual(expected);
    expect(getPerspective("arrowturn-r")).toEqual(expected);
    expect(getPerspective("boring")).toEqual(expected);
    expect(getPerspective("collapse")).toEqual(expected);
    expect(getPerspective("collapse-r")).toEqual(expected);
    expect(getPerspective("elastic")).toEqual(expected);
    expect(getPerspective("elastic-r")).toEqual(expected);
    expect(getPerspective("emphatic")).toEqual(expected);
    expect(getPerspective("emphatic-r")).toEqual(expected);
    expect(getPerspective("minus")).toEqual(expected);
    expect(getPerspective("slider")).toEqual(expected);
    expect(getPerspective("slider-r")).toEqual(expected);
    expect(getPerspective("spin")).toEqual(expected);
    expect(getPerspective("spin-r")).toEqual(expected);
    expect(getPerspective("spring")).toEqual(expected);
    expect(getPerspective("spring-r")).toEqual(expected);
    expect(getPerspective("stand")).toEqual(expected);
    expect(getPerspective("stand-r")).toEqual(expected);
    expect(getPerspective("squeeze")).toEqual(expected);
    expect(getPerspective("vortex")).toEqual(expected);
    expect(getPerspective("vortex-r")).toEqual(expected);
  });
});
