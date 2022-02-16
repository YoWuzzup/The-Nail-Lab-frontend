import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  treatment: {
    height: "475px",
    flexBasis: "30%",
    backgroundColor: "#fff",
    display: "flex",
    flexFlow: "column",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexBasis: "100%",
      width: "100%",
      margin: "0 0 50px",
    },
  },
  treatment_header: {
    color: "#333",
    fontSize: "76px",
    fontStyle: "italic",
    transform: "translateY(-20%)",
    width: "80%",
    margin: "0 auto",
    whiteSpace: "pre-wrap",
    [theme.breakpoints.down("lg")]: {
      fontSize: "50px",
    },
  },
  treatment_image: {
    width: "100%",
    height: "210px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    alignSelf: "flex-end",
  },
}));

export default function Treatment({ item, length }) {
  const classes = useStyles();
  const itemName = item.i.replace(" ", "\n");

  return (
    <div className={classes.treatment}>
      <header className={classes.treatment_header}>
        {length < 10 ? `0${length}` : length} / <br />
        {itemName}
      </header>
      <Link href={`/treatments`} passHref={true}>
        <div
          className={classes.treatment_image}
          style={{ backgroundImage: `url(${item.img})`, cursor: "pointer" }}
        />
      </Link>
    </div>
  );
}
