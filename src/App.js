import React, { Component } from "react";
import * as d3 from "d3";
import _ from "lodash";

import Preloader from "./components/Preloader";
import { loadAllData } from "./DataHandling";

import CountyMap from "./components/CountyMap";
import './style.css'
import Histogram from './components/Histogram/Histogram'
import {Title, Description} from './components/Meta'
import MedianLine from './components/MedianLine'
import Controls from './components/Controls'


class App extends Component {
    state = {
        techSalaries: [],
        salariesFilter: () => true,
        medianIncomes: [],
        countyNames: [],
        filteredTechSalaries:[],
        page:0,
        filteredBy: {
          USstate:'*',
          year:'*',
          jobTitle:'*'
        }
    };

    componentDidMount() {
        loadAllData(data => {
          this.setState(data)
        })
    }
    loopData(data) {
      for (var i  in data) {
        if (data[i][0]["USstate"] == "AL") {

        }
      }
    }

    componentDidUpdate(prevState) {
      if (this.state.medianIncomesByUSState !== prevState.medianIncomesByUSState){

      }
    }

    countyValue(county, techSalariesMap) {
        const medianHousehold = this.state.medianIncomes[county.id],
            salaries = techSalariesMap[county.name];

        if (!medianHousehold || !salaries) {
            return null;
        }

        const median = d3.median(salaries, d => d.base_salary);

        return {
            countyID: county.id,
            value: median - medianHousehold.medianIncome
        };
    }

    startData = e => {
      let {page} = this.state
      setInterval(() => this.setState({page:parseInt(this.state.page +1)}), 100);
    }

    updateDataFilter = (filter, filteredBy) => {
        this.setState({
            salariesFilter: filter,
            filteredBy: filteredBy
        });
    }


    render() {
        const {
            techSalaries,
            countyNames,
            usTopoJson,
            USstateNames,
            page,
            filteredBy,
            medianIncomesByUSState
        } = this.state;
        if (techSalaries.length < 1) {
            return <Preloader />;
        }

        let zoom = null,
            medianHousehold = this.state.medianIncomesByUSState["US"][0]
                .medianIncome;

        if (filteredBy.USstate !== "*") {
            zoom = this.state.filteredBy.USstate;
            medianHousehold = d3.mean(
                this.state.medianIncomesByUSState[zoom],
                d => d.medianIncome
            );
        }

        const filteredSalaries = techSalaries
              .filter(this.state.salariesFilter),
            filteredSalariesMap = _.groupBy(filteredSalaries, "countyID"),
            countyValues = countyNames
                .map(county => this.countyValue(county, filteredSalariesMap))
                .filter(d => !_.isNull(d));

        return (
            <div className="App container">
              <Title data={filteredSalaries} filteredBy={filteredBy} />
                <Description
                    data={filteredSalaries}
                    allData={techSalaries}
                    filteredBy={filteredBy}
                    medianIncomesByCounty={this.state.medianIncomesByCounty}
                />
                <svg width="1100" height="500">
                    <CountyMap
                        usTopoJson={usTopoJson}
                        USstateNames={USstateNames}
                        values={countyValues}
                        x={0}
                        y={0}
                        width={500}
                        height={500}
                        zoom={zoom}
                    />
                  <rect x="500" y="0" width="500" height="500" style={{fill:'white'}} />
                    <Histogram
                      bins={10}
                      width={500}
                      height={500}
                      x={500}
                      y={10}
                      data={filteredSalaries}
                      axisMargin={82}
                      bottomMargin={5}
                      value={d => d.base_salary}
                      />
                      <MedianLine data={filteredSalaries}
                        x={500}
                        y={10}
                        width={600}
                        height={500}
                        bottomMargin={5}
                        median={medianHousehold}
                        value={d => d.base_salary}
                      />
                </svg>
                <Controls data={techSalaries} updateDataFilter={this.updateDataFilter} />
            </div>
        );
    }
}

export default App;
