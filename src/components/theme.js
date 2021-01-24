import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#717cff"
    },
    secondary: {
      main:"#000"
    },
    common:{
      black:'#373737',
      greyLight:'#fafafa',
      greyDark:'#8a8a8a'
    }
  },
  typography:{
    subtitle1:{
      fontSize:"1.375rem",
      color:"#8a8a8a",
      fontWeight:100,
    }
  }
});


export default theme;