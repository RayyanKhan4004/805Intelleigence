import { useEffect } from 'react'
import NavTabs from './NavTabs'
function SideBar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('max-lg:overflow-hidden')
    } else {
      document.body.classList.remove('max-lg:overflow-hidden')
    }
    return () => {
      document.body.classList.remove('max-lg:overflow-hidden')
    }
  }, [isOpen])
  return (
    <>
      <div
        onClick={onClose}
        className={`
    fixed inset-0 z-20 lg:hidden
    bg-black/20
    transition-opacity duration-700
    ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
  `}
      />
      <div
        onClick={e => e.stopPropagation()}
        className={` fixed top-[95px] bg-primary lg:hidden h-full z-30 duration-700 transition-all ${isOpen ? ' w-[60vw]' : ' !w-0 overflow-hidden'}`}
      >
        <NavTabs />
      </div>
    </>
  )
}

export default SideBar
