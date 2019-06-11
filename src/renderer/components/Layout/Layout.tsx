import * as React from 'react';
import Header from './Header';
import Footer from './Footer';

interface IPros {
    children?: React.ReactNode;
}

export class Layout extends React.Component<IPros> {
    public render() {
        return (
            <React.Fragment>
                <Header />
                {this.props.children}
                <Footer />
            </React.Fragment>
        );
    }
}
