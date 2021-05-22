import React, { useState } from 'react';
import { FormControl, TextField, MenuItem, Button } from '@material-ui/core';

export default () => {
    const [formData, setFormData] = useState({
        graphType: '',
        
    });

    return (
        <div style={{borderLeft: '1px solid lightgray'}}>
            <form noValidate autoComplete="off">
                <FormControl>
                    <h2>Graph Controls</h2>
                    <TextField id="standard-select-currency" select label="Select" helperText="Please select your graph type">
                        <MenuItem>Line</MenuItem>
                        <MenuItem>Pie Chart</MenuItem>
                        <MenuItem>Bar Chart</MenuItem>
                    </TextField>
                </FormControl>
                <FormControl>
                    <TextField id="standard-number" label="X Axis" type="text" />
                    <TextField id="standard-number" label="Y Axis" type="number" />
                </FormControl>
                <br/>
                <br/>
                <FormControl>
                    <div>
                        <Button variant="contained" color="primary">
                            Add to Graph
                        </Button>
                    </div>
                    <br/>
                    <div>
                        <Button variant="contained" color="secondary">
                            Clear Graph
                        </Button>
                    </div> 
                </FormControl>
            </form>
        </div>
    );
}