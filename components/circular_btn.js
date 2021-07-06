import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => {
    return {
        circle: {
            borderRadius: '50%',
            boxShadow: '0px 11.4667px 11.4667px rgba(54, 151, 253, 0.15)',
            width: '43px',
            height: '43px',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center'
          },
    }
});

const CircleButton = (props) => {
    const classes = useStyles();
    return (
        <ButtonBase>
            <div className={classes.circle}>
                {props.children}
            </div>
        </ButtonBase>
    );
}
 
export default CircleButton;