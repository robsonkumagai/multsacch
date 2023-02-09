import React from "react";

export default function CalfPastureTable() {
    return <div style={styles.div}>
        <table style={styles.table}>
            <thead>
                <tr>
                    <th style={styles.th}>Resultados</th>
                    <th style={styles.th}>Controle</th>
                    <th style={styles.th}>Com probiótico</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style={styles.td}>Peso vivo médio inicial (kg)</td>
                    <td style={styles.td}>190,75</td>
                    <td style={styles.td}>190,25</td>
                </tr>
                <tr>
                    <td style={styles.td}>Peso vivo médio final (kg)</td>
                    <td style={styles.td}>213,00</td>
                    <td style={styles.td}>221,25</td>
                </tr>
                <tr>
                    <td style={styles.td}>Ganho de peso vivo médio diário (g)</td>
                    <td style={styles.td}>247,22</td>
                    <td style={styles.td}>344,44</td>
                </tr>
                <tr>
                    <td style={styles.td}>Ganho de peso vivo total (kg)</td>
                    <td style={styles.td}>22,25</td>
                    <td style={styles.td}>31,00</td>
                </tr>
                <tr>
                    <td style={styles.td}>Consumo médio diário de suplemento mineral com fontes proteica e energética (g)</td>
                    <td style={styles.td}>151,00</td>
                    <td style={styles.td}>150,50</td>
                </tr>
            </tbody>
        </table>
    </div>
}

const styles = {
    div: {
        width: '100%',
        maxWidth: '100%',
        overflowX: 'auto',
        display: 'block',
        whiteSpace: 'nowrap',
        position: 'relative'
    },
    table: {
        width: '100%',
        // borderCollapse: 'collapse',
        borderRadius: '15px',
        background: '#ffffff0d',
        color: '#fff'
    },
    td: {
        padding: '5px',
        // border: 'solid 1px gray',
        borderBottom: '1px solid gray'
    },
    th: {
        padding: '5px',
        // border: 'solid 1px gray',
        borderBottom: '1px solid #ddd'
    }
}