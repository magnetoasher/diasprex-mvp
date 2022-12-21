/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useRef} from 'react'
import ApexCharts, {ApexOptions} from 'apexcharts'
import {getCSSVariableValue} from '../../../../../_metronic/assets/ts/_utils'

type Props = {
  className: string
  chartColor: string
  chartHeight: string

  datavalue1: number[]
  datavalue2: number[]
  datacategory: string[]
}

export const RemittanceChart: React.FC<Props> = ({
  className,
  chartColor,
  chartHeight,
  datavalue1,
  datavalue2,
  datacategory,
}) => {
  const chartRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!chartRef.current) {
      return
    }

    const chart = new ApexCharts(
      chartRef.current,
      chartOptions(chartColor, chartHeight, datavalue1, datavalue2, datacategory)
    )
    if (chart) {
      chart.render()
    }

    return () => {
      if (chart) {
        chart.destroy()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartRef])

  return (
    <div className={`card ${className}`}>
      {/* begin::Body */}
      <div className='card-body p-0 d-flex justify-content-between flex-column overflow-hidden'>
        {/* begin::Hidden */}
        <div className='d-flex flex-stack flex-wrap flex-grow-1 px-9 pt-9 pb-3'>
          <div className='me-2'>
            <span className='fw-bolder text-gray-800 d-block fs-3'>
              Annual Remittance Inflow to Africa (WB WDI)
            </span>

            <span className='text-gray-400 fw-bold'>2015 - 2020 </span>
          </div>

          <div className={`fw-bolder fs-3 text-${chartColor}`}>Average: $52 Billion</div>
        </div>
        {/* end::Hidden */}

        {/* begin::Chart */}
        <div ref={chartRef} className='mixed-widget-10-chart'></div>
        {/* end::Chart */}
      </div>
    </div>
  )
}

// type Data = {
//   datavalue1: number[]
//   datavalue2: number[]
//   datacategory: string[]
// }
const chartOptions = (
  chartColor: string,
  chartHeight: string,
  datavalue1: number[],
  datavalue2: number[],
  datacategory: string[]
): ApexOptions => {
  const labelColor = getCSSVariableValue('--bs-gray-500')
  const borderColor = getCSSVariableValue('--bs-gray-200')
  const secondaryColor = getCSSVariableValue('--bs-gray-300')
  const baseColor = getCSSVariableValue('--bs-' + chartColor)

  return {
    series: [
      {
        name: 'Total Remittance',
        data: datavalue1, //[50, 60, 70, 80, 60, 50],
      },
      {
        name: 'Fee',
        data: datavalue2, //[50, 60, 70, 80, 60, 50],
      },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'bar',
      height: chartHeight,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
        borderRadius: 5,
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: datacategory, //['2015', '2016', '2017', '2018', '2019', '2020'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    fill: {
      type: 'solid',
    },
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      hover: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: function (val: any) {
          return '$' + val + ' revenue'
        },
      },
    },
    colors: [baseColor, secondaryColor],
    grid: {
      padding: {
        top: 10,
      },
      borderColor: borderColor,
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
  }
}
