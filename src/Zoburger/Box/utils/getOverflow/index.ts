import { TAnimation } from "../../../index.interface";

export function getOverflow(animation: TAnimation) {
  switch (animation) {
    case "emphatic":
    case "emphatic-r":
      return "hidden";

    default:
      return "visible";
  }
}
