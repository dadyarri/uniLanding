import Head from "next/head";
import Header from "../components/header/header";
import React from "react";
import {ThemeProvider} from "theme-ui";
import theme from "../theme";

export default function Home() {
    return (
        // @ts-ignore
        <ThemeProvider theme={theme}>
            <Head>
                <title>UNI</title>
            </Head>
            <Header></Header>
        </ThemeProvider>
    )
}
