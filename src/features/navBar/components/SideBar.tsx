import NavTabs from './NavTabs'
function SideBar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <>
      {/* Backdrop (outside click) */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/20 z-20 md:hidden duration-500 transition-all delay-200"
        />
      )}

      <div
        onClick={e => e.stopPropagation()}
        className={` fixed top-[60px] bg-primary md:hidden h-full z-30 duration-700 transition-all ${isOpen ? ' w-[60vw]' : ' !w-0 overflow-hidden'}`}
      >
        <NavTabs />
      </div>
    </>
  )
}

export default SideBar
