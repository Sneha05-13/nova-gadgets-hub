import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { adminUsers } from "@/lib/data";
import { Search, UserPlus } from "lucide-react";

export const Route = createFileRoute("/admin/users")({
  component: AdminUsersPage,
});

function AdminUsersPage() {
  return (
    <AdminLayout>
      <div className="mb-6 flex items-end justify-between flex-wrap gap-3">
        <div>
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Customers</p>
          <h2 className="font-display text-2xl mt-1">Users</h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card/40 border border-border">
            <Search className="size-4 text-muted-foreground" />
            <input placeholder="Search users" className="bg-transparent outline-none text-sm w-56" />
          </div>
          <button className="px-4 py-2.5 rounded-xl bg-foreground text-background text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            <UserPlus className="size-4" /> Invite
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card/40 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
            <tr className="text-left">
              <th className="px-5 py-3">User</th>
              <th className="px-5 py-3">Email</th>
              <th className="px-5 py-3">Orders</th>
              <th className="px-5 py-3">Tier</th>
              <th className="px-5 py-3 text-right">Joined</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {adminUsers.map((u) => (
              <tr key={u.id} className="hover:bg-white/[0.02]">
                <td className="px-5 py-4 flex items-center gap-3">
                  <div className="size-9 rounded-full bg-gradient-to-br from-accent/40 to-accent/10 border border-border grid place-items-center text-xs">
                    {u.name.split(" ").map((p) => p[0]).join("")}
                  </div>
                  <div>
                    <p className="font-medium">{u.name}</p>
                    <p className="text-[10px] font-mono text-muted-foreground">{u.id}</p>
                  </div>
                </td>
                <td className="px-5 py-4 text-muted-foreground">{u.email}</td>
                <td className="px-5 py-4 font-mono">{u.orders}</td>
                <td className="px-5 py-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-full border border-border bg-white/5">{u.tier}</span>
                </td>
                <td className="px-5 py-4 text-right text-muted-foreground">{u.joined}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
