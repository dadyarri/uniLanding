import {Link as A, NavLink as MenuLink, ThemeUIStyleObject} from 'theme-ui';
import NextLink from 'next/link';
import {ReactNode} from "react";

type Props = {
    path: string,
    label?: string,
    children: ReactNode,
    sx: ThemeUIStyleObject
}
export function NavLink({ path, label, children, ...rest }: Props) {
    return (
        <NextLink href={path}>
            <MenuLink {...rest}>{children ? children : label}</MenuLink>
        </NextLink>
    );
}
export function Link({ path, label, children, ...rest }: Props) {
    return (
        <A {...rest} href={path}>
            {children ? children : label}
        </A>
    );
}