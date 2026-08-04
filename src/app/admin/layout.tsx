import Link from "next/link"
import { LayoutDashboard, Users, MessageSquare, Settings, FileText, Image as ImageIcon, Calendar } from "lucide-react"

const sidebarLinks = [
  { icon: <LayoutDashboard size={20} />, label: "Dashboard", href: "/admin" },
  { icon: <FileText size={20} />, label: "Services", href: "/admin/services" },
  { icon: <Users size={20} />, label: "Enquiries", href: "/admin/enquiries" },
  { icon: <Calendar size={20} />, label: "Appointments", href: "/admin/appointments" },
  { icon: <MessageSquare size={20} />, label: "Messages", href: "/admin/messages" },
  { icon: <ImageIcon size={20} />, label: "Gallery", href: "/admin/gallery" },
  { icon: <Settings size={20} />, label: "Settings", href: "/admin/settings" },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed h-full z-10">
        <div className="p-6 border-b border-gray-200">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold">M</div>
            <span className="font-bold text-gray-900 tracking-tight">Admin Panel</span>
          </Link>
        </div>
        
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {sidebarLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors font-medium text-sm"
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="p-4 border-t border-gray-200">
          <button className="w-full py-2 px-4 rounded bg-gray-100 text-gray-700 font-medium text-sm hover:bg-gray-200 transition-colors">
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        {children}
      </main>
    </div>
  )
}
