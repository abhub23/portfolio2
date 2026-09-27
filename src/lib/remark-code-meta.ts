import type { Nodes, Root } from "mdast";

interface CodeMetaData {
  hProperties?: Record<string, string>;
}

export function remarkCodeMeta() {
  return (tree: Root) => {
    const walk = (node: Nodes) => {
      if (node.type === "code") {
        const meta = node.meta ?? undefined;
        if (meta) {
          if (!node.data) {
            node.data = {};
          }
          const data = node.data as CodeMetaData;
          if (!data.hProperties) {
            data.hProperties = {};
          }
          const hProperties = data.hProperties;

          hProperties["data-meta"] = meta;

          const titleMatch = meta.match(/title="([^"]+)"/);
          if (titleMatch?.[1]) {
            hProperties["data-title"] = titleMatch[1];
          }
        }
      }

      if ("children" in node) {
        for (const child of node.children) walk(child);
      }
    };

    walk(tree);
  };
}
