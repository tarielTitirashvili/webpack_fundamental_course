import { createRoot } from "react-dom/client"
import App from "./app"
import { StrictMode } from "react"

const root = document.getElementById("root")

if (!root) {
  throw new Error("root not found")
}

const container = createRoot(root)

container.render(
  <StrictMode>
    <App />
  </StrictMode>
)
