import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
    CssBaseline,
    makeStyles,
    Container,
    Grid,
    Typography,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@material-ui/core';

/** MOCK DATA */
import { characterTypes, characters } from './mockData'

/** FontAwesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/** Swal */
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const useStyles = makeStyles(
    () => ({
        controller: {
            padding: 40,
        },
        characterIcon: {
            maxWidth: '20vw',
        },
        table: {
            maxWidth: '100%',
        },
    }),
);

function Characters() {
    const classes = useStyles();

    const lightState = useSelector(state => state.lightState);
    let [characterTypesListIndex, setcharacterTypesListIndex] = useState(0);
    let [characterListIndex, setcharacterListIndex] = useState(0);
    const [characterList, setcharacterList] = useState(characters[characterTypes[characterTypesListIndex]]);

    //設置 lifecycle
    useEffect(() => {
        console.log('更新後的 State', characterTypesListIndex);
        setcharacterListIndex(0);
        setcharacterList(characters[characterTypes[characterTypesListIndex]]);

        return (() => {
            console.log('更新前的 State', characterTypesListIndex);
        })
    }, [characterTypesListIndex])

    const controller = (characterType = false, isShowButton = false) => {

        function last(characterType) {
            if (characterType) {
                const index = characterTypesListIndex > 0 ? (characterTypesListIndex - 1) : characterTypes.length - 1;
                setcharacterTypesListIndex(index);
            } else {
                const index = characterListIndex > 0 ? (characterListIndex - 1) : characterList.length - 1;
                setcharacterListIndex(index);
            }
        };

        function next(characterType) {
            if (characterType) {
                const index = (characterTypesListIndex + 1) % (characterTypes.length);
                setcharacterTypesListIndex(index);
            } else {
                const index = (characterListIndex + 1) % (characterList.length);
                setcharacterListIndex(index);
            }
        };

        function select() {
            if (lightState) {
                MySwal.fire({
                    title: <p>你選擇了 {characterList[characterListIndex].name}</p>,
                    html: <img src={characterList[characterListIndex].imgSrc} alt="QQ" style={{ maxWidth: "100%" }} />,
                    footer: 'Copyright 2020',
                });
            } else {
                MySwal.fire({
                    title: <p>Status FALSE!</p>,
                    icon: 'error',
                    footer: 'Copyright 2020',
                });
            }
        }

        return (
            <Grid
                container
                alignItems="center"
                justify="center"
                className={classes.controller}
            >
                <Grid item xs={1}>
                    <FontAwesomeIcon icon='chevron-circle-left' size="2x" onClick={() => last(characterType)} />
                </Grid>
                <Grid item xs={4}>
                    {characterType && <Typography variant="h6" noWrap>
                        {characterType}
                    </Typography>}
                    {isShowButton && <Button variant="contained" color="primary" size="large" onClick={() => select()}>
                        Save
                    </Button>}
                </Grid>
                <Grid item xs={1}>
                    <FontAwesomeIcon icon='chevron-circle-right' size="2x" onClick={() => next(characterType)} />
                </Grid>
            </Grid>
        )
    };

    const characterView = () => {
        console.log(characterList[characterListIndex]);

        return (
            <Grid
                container
                alignItems="center"
                justify="center"
                className={classes.controller}
            >
                <Grid item xs={4}>
                    <img src={characterList[characterListIndex].imgSrc} alt="QQ" className={classes.characterIcon} />
                    <h3>{characterList[characterListIndex].name}</h3>
                </Grid>
                <Grid item xs={6}>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Dessert (100g serving)</TableCell>
                                    <TableCell align="right">Calories</TableCell>
                                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {characterList[characterListIndex].data.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.calories}</TableCell>
                                        <TableCell align="right">{row.fat}</TableCell>
                                        <TableCell align="right">{row.carbs}</TableCell>
                                        <TableCell align="right">{row.protein}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        )
    };
    console.log('Render Characters')
    return (
        <React.Fragment>
            <CssBaseline />
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} color="primary">
                        <Typography variant="h6" noWrap>
                            # Characters Demo
                        </Typography>
                        <Typography variant="h6" noWrap>
                            {lightState ? <p>Status: True</p> : <p>Status: False</p>}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    alignItems="center"
                    justify="center"
                    align="center"
                    spacing={6}
                >
                    {controller(characterTypes[characterTypesListIndex])}
                    {characterView()}
                    {controller(false, true)}
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default Characters;