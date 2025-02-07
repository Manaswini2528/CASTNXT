import React, {Component} from "react"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import Header from "../Navbar/Header";

class AdminHomepage extends Component {
    constructor(props) {
        super(props)
        console.log(properties);
        this.state = {
            tableData: properties.tableData !== undefined ? properties.tableData : []
        }
    }
    
    renderEventList = () => {
        const { tableData } = this.state
        let rows = []
        
        if (!tableData.length) {
            
                rows.push(
                     <TableRow key={0}>
                        <TableCell colSpan={2} align="center">
                            No ongoing Events right now.
                        </TableCell>
                     </TableRow>
                )
            
        } else {
            tableData.map((event, i) => {
                if (event.status !== "DELETED"){
                    rows.push(
                        <TableRow key={i}>
                            <TableCell align="center" onClick={() => {window.location.href="/admin/events/"+event.id}}>
                                <b><a href={"/admin/events/"+event.id}>{event.title}</a></b>
                            </TableCell>
                            <TableCell align="center">{event.status}</TableCell>
                        </TableRow>
                    )
                }
            });
        } 
        return rows;
    }
    
    createEventRedirection = () => {
        window.location.href = "/admin/events/new"
    }

    render() {
        return (
            <div>
                <div>
                    <Header />
                </div>
                
                <div>
                    <div className="container user-events">
                        <div className="row">
                            <h2> CastNXT Events </h2>
                        </div>
                        <div className="row">
                            <div style={{marginBottom: 20}}>
                                <Button variant="contained" onClick={this.createEventRedirection}>Create New Event</Button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                <TableContainer component={Paper}>
                                    <Table aria-label="simple table">
                                        <TableHead style={{ backgroundColor: "#3498DB" }}>
                                            <TableRow>
                                                <TableCell align="center">Event</TableCell>
                                                <TableCell align="center">Status</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {this.renderEventList()}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminHomepage