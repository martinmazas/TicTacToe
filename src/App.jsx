import SearchBar from "./SearchBar";
import GridTable from "./gridTable";
import Button from '@mui/material/Button';
import React from 'react';
import { useEffect, useState } from "react";
import { getPlayParams } from "./Utils/functions";
import CircularIndeterminate from "./CircularIndeterminate";
import SimpleDialogDemo from "./SimpleDialogDemo";

const styles = {
  button: {
    // margin: '2vh 10vw',
    fontSize: '30px',
  },
  playGame: {
    // whiteSpace: 'nowrap',
    margin: '2vh 35vw',
    // backgroundColor: 'yellow',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  grid: {
    margin: 'auto auto'
  },
  options: {
    backgroundColor: "white",
    width: '500px',
    height: '100px',
    margin: 'auto auto',
    position: 'absolute',
    visibility: 'hidden'
  },
  waiting: {
    width: 1000,
    height: 100,
    margin: 'auto auto'
  }
}

function App() {
  const handleClick = () => {
    window.location.reload()
  }

  const [score, setScore] = useState(0)
  const [rows, setRows] = useState(0)
  const [columns, setColumns] = useState(0)
  const [countryNames, setCountryNames] = useState([])
  const [teamNames, setTeamNames] = useState([])
  const [finalResult, setFinalResult] = useState('')
  const [nonPlayers, setNonPlayers] = useState([])

  // When application starts
  useEffect(() => {
    getPlayParams()
      .then(data => {
        const { gridRows, gridColumns, teams, countries, playerNumber, noPossiblePlayerList } = { ...data }

        // Set columns, rows and the total players to guess
        setRows(gridRows)
        setColumns(gridColumns)
        setFinalResult(playerNumber)

        // Set the country-team combination where there is no option
        noPossiblePlayerList[0].map(player =>
          setNonPlayers(nonPlayers => [...nonPlayers, player.join('-')])
        )

        // Set teams and countries
        teams[0].map(team =>
          setTeamNames(teamNames => [...teamNames, team])
        )
        countries[0].map(country =>
          setCountryNames(countryNames => [...countryNames, country])
        )
      })
  }, [])

  useEffect(() => {
    if (score === finalResult) alert('You won')
  }, [score], setTimeout(1200))

  return (
    // Wait until finalResult and nonPlayers is ready
    (finalResult && nonPlayers) ?
      <div className="App">
        <GridTable style={styles.grid} rows={rows} columns={columns} countryNames={countryNames} teamNames={teamNames} nonPlayers={nonPlayers} />
        <div className="play-game" style={styles.playGame}>
          <SearchBar scoreState={{ score, setScore }} />
          <Button color='error' className="restart-button" style={styles.button} onClick={handleClick} variant="contained">Restart</Button>
        </div>
        <SimpleDialogDemo />
      </div >
      : <CircularIndeterminate />
  );
}

export default App;
