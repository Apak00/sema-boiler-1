import {TypographyOptions} from "@material-ui/core/styles/createTypography";
import {Colors, cosmosSpecialFont} from "./constants";

const typography: TypographyOptions = {
  fontFamily: ["Open Sans", "sans-serif"].join(","),
  htmlFontSize: 10,
  body1: {
    fontSize: "1.2rem", // used in cell text
    color: Colors.COSMOS_BLAU
  },
  body2: {
    fontSize: "1.2rem",
    color: Colors.COSMOS_BLAU
  },
  subtitle1: {
    fontSize: "1.2rem",
    color: Colors.COSMOS_BLAU
  },
  subtitle2: {
    fontSize: "1.1rem",
    color: Colors.COSMOS_BLAU
  },
  h1: {
    fontFamily: cosmosSpecialFont,
    fontWeight: "normal",
    fontSize: "2.4rem"
  },
  h2: {
    fontFamily: cosmosSpecialFont,
    fontWeight: "normal",
    fontSize: "2.0rem"
  },
  h3: {
    fontFamily: cosmosSpecialFont,
    fontWeight: "normal",
    fontSize: "1.75rem"
  },
  h4: {
    fontSize: "1.2rem", // used in form label
    lineHeight: 1.2,
    fontWeight: 700,
    color: Colors.COSMOS_BLAU
  },
  h5: {
    fontFamily: cosmosSpecialFont,
    fontSize: "2.0rem", // used in widget header
    lineHeight: 1.4,
    fontWeight: 400,
    color: Colors.COSMOS_BLAU
  },
  h6: {
    fontSize: "1.1rem", // used in column header
    lineHeight: 1.6,
    fontWeight: 700,
    color: Colors.COSMOS_BLAU
  }
};

export default typography;
