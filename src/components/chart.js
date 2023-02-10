import React, { useLayoutEffect, useState } from "react";
import { Chart } from "react-google-charts";

export default function Charts({ backgroundColor, barColor, fontColor, scale, title, value }) {
    const data = [
        ["Element", "Valor", { role: "style" }, { role: 'annotation' }],
        ["Controle", value[0], barColor[0], "Controle"],
        ["MultSacch", value[1], barColor[1], "MultSacch"],
    ];

    const options = {
        title: title,
        is3D: true,
        backgroundColor: {
            fill: '#ffffff0d',
            fillOpacity: 0.2
        },
        animation: {
            duration: 1000,
            easing: 'out',
        },
        vAxis: {
            title: 'Rating (scale of 1-10)',
            ticks: scale
        },
        legend: {
            position: 'none',
        },
    };

    return (
        <Chart
            chartType="ColumnChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
        />
    );
}

const styles = {
    div: {
        width: '100%',
        height: '100%'
    }
}

