// quartz/plugins/transformers/ProofEnvironment.ts
import { visit } from "unist-util-visit"
import type { Root } from "mdast"
import { QuartzTransformerPlugin } from "../types"

// Definiamo il plugin secondo la struttura standard di Quartz
export const ProofEnvironment: QuartzTransformerPlugin = () => {
  return {
    name: "ProofEnvironment",
    // Usiamo markdownPlugins, che è il modo corretto per registrare un trasformatore remark
    markdownPlugins() {
      return [
        () => {
          return (tree: Root) => {
            visit(tree, "inlineCode", (node, index, parent) => {
              if (parent && index !== undefined) {
                const value = node.value.trim()
                if (value === "\\begin{proof}") {
                  parent.children[index] = {
                    type: "html",
                    value: '<p><span class="proof-begin">Proof.</span></p>',
                  }
                } else if (value === "\\end{proof}") {
                  parent.children[index] = {
                    type: "html",
                    value: '<p class="proof-end">■</p>',
                  }
                }
              }
            })
          }
        },
      ]
    },
  }
}