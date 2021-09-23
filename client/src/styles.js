import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '45px',
        width: '80%',
        left: '120px'
    },
    heading: {
        color: 'rgba(0,183,255, 1)',
        fontFamily: ["'Work Sans'", 'sans-serif'].join(','),
        fontSize: "2.5rem"

    },
    image: {
        marginLeft: '15px',
        height: '45px',
        width: '45px'
    },
}));
