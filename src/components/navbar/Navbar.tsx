import Link from "next/link"
import MaxWidthWrapper from "../MaxWidthWrapper"
import Links from "./links/Links"
import { ModeToggle } from "./mode-toggle"

const Navbar = () => {
    return (
        <div>
            <MaxWidthWrapper className="py-4">
                <div className="flex justify-between">
                    <div>
                        Logo
                    </div>
                    <div>
                        <Links />
                    </div>
                    <div>
                        <ModeToggle />
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export default Navbar
