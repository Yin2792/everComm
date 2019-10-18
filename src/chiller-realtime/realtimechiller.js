import React, { Component } from 'react'
import * as Colors from '../assets/everCommColor'
import ChillerTab from './chillertab'
import ChillerName from './chillername'
import ChillerResponsive from './chillerresponsive'
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,ReferenceLine} from 'recharts'
import Data from './data';
const Chillerlists = ['Evaporator Ouput', 'Chill Water Pump2', 'Evaporator Input', 'Chill Water Pump1', 'Condensor Ouput', 'Power Consumption', 'Condensor Input']
class RealtimeChiller extends Component {
  constructor(props) {
    super(props)
    this.state = {
      onClick: false,
      Values: 'Evaporator Ouput',
    
      data:Data.data1
    }
    this.HandleClick = this.HandleClick.bind(this)
  }
  HandleClick = (e, index) => {
    e.preventDefault();
    if(index==1){
      this.setState({data:Data.data2},()=>{
            console.log("data",this.state.data)
          });
    }
    
      // switch(index){
      //   case 0:this.setState({data:Data.data});
      //   case 1:this.setState({data:Data.data2},()=>{
      //     console.log("data",this.state.data)
      //   });
      //   case 2:this.setState({data:Data.data3});
      //   case 3:this.setState({data:Data.data4});
      //   case 4:this.setState({data:Data.data5});
      //   case 5:this.setState({data:Data.data6});
      //   case 6:this.setState({data:Data.data7});
      //   default:this.setState({data:Data.data1})
      // }
    Chillerlists.map((values, key) => {
      if (key == index) {
        this.setState({ Values: values})
      }
    })


  }
  getChart=(data)=>{
    return (
      <ResponsiveContainer height={300} data={data}>
            <AreaChart data={data}
                  margin={{top: 10, right: 30, left: 0, bottom: 0}}>
              <CartesianGrid stroke="#AAD0FD22" />
              <XAxis dataKey="name" stroke="#fff"/>
              <YAxis stroke="#fff"/>
              <Tooltip/>
              <Area type='monotone' dataKey='uv' stroke='#0EB801' fill='#0EB801' />
            </AreaChart>
        </ResponsiveContainer>
    )
  }
  render() {
  console.log(this.state.data)
    return (
      <div className="d-flex flex-column" style={{ background: "linear-gradient(-60deg, rgb(16, 24, 65), rgb(32, 43, 96))" }}>
        <div className="flex-grow-1">
          <div className="container-fluid">
            <div className="row">
              <div className="px-0 col-lg-11">
                <div className="w-100 h-100 px-2" style={{ position: 'absolute', zIndex: 1, marginTop: '-10px' }}>
                  <div className="container-fluid h-100 pb-4 mt-3" style={{
                    background: `${Colors.DetatilColor}`
                    , borderRadius: '8px',
                    boxShadow: `${Colors.BoxColor} 1px 1px 4px 2px`,
                  }}>
                    <div className="row">
                      <div className="col-12">
                        <div className="d-flex py-2 justify-content-between">
                          <div className="d-flex">
                            <div className="pt-2" style={{ fontSize: '20px', color: `${Colors.text1}` }}>
                              Chiller1 Data Detail
                                          </div>
                          </div>
                          <div className="pl-4 pr-2" style={{
                            marginTop: '-10px',
                            fontSize: '34px',
                            color: `${Colors.text1}`,
                            cursor: 'pointer'
                          }}>
                            ×
                                         </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3 text-secondary pr-4 pl-3">
                        <div className="h-100 d-flex flex-column pt-3">
                          {Chillerlists.map((lists, key) => {
                            return (<div key={key}>
                              <div className="pl-4 py-3 " style={{
                                borderBottom: '1px solid rgba(170, 208, 253, 0.133)',
                                borderLeft: this.state.Values === lists ? `6px solid ${Colors.text3} ` : '6px solid rgba(255, 255, 255, 0)',
                                cursor: 'pointer',
                                color: this.state.Values === lists ? `${Colors.text1}` : `${Colors.text2}`,
                                fontSize: '14px'
                              }}
                                onClick={(e) => this.HandleClick(e, key)}>{lists}</div>
                            </div>
                            )
                          })}
                        </div>
                      </div>
                      <div className="col-lg-9 text-secondary px-2">
                        <div className="d-flex flex-wrap">

                          {Chillerlists.map((lists, key) => {

                            return (<div key={key}>
                              <div className="px-2 py-1 mx-1 my-1" style={{
                                border: '1px solid green',
                                borderRadius: '5px',
                                fontSize: '14px',
                                fontWeight: '400',
                                color: 'green',
                                backgroundColor: 'rgba(0,0,0,0)',
                                cursor: 'default',
                                fontSize: '14px'
                              }}
                              >  {lists}</div>
                            </div>
                            )
                          })}

                        </div>
                        <ChillerName name={this.state.Values} />
                        {/* <ChillerResponsive lists={this.state.Index}/> */}
                        <div className="col p-0 m-0">
                          {this.getChart(this.state.data)}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="container-fluid">
                  <div className="d-flex pb-1">
                    <div style={{ cursor: "pointer", color: `${Colors.text2}` }}>
                      Plant
                   <span className="px-1">></span>
                    </div>
                    <div style={{ cursor: "pointer", color: `${Colors.text1}` }}>
                      Chiller
                 </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-9 px-0 mx-0 pb-3">
                      <div className="container-fluid py-0">
                        <ChillerTab />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    )

  }
}
export default RealtimeChiller