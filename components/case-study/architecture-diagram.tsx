const NODES = [
  "Client Application (React.js / TypeScript on Vite Build)",
  "Authentication & Session Management (JWT, Protected Routes & Refresh)",
  "State & Cache Layer (React Query, Axios, Context API & Custom Hooks)",
  "GDS & Travel REST Integrations (Sabre, Travelport & Travel APIs)",
  "Multi-Vertical Booking Engines (Flights, Hotels, Trains)",
  "Drive Stipend Reimbursement Workflow (Frontend to Backend)",
];

export function ArchitectureDiagram() {
  return (
    <div className="border-border bg-surface/50 rounded-xl border p-6 sm:p-8">
      <p className="text-text-secondary mb-4 font-mono text-xs uppercase tracking-wider">
        Component &amp; Integration Architecture
      </p>
      <ol className="flex flex-col gap-3">
        {NODES.map((node, i) => (
          <li key={node} className="flex items-center gap-3">
            <span className="text-accent font-mono text-xs font-semibold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="border-border bg-surface text-text-primary rounded-md border px-3.5 py-2 font-mono text-sm shadow-ambient">
              {node}
            </span>
          </li>
        ))}
      </ol>
      <p className="text-text-secondary mt-5 font-mono text-xs">
        Architecture spanning client-side caching, GDS synchronization, and multi-vertical form lifecycles.
      </p>
    </div>
  );
}
