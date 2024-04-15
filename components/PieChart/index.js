import styles from './PieChart.module.css'
import { Pie } from 'react-chartjs-2'

import {
    Chart as ChartJS,
    CategoryScale,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js'
import { useEffect, useState } from 'react'

ChartJS.register(
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
)

export default function PieChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
                {
                    label: '# of Votes',
                    data: [10, 30, 14, 5, 12, 25],
                    borderColor: [
                        'rgba(53, 162, 179, 0.4)',
                        'rgba(12, 165, 135, 0.4)',
                        'rgba(44, 152, 162, 0.4)',
                        'rgba(200, 122, 275, 0.4)',
                        'rgba(182, 222, 225, 0.4)',
                        'rgba(82, 235, 253, 0.4)'
                    ],
                    backgroundColor: [
                        'rgba(53, 162, 179, 0.4)',
                        'rgba(12, 165, 135, 0.4)',
                        'rgba(44, 152, 162, 0.4)',
                        'rgba(200, 122, 275, 0.4)',
                        'rgba(182, 222, 225, 0.4)',
                        'rgba(82, 235, 253, 0.4)'
                    ],
                    borderWidth: 1
                },
            ]
        })
        setChartOptions({
            indexAxis: 'y',
            plugins:{
                legend:{
                    position: 'top'
                },
                title:{
                    display: true,
                    text:"Daily Revenue"
                }
            },
            maintainAspectRatio:false,
            responsive:true
        })
    }, [])

    return(
        <>
            <Pie data={chartData} options={chartOptions} style={{width:"500px", height:"300px"}}/>
        </>
    )
}