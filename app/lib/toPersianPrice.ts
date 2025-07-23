import { toPersianNum } from "./toPersianNum";

export function toPersianPrice(price: number | string): string {
  // Convert price to string and reverse it
  const reversedString = price.toString().split("").reverse().join("");

  // Add commas every 3 digits
  const formattedString = reversedString
    .replace(/(\d{3})(?=\d)/g, "$1,")
    .split("")
    .reverse()
    .join("");

  // Convert digits to Persian
  const persianFormattedString = toPersianNum(formattedString);

  return persianFormattedString;
}
