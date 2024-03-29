import countries from './countries.json'
import teams from './teams.json'
import React from 'react';
import CountryFlag from "./CountryFlag";
import TeamFlag from './TeamFlag';

const styles = {
    td: {
        width: '10vw',
        height: '10vw',
        textAlign: 'center',
        backgroundColor: '#07396b'
    }
}


const Cells = (props) => {
    const { rows, columns, randomNumbersCountries, randomNumbersTeams } = { ...props }

    return (
        <>
            {[...Array(rows)].map((_, rowIndex) => (
                <tr key={rowIndex}>
                    {[...Array(columns)].map((_, cellIndex) => (
                        <td className={`${rowIndex}-${cellIndex}`} style={styles.td} key={[rowIndex, cellIndex]} >
                            {
                                (rowIndex === 0 && cellIndex > 0) ?
                                    <CountryFlag country={countries[randomNumbersCountries[cellIndex - 1]]} cellIndex={cellIndex} />
                                    : (cellIndex === 0 && rowIndex > 0) ?
                                        <TeamFlag team={teams[randomNumbersTeams[rowIndex - 1]]} rowIndex={rowIndex} />
                                        : (cellIndex !== 0 && rowIndex !== 0) ?
                                            <div className={`${countries[randomNumbersCountries[cellIndex - 1]].name}-${teams[randomNumbersTeams[rowIndex - 1]].name}`}></div>
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