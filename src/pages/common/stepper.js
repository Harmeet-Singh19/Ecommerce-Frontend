import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import ReceiptRoundedIcon from '@material-ui/icons/ReceiptRounded';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import StepConnector from '@material-ui/core/StepConnector';




/*background-color: #045de9;
background-image: linear-gradient(315deg, #045de9 0%, #09c6f9 74%);*/
const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        ' linear-gradient(315deg, #045de9 0%, #09c6f9 74%);',
    }
    ,
    backgroundColor:'#045de9'
  },
  completed: {
    '& $line': {
      backgroundImage:
        ' linear-gradient(315deg, #045de9 0%, #09c6f9 74%);',
        backgroundColor:'#045de9'
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      ' linear-gradient(315deg, #045de9 0%, #09c6f9 74%);',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    backgroundColor:'#045de9'
  },
  completed: {
    backgroundImage:
      ' linear-gradient(315deg, #045de9 0%, #09c6f9 74%);',
      backgroundColor:'#045de9'
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <ShoppingCartRoundedIcon />,
    2: <ReceiptRoundedIcon />,
    3: <LocalAtmIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Cart', 'Checkout', 'Order'];
}



export default function CustomizedSteppers(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(props.number);
  const steps = getSteps();

  

  return (
    <div className={classes.root}>
      
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      
    </div>
  );
}
