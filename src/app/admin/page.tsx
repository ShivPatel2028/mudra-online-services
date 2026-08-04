"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, FileText, Calendar, TrendingUp } from "lucide-react"

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <span className="text-sm text-gray-500">Welcome back, Admin</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Total Enquiries", value: "1,248", icon: <Users className="w-6 h-6 text-blue-500" />, trend: "+12%" },
          { title: "Active Services", value: "42", icon: <FileText className="w-6 h-6 text-orange-500" />, trend: "+3%" },
          { title: "Appointments Today", value: "18", icon: <Calendar className="w-6 h-6 text-green-500" />, trend: "Steady" },
          { title: "Revenue (Est)", value: "₹45K", icon: <TrendingUp className="w-6 h-6 text-purple-500" />, trend: "+8%" },
        ].map((stat, i) => (
          <Card key={i} className="border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">{stat.title}</CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <p className="text-xs text-green-600 mt-1">{stat.trend} from last month</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-2 border-none shadow-sm">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                  <div>
                    <p className="text-sm font-medium text-gray-900">New PAN Card Enquiry</p>
                    <p className="text-xs text-gray-500">Ramesh Patel submitted a request</p>
                  </div>
                  <span className="text-xs text-gray-400">2 hours ago</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <button className="w-full py-2 px-4 rounded bg-blue-50 text-blue-700 font-medium text-sm hover:bg-blue-100 transition-colors text-left flex items-center justify-between">
              Add New Service <span>+</span>
            </button>
            <button className="w-full py-2 px-4 rounded bg-orange-50 text-orange-700 font-medium text-sm hover:bg-orange-100 transition-colors text-left flex items-center justify-between">
              View Today's Appointments <span>→</span>
            </button>
            <button className="w-full py-2 px-4 rounded bg-green-50 text-green-700 font-medium text-sm hover:bg-green-100 transition-colors text-left flex items-center justify-between">
              Update Site Settings <span>⚙️</span>
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
