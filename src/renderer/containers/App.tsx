import * as React from 'react';
import * as Layout from '../components/Layout';
import { hot } from 'react-hot-loader';

interface IProps {
    children?: React.ReactNode;
}

class App extends React.Component<IProps> {
    public render() {
        return (
            <Layout.Layout>
                <div>Home!</div>
            </Layout.Layout>
        );
    }
}

export default hot(module)(App);
