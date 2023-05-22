import { Lobster_Two } from "next/font/google";
import { Kanit } from "next/font/google";

export const secondFont = Lobster_Two({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const mainFont = Kanit({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
