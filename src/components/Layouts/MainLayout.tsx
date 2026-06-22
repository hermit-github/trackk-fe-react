// layouts/MainLayout.tsx

// layouts/MainLayout.tsx
import type { ReactNode } from "react";

type MainLayoutProps = {
  header: ReactNode;
  sidebar: ReactNode;
  body: ReactNode;
};

export default function MainLayout({
  header,
  sidebar,
  body,
}: MainLayoutProps) {
  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header className="h-16 border-b shrink-0">
        {header}
      </header>

      {/* Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 border-r shrink-0 overflow-y-auto">
          {sidebar}
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {body}
        </main>
      </div>
    </div>
  );
}