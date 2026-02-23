import Navbar from './Navbar'
function SideBar({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={`md:hidden ${isOpen ? ' w-[60vw]' : ' !w-0 overflow-hidden'}`}>
      <Navbar />
    </div>
  )
}

export default SideBar
