import React from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'

import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'

import photo from './images/photo.png'
import useStyles from './styles'
const App = () => {
    const classes = useStyles()

    return (
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Travels</Typography>
                <img className={classes.image} src={photo} alt='photo' height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing='{3}'>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App
