/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Chart } from "react-google-charts";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Image } from 'theme-ui';

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
            duration: 5000,
            easing: 'out',
            startup: true
        },
        vAxis: {
            // title: 'Rating (scale of 1-10)',
            ticks: scale
        },
        legend: {
            position: 'none',
        },
    };

    return (
        <AnimationOnScroll initiallyVisible={true} animateIn="animate__fadeInUp">
            <Chart
                chartType="ColumnChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
        </AnimationOnScroll>
    );
}


