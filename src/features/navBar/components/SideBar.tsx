import { useEffect } from 'react'
import NavTabs from './NavTabs'
function SideBar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('max-md:overflow-hidden')
    } else {
      document.body.classList.remove('max-md:overflow-hidden')
    }
    return () => {
      document.body.classList.remove('max-md:overflow-hidden')
    }
  }, [isOpen])
  return (
    <>
      <div
        onClick={onClose}
        className={`
    fixed inset-0 z-20 md:hidden
    bg-black/20
    transition-opacity duration-700 
    ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
  `}
      />
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
