import NavItem from "./ui/NavItem"

const Header = () => {
    return (
        <div className='stick w-full flex justify-center gap-x-4 items-center top-0 h-[65px]  border-b'>
            <span className=" font-bold inline-block text-xl">⚡ Potter API Explorer</span>
            <NavItem/>
        </div>
    )
}

export default Header
