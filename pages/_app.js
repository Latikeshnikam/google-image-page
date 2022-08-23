import React from "react";
import {Provider} from "react-redux";
import App, {Container} from "next/app";
import withRedux from "next-redux-wrapper";
import makeStore from '../store';
import 'bootstrap/dist/css/bootstrap.min.css'
import Popper from '@popperjs/core';

class MyApp extends App {

    static async getInitialProps({Component, ctx}) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return { pageProps };
    }

    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <Container>
                <link
                    rel="stylesheet"
                    href="bootstrap/dist/css/bootstrap.min.css"
                />
                <link rel="stylesheet" href="css/styles.css" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous" />
                <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }

}

export default withRedux(makeStore)(MyApp);
