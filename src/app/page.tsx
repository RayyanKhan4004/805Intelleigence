// import { Input } from '@/components/UI/input'
// import Navbar from '@/feature/navBar/components/Navbar'
// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Navbar />
//       <div className="container mx-auto p-10">
//         <h1 className="mb-6 text-2xl font-bold">Dashboard Placeholder</h1>
//         <Input placeholder="Search..." className="max-w-md" />
//       </div>
//     </div>
//   )
// }
import { redirect } from 'next/navigation'

export default function HomePage() {
  redirect('/reports')
}
