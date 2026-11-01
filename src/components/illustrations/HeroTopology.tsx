const nodeStyle = {
  fill: "var(--bg-surface-elevated)",
  stroke: "var(--border-primary)",
  strokeWidth: 1.5,
} as const;

export function HeroTopology() {
  return (
    <div
      className="rounded-[8px] border-[1.5px] border-[var(--border-structural)] bg-[var(--bg-surface-technical)] p-4 shadow-[6px_6px_0px_0px_var(--border-structural)]"
      role="img"
      aria-label="Illustrative conceptual diagram of a typical backend request flow: client request through a REST API gateway, an authentication and access-control layer, core application logic, and a relational database."
    >
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full border border-[var(--border-primary)]" />
          <span className="h-2.5 w-2.5 rounded-full border border-[var(--border-primary)]" />
          <span className="h-2.5 w-2.5 rounded-full border border-[var(--border-primary)]" />
        </div>
        <span className="font-mono text-[11px] font-medium tracking-[0.08em] text-[var(--text-muted)]">
          CONCEPTUAL_REQUEST_FLOW
        </span>
        <span className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold text-[var(--status-online)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--status-online)]" aria-hidden="true" />
          ILLUSTRATIVE
        </span>
      </div>

      <svg
        viewBox="0 0 440 400"
        className="h-auto w-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Connectors */}
        <path
          d="M220 70 L220 120"
          stroke="var(--border-structural)"
          strokeWidth={2}
          markerEnd="url(#arrow)"
          fill="none"
        />
        <path
          d="M220 190 L220 240"
          stroke="var(--border-structural)"
          strokeWidth={2}
          markerEnd="url(#arrow)"
          fill="none"
        />
        <path
          d="M220 310 L220 340"
          stroke="var(--border-structural)"
          strokeWidth={2}
          markerEnd="url(#arrow)"
          fill="none"
        />

        <defs>
          <marker
            id="arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M0 0 L10 5 L0 10 z" fill="var(--border-structural)" />
          </marker>
        </defs>

        {/* Client */}
        <g>
          <rect x="140" y="20" width="160" height="50" rx="4" style={nodeStyle} />
          <text
            x="220"
            y="40"
            textAnchor="middle"
            className="font-mono text-[11px] font-semibold"
            fill="var(--text-main)"
          >
            CLIENT REQUEST
          </text>
          <text
            x="220"
            y="56"
            textAnchor="middle"
            className="font-mono text-[10px]"
            fill="var(--text-muted)"
          >
            Browser / App
          </text>
        </g>

        {/* Gateway */}
        <g>
          <rect
            x="110"
            y="120"
            width="220"
            height="70"
            rx="4"
            fill="var(--bg-surface-tint)"
            stroke="var(--border-structural)"
            strokeWidth={1.5}
          />
          <text
            x="220"
            y="148"
            textAnchor="middle"
            className="font-mono text-[11px] font-semibold"
            fill="var(--text-accent-blue)"
          >
            REST API GATEWAY
          </text>
          <text
            x="220"
            y="166"
            textAnchor="middle"
            className="font-mono text-[10px]"
            fill="var(--text-muted)"
          >
            Routing · Validation
          </text>
        </g>

        {/* Auth / RBAC + Core logic */}
        <g>
          <rect x="30" y="240" width="170" height="70" rx="4" style={nodeStyle} />
          <text
            x="115"
            y="268"
            textAnchor="middle"
            className="font-mono text-[11px] font-semibold"
            fill="var(--text-main)"
          >
            AUTH &amp; RBAC
          </text>
          <text
            x="115"
            y="286"
            textAnchor="middle"
            className="font-mono text-[10px]"
            fill="var(--text-muted)"
          >
            Role-based access
          </text>
        </g>
        <g>
          <rect x="240" y="240" width="170" height="70" rx="4" style={nodeStyle} />
          <text
            x="325"
            y="268"
            textAnchor="middle"
            className="font-mono text-[11px] font-semibold"
            fill="var(--text-main)"
          >
            APPLICATION LOGIC
          </text>
          <text
            x="325"
            y="286"
            textAnchor="middle"
            className="font-mono text-[10px]"
            fill="var(--text-muted)"
          >
            Core business rules
          </text>
        </g>
        <path
          d="M115 240 L115 220 L220 220 L220 190"
          stroke="var(--border-structural)"
          strokeWidth={2}
          fill="none"
        />
        <path
          d="M325 240 L325 220 L220 220"
          stroke="var(--border-structural)"
          strokeWidth={2}
          fill="none"
        />

        {/* Database */}
        <g>
          <rect
            x="110"
            y="340"
            width="220"
            height="50"
            rx="4"
            fill="var(--bg-surface-warm)"
            stroke="var(--border-primary)"
            strokeWidth={1.5}
          />
          <text
            x="220"
            y="362"
            textAnchor="middle"
            className="font-mono text-[11px] font-semibold"
            fill="var(--text-main)"
          >
            RELATIONAL DATABASE
          </text>
          <text
            x="220"
            y="378"
            textAnchor="middle"
            className="font-mono text-[10px]"
            fill="var(--text-muted)"
          >
            e.g. PostgreSQL
          </text>
        </g>
      </svg>
    </div>
  );
}

