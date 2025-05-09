import Image from 'next/image'
import Link from 'next/link'

const sidebar = () => {
  return (
    <aside className='Sidebar'>
        <div className='flex size-full flex-col gap-4'>
            <Link href="/" className='sidebar-logo' >
                <Image src="/assets/images/logo-text.svg" alt="logo" width={180} height={28} />
            </Link>
        </div>
    </aside>
  )
}

export default sidebar
