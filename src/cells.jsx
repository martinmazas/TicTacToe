import React from 'react';
import CountryFlag from "./CountryFlag";
import TeamFlag from './TeamFlag';
import CloseIcon from '@mui/icons-material/Close';

const styles = {
    td: {
        width: '10vw',
        height: '10vw',
        textAlign: 'center',
        backgroundColor: '#07396b'
    }
}


const Cells = (props) => {
    const { rows, columns, countryNames, teamNames, nonPlayers } = { ...props.props }

    return (
        <>
            {Array.from({ length: rows }, (_, rowIndex) => (
                <tr key={rowIndex}>
                    {Array.from({ length: columns }, (_, cellIndex) => (
                        <td className={`${rowIndex}-${cellIndex}`} style={styles.td} key={[rowIndex, cellIndex]} >
                            {
                                (rowIndex === 0 && cellIndex > 0) ?
                                    // The first row is reserved for the country flags
                                    <CountryFlag country={countryNames[cellIndex - 1]} cellIndex={cellIndex} />
                                    : (cellIndex === 0 && rowIndex > 0) ?
                                        // The first column is reserved for the team logo
                                        <TeamFlag teamNames={teamNames[rowIndex - 1]} rowIndex={rowIndex} />
                                        : (cellIndex !== 0 && rowIndex !== 0) ?
                                            // Where there is no player possible, add an icon to indicate that there is no option
                                            <div className={`${countryNames[cellIndex - 1].name}-${teamNames[rowIndex - 1].name}`}>
                                                {nonPlayers.includes(`${countryNames[cellIndex - 1].name}-${teamNames[rowIndex - 1].name}`) ? <CloseIcon fontSize='large' color='error'/> : null}
                                            </div>
                                            : null
                            }
                        </td>
                    ))}
                </tr>
            ))}
        </>
    )
}

export default Cells