import React from 'react'
import {RadialBar, RadialBarChart , Treemap ,PieChart, Pie, Bar, Legend, BarChart, AreaChart , XAxis, YAxis, CartesianGrid,Tooltip, Area } from 'recharts';


const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ]

  const data01 = [
    {
      "name": "Group A",
      "value": 400
    },
    {
      "name": "Group B",
      "value": 300
    },
    {
      "name": "Group C",
      "value": 300
    },
    {
      "name": "Group D",
      "value": 200
    },
    {
      "name": "Group E",
      "value": 278
    },
    {
      "name": "Group F",
      "value": 189
    }
  ];
  const data02 = [
    {
      "name": "Group A",
      "value": 2400
    },
    {
      "name": "Group B",
      "value": 4567
    },
    {
      "name": "Group C",
      "value": 1398
    },
    {
      "name": "Group D",
      "value": 9800
    },
    {
      "name": "Group E",
      "value": 3908
    },
    {
      "name": "Group F",
      "value": 4800
    }
  ];
  

  const data03 = [
    {
      "name": "axis",
      "children": [
        {
          "name": "Axis",
          "size": 24593
        },
        {
          "name": "Axes",
          "size": 1302
        },
        {
          "name": "AxisGridLine",
          "size": 652
        },
        {
          "name": "AxisLabel",
          "size": 636
        },
        {
          "name": "CartesianAxes",
          "size": 6703
        }
      ]
    },
    {
      "name": "controls",
      "children": [
        {
          "name": "TooltipControl",
          "size": 8435
        },
        {
          "name": "SelectionControl",
          "size": 7862
        },
        {
          "name": "PanZoomControl",
          "size": 5222
        },
        {
          "name": "HoverControl",
          "size": 4896
        },
        {
          "name": "ControlList",
          "size": 4665
        },
        {
          "name": "ClickControl",
          "size": 3824
        },
        {
          "name": "ExpandControl",
          "size": 2832
        },
        {
          "name": "DragControl",
          "size": 2649
        },
        {
          "name": "AnchorControl",
          "size": 2138
        },
        {
          "name": "Control",
          "size": 1353
        },
        {
          "name": "IControl",
          "size": 763
        }
      ]
    },
    {
      "name": "data",
      "children": [
        {
          "name": "Data",
          "size": 20544
        },
        {
          "name": "NodeSprite",
          "size": 19382
        },
        {
          "name": "DataList",
          "size": 19788
        },
        {
          "name": "DataSprite",
          "size": 10349
        },
        {
          "name": "EdgeSprite",
          "size": 3301
        },
        {
          "name": "render",
          "children": [
            {
              "name": "EdgeRenderer",
              "size": 5569
            },
            {
              "name": "ShapeRenderer",
              "size": 2247
            },
            {
              "name": "ArrowType",
              "size": 698
            },
            {
              "name": "IRenderer",
              "size": 353
            }
          ]
        },
        {
          "name": "ScaleBinding",
          "size": 11275
        },
        {
          "name": "TreeBuilder",
          "size": 9930
        },
        {
          "name": "Tree",
          "size": 7147
        }
      ]
    },
    {
      "name": "events",
      "children": [
        {
          "name": "DataEvent",
          "size": 7313
        },
        {
          "name": "SelectionEvent",
          "size": 6880
        },
        {
          "name": "TooltipEvent",
          "size": 3701
        },
        {
          "name": "VisualizationEvent",
          "size": 2117
        }
      ]
    },
    {
      "name": "legend",
      "children": [
        {
          "name": "Legend",
          "size": 20859
        },
        {
          "name": "LegendRange",
          "size": 10530
        },
        {
          "name": "LegendItem",
          "size": 4614
        }
      ]
    },
    {
      "name": "operator",
      "children": [
        {
          "name": "distortion",
          "children": [
            {
              "name": "Distortion",
              "size": 6314
            },
            {
              "name": "BifocalDistortion",
              "size": 4461
            },
            {
              "name": "FisheyeDistortion",
              "size": 3444
            }
          ]
        },
        {
          "name": "encoder",
          "children": [
            {
              "name": "PropertyEncoder",
              "size": 4138
            },
            {
              "name": "Encoder",
              "size": 4060
            },
            {
              "name": "ColorEncoder",
              "size": 3179
            },
            {
              "name": "SizeEncoder",
              "size": 1830
            },
            {
              "name": "ShapeEncoder",
              "size": 1690
            }
          ]
        },
        {
          "name": "filter",
          "children": [
            {
              "name": "FisheyeTreeFilter",
              "size": 5219
            },
            {
              "name": "VisibilityFilter",
              "size": 3509
            },
            {
              "name": "GraphDistanceFilter",
              "size": 3165
            }
          ]
        },
        {
          "name": "IOperator",
          "size": 1286
        },
        {
          "name": "label",
          "children": [
            {
              "name": "Labeler",
              "size": 9956
            },
            {
              "name": "RadialLabeler",
              "size": 3899
            },
            {
              "name": "StackedAreaLabeler",
              "size": 3202
            }
          ]
        },
        {
          "name": "layout",
          "children": [
            {
              "name": "RadialTreeLayout",
              "size": 12348
            },
            {
              "name": "NodeLinkTreeLayout",
              "size": 12870
            },
            {
              "name": "CirclePackingLayout",
              "size": 12003
            },
            {
              "name": "CircleLayout",
              "size": 9317
            },
            {
              "name": "TreeMapLayout",
              "size": 9191
            },
            {
              "name": "StackedAreaLayout",
              "size": 9121
            },
            {
              "name": "Layout",
              "size": 7881
            },
            {
              "name": "AxisLayout",
              "size": 6725
            },
            {
              "name": "IcicleTreeLayout",
              "size": 4864
            },
            {
              "name": "DendrogramLayout",
              "size": 4853
            },
            {
              "name": "ForceDirectedLayout",
              "size": 8411
            },
            {
              "name": "BundledEdgeRouter",
              "size": 3727
            },
            {
              "name": "IndentedTreeLayout",
              "size": 3174
            },
            {
              "name": "PieLayout",
              "size": 2728
            },
            {
              "name": "RandomLayout",
              "size": 870
            }
          ]
        },
        {
          "name": "OperatorList",
          "size": 5248
        },
        {
          "name": "OperatorSequence",
          "size": 4190
        },
        {
          "name": "OperatorSwitch",
          "size": 2581
        },
        {
          "name": "Operator",
          "size": 2490
        },
        {
          "name": "SortOperator",
          "size": 2023
        }
      ]
    }
  ]
  const data04 = [
    {
      "name": "18-24",
      "uv": 31.47,
      "pv": 2400,
      "fill": "#8884d8"
    },
    {
      "name": "25-29",
      "uv": 26.69,
      "pv": 4567,
      "fill": "#83a6ed"
    },
    {
      "name": "30-34",
      "uv": -15.69,
      "pv": 1398,
      "fill": "#8dd1e1"
    },
    {
      "name": "35-39",
      "uv": 8.22,
      "pv": 9800,
      "fill": "#82ca9d"
    },
    {
      "name": "40-49",
      "uv": -8.63,
      "pv": 3908,
      "fill": "#a4de6c"
    },
    {
      "name": "50+",
      "uv": -2.63,
      "pv": 4800,
      "fill": "#d0ed57"
    },
    {
      "name": "unknow",
      "uv": 6.67,
      "pv": 4800,
      "fill": "#ffc658"
    }
  ]

  
function RenderLineChart() {
  return (
    <div>
        {/* Line Chart */}
        <AreaChart width={730} height={250} data={data}
    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
    <defs>
      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
      </linearGradient>
      <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
      </linearGradient>
    </defs>
    <XAxis dataKey="name" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
    <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
  </AreaChart>

  {/* Bar Char */}
  <BarChart width={730} height={250} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="pv" fill="#8884d8" />
  <Bar dataKey="uv" fill="#82ca9d" />
</BarChart>

{/* Pie Chart */}
<PieChart width={730} height={250}>
  <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
  <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
</PieChart>


{/* Tree map */}
<Treemap
  width={730}
  height={250}
  data={data03}
  dataKey="size"
  aspectRatio={4 / 3}
  stroke="#fff"
  fill="#8884d8"
/>

{/* Radial Bar Chart */}
<RadialBarChart 
  width={730} 
  height={250} 
  innerRadius="10%" 
  outerRadius="80%" 
  data={data04} 
  startAngle={180} 
  endAngle={0}
>
  <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='uv' />
  <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
  <Tooltip />
</RadialBarChart>

  </div>
  )
}

export default RenderLineChart