import {keyframes} from "@emotion/react";
import {Button, Container, Flex} from "theme-ui";
import Logo from "../Logo";
import headerData from "./header.data";
import {Link, scroller} from "react-scroll";

type Props = {
    className?: string
}

export default function Header({className}: Props) {

    const preorderBtnClick = () => {
        scroller.scrollTo("preorder", {
            spy: true,
            smooth: true,
            offset: -70,
            duration: 500
        });
    }

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
            <Button
                key={"preorder"}
                className={"preorder__btn"}
                variant={"secondary"}
                onClick={preorderBtnClick}
            >Предзаказ</Button>
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
        color: 'text',
        fontWeight: 'body',
        py: 4,
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'transparent',
        transition: 'all 0.4s ease',
        animation: `${positionAnimation} 0.4s ease`,
        '.preorder__btn': {
            flexShrink: 0,
            mr: [15, 20, null, null, 0],
            ml: ['auto', null, null, null, 0],
        },
        '&.sticky': {
            position: 'fixed',
            backgroundColor: 'background',
            color: '#000000',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
            py: 3,
            'nev > a': {
                color: 'text',
            },
        },
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    nav: {
        mx: 'auto',
        display: 'none',
        '@media screen and (min-width: 1024px)': {
            display: 'block',
        },
        a: {
            fontSize: 2,
            fontWeight: 'body',
            px: 5,
            cursor: 'pointer',
            lineHeight: '1.2',
            transition: 'all 0.15s',
            '&:hover': {
                color: 'primary',
            },
            '&.active': {
                color: 'primary',
            },
        },
    },
};