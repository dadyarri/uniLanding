import {Image} from "theme-ui";
import {Link} from "./Link";

type Props = {
    src: string
}

export default function Logo({src, ...rest}: Props) {
    return <Link
        path={"/"}
        sx={{
            variant: "links.logo",
            display: "flex",
            cursor: "pointer",
            mr: 15
        }}
        {...rest}>
        <Image src={src} alt={"uni logo"}/>
    </Link>
}