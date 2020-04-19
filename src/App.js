import React from 'react';
import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import "primeflex/primeflex.css"
import MainFrame from "./components/MainFrame";
import List from "./todoapp/List";
import {InputText} from "primereact/inputtext";
import {InputMask} from "primereact/inputmask";
import Form from "./todoapp/Form";

function App() {
    return (
    <div>
        <Form />
        <h2>articles</h2>
        <List/>
    </div>
    );
}

export default App;
