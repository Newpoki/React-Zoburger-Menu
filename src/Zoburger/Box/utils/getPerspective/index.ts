import { TAnimation } from "../../../index.interface";

export function getPerspective(isActive: TAnimation) {
  switch (isActive) {
    case "3dx":
    case "3dx-r":
    case "3dy":
    case "3dy-r":
    case "3dxy":
    case "3dxy-r":
      return "80px";

    default:
      return "none";
  }
}
