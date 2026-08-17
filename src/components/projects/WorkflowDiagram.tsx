import { ArrowRight } from "lucide-react";

interface WorkflowDiagramProps {
  nodes: string[];
  compact?: boolean;
}

export default function WorkflowDiagram({ nodes, compact }: WorkflowDiagramProps) {
  return (
    <div
      className="flex flex-wrap items-center justify-center gap-2"
      role="img"
      aria-label={`Workflow: ${nodes.join(" → ")}`}
    >
      {nodes.map((node, i) => (
        <div key={node} className="flex items-center gap-2">
          <span
            className={`rounded-lg border border-line bg-canvas font-medium ${
              compact ? "px-2.5 py-1.5 text-xs" : "px-3.5 py-2 text-sm"
            } font-display`}
          >
            {node}
          </span>
          {i < nodes.length - 1 && (
            <ArrowRight className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
          )}
        </div>
      ))}
    </div>
  );
}