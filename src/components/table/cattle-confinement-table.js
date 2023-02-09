import React from "react";

export default function CattleConfinementTable() {
    return <div style={styles.div}>
        <table style={styles.table}>
            <thead>
                <tr>
                    <th rowSpan="2" colSpan="1" >
                        Resultados
                    </th>
                    <th style={styles.thControl} rowSpan="1" colSpan="2">
                        Controle
                    </th>
                    <th style={styles.thMultsacch} rowSpan="1" colSpan="5">
                        Com probiótico
                    </th>
                </tr>
                <tr>
                    {/* <th style={styles.th}></th> */}
                    <th style={styles.thControl}>1</th>
                    <th style={styles.thControl}>2</th>
                    <th style={styles.thMultsacch}>3</th>
                    <th style={styles.thMultsacch}>4</th>
                    <th style={styles.thMultsacch}>5</th>
                    <th style={styles.thMultsacch}>6</th>
                    <th style={styles.thMultsacch}>7</th>
                    <th style={styles.thControl}>Média 2</th>
                    <th style={styles.thMultsacch}>Média 1</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style={styles.td}>Peso vivo médio inicial (kg)</td>
                    <td style={styles.td}>384,50</td>
                    <td style={styles.td}>384,50</td>
                    <td style={styles.td}>384,75</td>
                    <td style={styles.td}>384,50</td>
                    <td style={styles.td}>384,75</td>
                    <td style={styles.td}>384,75</td>
                    <td style={styles.td}>384,25</td>
                    <td style={styles.td}>384,50</td>
                    <td style={styles.td}>384,60</td>

                </tr>
                <tr>
                    <td style={styles.td}>Peso vivo médio final (kg)</td>
                    <td style={styles.td}>489,40</td>
                    <td style={styles.td}>488,36</td>
                    <td style={styles.td}>511,47</td>
                    <td style={styles.td}>509,60</td>
                    <td style={styles.td}>510,66</td>
                    <td style={styles.td}>515,26</td>
                    <td style={styles.td}>513,05</td>
                    <td style={styles.td}>488,88</td>
                    <td style={styles.td}>511,90</td>
                </tr>
                <tr>
                    <td style={styles.td}>Ganho de peso vivo médio diário (kg)</td>
                    <td style={styles.td}>1,17</td>
                    <td style={styles.td}>1,15</td>
                    <td style={styles.td}>1,41</td>
                    <td style={styles.td}>1,38</td>
                    <td style={styles.td}>1,40</td>
                    <td style={styles.td}>1,44</td>
                    <td style={styles.td}>1,42</td>
                    <td style={styles.td}>1,16</td>
                    <td style={styles.td}>1,41</td>
                </tr>
                <tr>
                    <td style={styles.td}>Ganho de peso vivo total (kg)</td>
                    <td style={styles.td}>104,90</td>
                    <td style={styles.td}>103,86</td>
                    <td style={styles.td}>126,72</td>
                    <td style={styles.td}>124,56</td>
                    <td style={styles.td}>125,91</td>
                    <td style={styles.td}>129,51</td>
                    <td style={styles.td}>127,80</td>
                    <td style={styles.td}>104,38</td>
                    <td style={styles.td}>126,90</td>
                </tr>
                <tr>
                    <td style={styles.td}>Consumo de matéria seca (kg)</td>
                    <td style={styles.td}>10,25</td>
                    <td style={styles.td}>10,27</td>
                    <td style={styles.td}>10,89</td>
                    <td style={styles.td}>10,78</td>
                    <td style={styles.td}>10,85</td>
                    <td style={styles.td}>11,01</td>
                    <td style={styles.td}>10,95</td>
                    <td style={styles.td}>10,26</td>
                    <td style={styles.td}>10,90</td>
                </tr>
                <tr>
                    <td style={styles.td}>Rendimento de carcaça (%)</td>
                    <td style={styles.td}>53,20</td>
                    <td style={styles.td}>53,00</td>
                    <td style={styles.td}>54,80</td>
                    <td style={styles.td}>54,50</td>
                    <td style={styles.td}>54,60</td>
                    <td style={styles.td}>54,80</td>
                    <td style={styles.td}>55,00</td>
                    <td style={styles.td}>53,10</td>
                    <td style={styles.td}>54,74</td>
                </tr>
                <tr>
                    <td style={styles.td}>Arrobas produzidas no período (@)</td>
                    <td style={styles.td}>3,72</td>
                    <td style={styles.td}>3,67</td>
                    <td style={styles.td}>4,63</td>
                    <td style={styles.td}>4,52</td>
                    <td style={styles.td}>4,58</td>
                    <td style={styles.td}>4,73</td>
                    <td style={styles.td}>4,69</td>
                    <td style={styles.td}>3,70</td>
                    <td style={styles.td}>4,63</td>
                </tr>
                <tr>
                    <td style={styles.td}>Conversão alimentar</td>
                    <td style={styles.td}>8,79</td>
                    <td style={styles.td}>8,81</td>
                    <td style={styles.td}>7,73</td>
                    <td style={styles.td}>7,79</td>
                    <td style={styles.td}>7,75</td>
                    <td style={styles.td}>7,65</td>
                    <td style={styles.td}>7,71</td>
                    <td style={styles.td}>8,80</td>
                    <td style={styles.td}>7,73</td>
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
    },
    thControl: {
        background: 'gray'

    },
    thMultsacch: {
        background: '#922e8e',
        padding: '-10px'
    },

    '@media screen and (min-width: 1024px)': {
        // .gfg-div {
        //   background-color: #63c971;
        //   color: #fff;
        // }
    },
    /* For Tablet View */
    '@media screen and (min-device-width: 768px) and (max-device-width: 1024px)': {
    },
    /* For Mobile Portrait View */
    '@media screen and (max-device-width: 480px) and (orientation: portrait)': {
    },
    /* For Mobile Landscape View */
    '@media screen and (max-device-width: 640px) and (orientation: landscape)': {
    },
    /* For Mobile Phones Portrait or Landscape View */
    '@media screen and (max-device-width: 640px)': {
    }
}