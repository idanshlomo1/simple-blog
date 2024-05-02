"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
    item: {
        title: string;
        path: string;
    };
}

const NavLink = ({ item }: NavLinkProps) => {
    const pathName = usePathname();

    return (
        <div>

            <Link
                href={item.path}

            >
                <Button
                    variant={"outline"}
                >
                    {item.title}
                </Button>

            </Link>

        </div>
    );
}

export default NavLink;
