import React from 'react';
import './App.css';
import Collapsible from "./Collapsible";
import {FormControl, InputGroup} from "react-bootstrap";

function App() {
  return (
    <div className="App">
        <h1>Expandible example</h1>
        <Collapsible title="Filter">
            <div className="input-filters">
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text>First name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text>Last name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text>Email name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text>Other name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl />
                </InputGroup>
            </div>
        </Collapsible>
    </div>
  );
}

export default App;
