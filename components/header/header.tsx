import { keyframes } from "@emotion/react";
import {Container, Flex} from "theme-ui";
import Logo from "../Logo";
import headerData from "./header.data";
import {Link} from "react-scroll";

type Props = {
    className?: string
}

export default function Header({className}: Props) {
    // @ts-ignore
    return <header sx={styles.header} className={className} id={"header"}>
        <Container sx={styles.container}>
            <Logo src={"/logo.png"}/>
            <Flex as={"nav"} sx={styles.nav}>
                {headerData.map((headerItem, i) => (
                    <Link
                    activeClass={"active"}
                    to={headerItem.path}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    key={i}>
                        {headerItem.label}
                    </Link>
                ))}
            </Flex>
        </Container>
    </header>
}

const positionAnimation = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }
  
  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
    header: {
        color: "text",
        fontWeight: "body",
        py: 4,
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "transparent",
        transition: "all 0.4s ease",
        animation: `${positionAnimation} 0.4s ease`,

    },
    container: {},
    nav: {}
}