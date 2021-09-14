import React from 'react';
import Download from './Download';
class DropDown extends React.Component {
    constructor() {
        super();
        this.state = {
            Plant: [],
            Customer_No: [],
            Brand: [],
            Channel: [],
            plantName: '',
            customerName: "",
            brandName: "",
            channelName: "",
            Submitbtn: "",
            selectedPlant: "",
            selectedCustomer: "",
            selectedBrand: "",
            selectedChannel: "",
        }
    };

    componentDidMount() {

/* 
        fetch("https://run.mocky.io/v3/b7846517-3b55-4aaf-98e4-2963f79075fe", {
  "method": "POST",
  "headers": {
    "x-rapidapi-host": "fairestdb.p.rapidapi.com",
    "x-rapidapi-key": "apikey",
    "content-type": "application/json",
    "accept": "application/json"
  },
  "body": JSON.stringify({
    name: this.state.name,
    notes: this.state.notes
  })
})
.then(response => response.json())
.then(response => {
  console.log(response)
}) */
         this.setState({
            Plant: [
                { name: 'Plant-1', Customer_No: ["Cu1", "Cu2", "Cu3"], Brand: ["P1B1", "P1B2", "P1B3"], Channel: ["P1CH1", "P1CH2", "P1CH3"] },
                { name: 'Plant-2', Customer_No: ["Cu1", "Cu2", "Cu3"], Brand: ["P2B1", "P2B2", "P2B3"], Channel: ["P2CH1", "P2CH2", "P3CH3"] },
                { name: 'Plant-3', Customer_No: ["Cu1", "Cu2", "Cu3"], Brand: ["P3B1", "P3B1", "P3B1"], Channel: ["P3CH1", "P3CH1", "P3CH1"] },
            ]
        });

    }
    selectChange(e) {
        this.setState({ plantName: e.target.value });
        this.setState({ Customer_No: this.state.Plant.find(x => x.name === e.target.value).Customer_No });
        this.setState({ Brand: this.state.Plant.find(x => x.name === e.target.value).Brand });
        this.setState({ Channel: this.state.Plant.find(x => x.name === e.target.value).Channel });
    }

    customerChange(e) {

        this.setState({ customerName: e.target.value });
    }
    brandChange(e) {

        this.setState({ brandName: e.target.value });
    }
    channelChange(e) {

        this.setState({ channelName: e.target.value });
    }
    Click = () => {
        return (
            this.setState({ selectedPlant: this.state.plantName }),
            this.setState({ selectedCustomer: this.state.customerName }),
            this.setState({ selectedBrand: this.state.brandName }),
            this.setState({ selectedChannel: this.state.channelName })
        )
    }
    render() {
        const { selectedPlant } = this.state;
        const { selectedCustomer } = this.state;
        const { selectedBrand } = this.state;
        const { selectedChannel } = this.state;
        return (
            <div className="body-container">
                 <div id="mandatory">Select Mandatory Fields*</div>
                <div className="content-select">
                <label>Plant*</label>
                <div >
                    <select className="options" onChange={this.selectChange.bind(this)} value={this.state.plantName} required>
                        <option>---select---</option>
                        {
                            this.state.Plant.map(x => {
                                return <option>{x.name}</option>
                            })
                        }
                    </select>
                </div>
                <div>
                    <label>Customer No*</label>
                    <select  className="options" onChange={this.customerChange.bind(this)} required>
                        <option>---select---</option>
                        {
                            this.state.Customer_No.map(x => {
                                return <option>{x}</option>
                            })
                        }
                    </select>
                    <label>Brand</label>
                    <select  className="options" onChange={this.brandChange.bind(this)} value={this.state.brandName}>
                        <option>---select---</option>
                        {
                            this.state.Brand.map(x => {
                                return <option>{x}</option>
                            })
                        }
                    </select>
                    <label>Channel</label>
                    <select  className="options" onChange={this.channelChange.bind(this)} value={this.state.channelName} >
                        <option>---select---</option>
                        {
                            this.state.Channel.map(x => {
                                return <option>{x}</option>
                            })
                        }
                    </select>
                   
                </div>              
                </div>
                <button id="submit" onClick={this.Click}>Submit</button>
                <div id="table-heading" > Details Found  </div>
                <table className="table-container">
                    <tr>
                        <th>Plant</th>
                        <th>Customer ID</th>
                        <th>Brand</th>
                        <th>Channel</th>
                    </tr>
                    <tr>
                        <td>{selectedPlant}</td>
                        <td>{selectedCustomer}</td>
                        <td>{selectedBrand}</td>
                        <td>{selectedChannel}</td>
                    </tr>
                </table>
                <div id="download">
                <Download name={selectedPlant} Customer_No={selectedCustomer} Brand={selectedBrand} Channel={selectedChannel}></Download>
            </div>
            </div>
        )
    }
}
export default DropDown