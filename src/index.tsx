import React from 'react';
import ReactDOM  from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query'

const client = new QueryClient();

ReactDOM.render(
    //to be able to use react query in the application
    <QueryClientProvider client= {client}> 
        <App/>
    </QueryClientProvider>,
    
    document.getElementById('root')
)