import { makeStyles } from '@material-ui/core/styles';

export const appStyles = makeStyles({
    app: {
        minHeight: '100vh',
        backgroundColor: '#555555',
    },
}, {index: 1});
export const navBarStyles = makeStyles((theme) => ({
    navBar: {
        background: '#A5A5A5',
        maxWidth: '88vw',
        minHeight: '8vh',
        maxHeight: '15vh',
        position: 'static',
        marginLeft: '6%',
        
    },
    container: {
        paddingTop: '0.5%',
        backgroundColor: '#A5A5A5',
    },
    home: {
        marginRight: 'auto',
        
    },
    homeBtn: {
        color: 'orange',
        fontSize: '4.5vh',
        
    },
    btn: {
        marginRight: theme.spacing(2),
        textTransform: 'none',
        fontSize: '2.5vh',
        '&:hover': {
            textDecoration: 'underline',
        },
        '&:focus': {
            textDecoration: 'underline',
        },
        
        
    }
}), {index: 1});

export const searchBarStyles = makeStyles((theme) => ({
    searchBar: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(5), 
        alignItems: 'center',
        display: 'flex',
        width: '35%',
        borderStyle: 'solid',
        border: 2.6,
        borderColor: 'orange',
    },
    searchBtn: {
        marginRight: 'auto',
    },
    inputField: {
        minWidth: '80%',
        marginLeft: '5%',
        marginRight: 'auto',
        fontSize: '2.5vh',
    },
}), {index: 1});

export const containerStyles = makeStyles({
    container: {
        maxWidth: '85vw',
        minHeight: '84vh',
        backgroundColor: '#ffffff',
        marginTop: '2vh',
        boxShadow: '0 7px 11px 0 rgba(0, 0, 0, 0.11), 0 6px 20px 0 rgba(0, 0, 0, 0.18)',
    },
}, {index: 1});

export const dialogStyles = makeStyles({
    dialog: {
        background: '#ffffff',
    },
    dialogTitle: {
        color: 'black',
        fontStyle: 'oblique',
        background: 'orange',
    },
    dialogInfoText: {
        color: '#A5A5A5',
        paddingBottom: '2%',
    },
    dialogText: {
        fontSize: '2.35vh',
    },
    dialogAction: {
        background: 'orange',
    },
    dialogBtn: {
        textDecorationLine: 'underline',
        fontSize: '1.5vh',
    },
    dialogIngredients: {
        paddingTop: '1%',
        marginBottom: '1%',
        fontSize: '3.5vh',
    },
}, {index: 1});

export const cardStyles = makeStyles({
    card: {
        width:  '100%',
        height: '100%',
        background: '#ffffff',
        borderStyle: 'solid',
        border: 2.6,
        borderColor: 'orange',
        '&:hover': {
            boxShadow: '0 7px 11px 0 rgba(0, 0, 0, 0.24), 0 6px 20px 0 rgba(0, 0, 0, 0.31)',
        },
    },
    cardAvatar: {
        textAlign: 'center',
        fontSize: '1.4vh',
        color: 'white',
        background: '#8CA3BA',
        borderStyle: 'solid',
        border: 2.6,
        borderColor: 'orange',
    },
    cardImg: {
        paddingTop: '70.00%',
    },
    cardContent: {
        maxHeight: '35%',
        maxWidth: '100%',
    },
    cardMainText: {
        fontStyle: 'oblique', 
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",  
        fontSize: '2.8vh',     
    },
    cardOverline: {
        fontWeight: 600, 
        fontSize: '2.25vh',
    },
    cardInfoText: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        fontSize: '2vh',
    }
}, {index: 1});

export const mealGridStyles = makeStyles((theme) => ({
    grid: {
        background: '#A5A5A5', 
    },
    gridItem: {
        width:  '100%',
        height: '100%',
    },
    pagination: {
        marginTop: theme.spacing(2)
    }
}), {index: 1});

export const randomMealStyles = makeStyles((theme) => ({
    
    root: {
        paddingTop: '3%',
        backgroundColor: '#FBB917',
      },
    inner: {
        paddingTop: '3%',
    },
    image: {
        height: '35%', 
        width: '35%',
        marginLeft: '35%',
    },
    mainText: {
        textAlign: 'center',
        marginLeft: '5%',
        paddingBottom: '2%',
        fontSize: '5vh',
    },
    dishText: {
        fontWeight: 600, 
        fontSize: '4vh',
        paddingBottom: '0.5%',
    },
    infoText: {
        fontSize: '2.35vh',
    }
}), {index: 1});

export const textStyles = makeStyles({
    mainText: {
        paddingTop: '3%',
        textAlign: 'center',
        fontWeight: 600, 
        fontSize: '5vh',
    },
    infoText: {
        textAlign: 'center',
        fontSize: '3vh',
    },
}, {index: 1});