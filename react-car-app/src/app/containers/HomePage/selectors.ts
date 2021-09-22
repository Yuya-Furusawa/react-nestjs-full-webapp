import { createSelector } from "reselect";
import { IRootAppState } from "../../../typings";

const selectHomePage = (state: IRootAppState) => state.homePage;

export const makeSelectTopCars = createSelector(
  selectHomePage,
  (homepage) => homepage.topCars
);