import NavLink from "./navLink/navLink"

const Links = () => {
    const links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "Blog",
            path: "/blog"
        },
    ];

    //tmp
    const session = true
    const isAdmin = true

    return (
        <div className="flex">
            {links.map((link) => (
                <NavLink key={link.title} item={link} />
            ))}
        </div>
    )
}

export default Links
