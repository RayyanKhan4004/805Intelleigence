import NavTabs from './NavTabs'
function SideBar({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={` fixed top-[60px] bg-primary md:hidden h-full z-30 duration-700 transition-all ${isOpen ? ' w-[60vw]' : ' !w-0 overflow-hidden'}`}
    >
      <NavTabs />
    </div>
  )
}

export default SideBar
