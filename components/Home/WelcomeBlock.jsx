import { useStyles } from "./welcomeBlock";
import { mainHand, mainMarshmellow } from "../../images/index";

export default function WelcomeBlock() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div
        className={classes.handImage}
        style={{ backgroundImage: `url(${mainHand.src})` }}
      />

      <div className={classes.info}>
        <div className={`${classes.welcome} ${classes.info_common}`}>
          WELCOME TO
        </div>
        <h2 className={`${classes.header} ${classes.info_common} italic`}>
          The Nail Lab
        </h2>
        <p className={`${classes.para} ${classes.info_common}`}>
          I&apos;m a paragraph.It&apos;s easy. Just click “Edit Text” or double
          click me to add your own content and make changes to the font.
        </p>
        <p className={`${classes.para} ${classes.info_common}`}>
          This is a great space to write long text about your company and your
          services. You can use this space to go into a little more detail about
          your company. Tell your visitors the story of how you came up with the
          idea for your business and what makes you different from your
          competitors.
        </p>
      </div>

      <div
        className={classes.marshmellowImage}
        style={{ backgroundImage: `url(${mainMarshmellow.src})` }}
      />
    </div>
  );
}
