import React from "react";

export default function CattlePastureTable() {
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
                    <td style={styles.td}>266,10</td>
                    <td style={styles.td}>265,60</td>
                </tr>
                <tr>
                    <td style={styles.td}>Peso vivo médio final (kg)</td>
                    <td style={styles.td}>318,90</td>
                    <td style={styles.td}>328,50</td>
                </tr>
                <tr>
                    <td style={styles.td}>Ganho de peso vivo médio diário (g)</td>
                    <td style={styles.td}>586,66</td>
                    <td style={styles.td}>698,88</td>
                </tr>
                <tr>
                    <td style={styles.td}>Ganho de peso vivo total (kg)</td>
                    <td style={styles.td}>52,80</td>
                    <td style={styles.td}>62,90</td>
                </tr>
                <tr>
                    <td style={styles.td}>Consumo médio diário de suplemento mineral com fontes proteica e energética (g)</td>
                    <td style={styles.td}>260,53</td>
                    <td style={styles.td}>259,48</td>
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