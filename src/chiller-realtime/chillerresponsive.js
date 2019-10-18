import React,{Component} from 'react'
import * as Colors from '../assets/everCommColor'
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,ReferenceLine} from 'recharts'
import Data from './data';

const ChillerResponsive=(props)=>{
    
  switch(props.lists){
  case 0:return(

        <div className="col p-0 m-0">
            <ResponsiveContainer height={300} data={Data.data1}>
            <AreaChart data={Data.data1}
                  margin={{top: 10, right: 30, left: 0, bottom: 0}}>
              <CartesianGrid stroke="#AAD0FD22" />
              <XAxis dataKey="name" stroke="#fff"/>
              <YAxis stroke="#fff"/>
              <Tooltip/>
              <Area type='monotone' dataKey='uv' stroke='#0EB801' fill='#0EB801' />
            </AreaChart>
          </ResponsiveContainer>
        </div>
     );
    case 1:
        return(

        <div className="col p-0 m-0">
            <ResponsiveContainer height={300} data={Data.data2}>
            <AreaChart data={Data.data2}
                  margin={{top: 10, right: 30, left: 0, bottom: 0}}>
              <CartesianGrid stroke="#AAD0FD22" />
              <XAxis dataKey="name" stroke="#fff"/>
              <YAxis stroke="#fff"/>
              <Tooltip/>
              <Area type='monotone' dataKey='uv' stroke='#0EB801' fill='#0EB801' />
            </AreaChart>
          </ResponsiveContainer>
        </div>
     );
    
     case 2:return(

        <div className="col p-0 m-0">
            <ResponsiveContainer height={300} data={Data.data3}>
            <AreaChart data={Data.data3}
                  margin={{top: 10, right: 30, left: 0, bottom: 0}}>
              <CartesianGrid stroke="#AAD0FD22" />
              <XAxis dataKey="name" stroke="#fff"/>
              <YAxis stroke="#fff"/>
              <Tooltip/>
              <Area type='monotone' dataKey='uv' stroke='#0EB801' fill='#0EB801' />
            </AreaChart>
          </ResponsiveContainer>
        </div>
     );
     
     case 3:return(

        <div className="col p-0 m-0">
            <ResponsiveContainer height={300} data={Data.data4}>
            <AreaChart data={Data.data4}
                  margin={{top: 10, right: 30, left: 0, bottom: 0}}>
              <CartesianGrid stroke="#AAD0FD22" />
              <XAxis dataKey="name" stroke="#fff"/>
              <YAxis stroke="#fff"/>
              <Tooltip/>
              <Area type='monotone' dataKey='uv' stroke='#0EB801' fill='#0EB801' />
            </AreaChart>
          </ResponsiveContainer>
        </div>
     );
     
     case 4:return(

        <div className="col p-0 m-0">
            <ResponsiveContainer height={300} data={Data.data5}>
            <AreaChart data={Data.data5}
                  margin={{top: 10, right: 30, left: 0, bottom: 0}}>
              <CartesianGrid stroke="#AAD0FD22" />
              <XAxis dataKey="name" stroke="#fff"/>
              <YAxis stroke="#fff"/>
              <Tooltip/>
              <Area type='monotone' dataKey='uv' stroke='#0EB801' fill='#0EB801' />
            </AreaChart>
          </ResponsiveContainer>
        </div>
     );
     case 5:return(

        <div className="col p-0 m-0">
            <ResponsiveContainer height={300} data={Data.data6}>
            <AreaChart data={Data.data6}
                  margin={{top: 10, right: 30, left: 0, bottom: 0}}>
              <CartesianGrid stroke="#AAD0FD22" />
              <XAxis dataKey="name" stroke="#fff"/>
              <YAxis stroke="#fff"/>
              <Tooltip/>
              <Area type='monotone' dataKey='uv' stroke='#0EB801' fill='#0EB801' />
            </AreaChart>
          </ResponsiveContainer>
        </div>
     );
     case 6:return(

        <div className="col p-0 m-0">
            <ResponsiveContainer height={300} data={Data.data7}>
            <AreaChart data={Data.data7}
                  margin={{top: 10, right: 30, left: 0, bottom: 0}}>
              <CartesianGrid stroke="#AAD0FD22" />
              <XAxis dataKey="name" stroke="#fff"/>
              <YAxis stroke="#fff"/>
              <Tooltip/>
              <Area type='monotone' dataKey='uv' stroke='#0EB801' fill='#0EB801' />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
     );
    
  }
    
    
}
export default ChillerResponsive