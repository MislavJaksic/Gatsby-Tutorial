import React from "react"
import { Link } from "gatsby"

export default function Header() {
  return (
    <div>
      <Link to = "/">Home</Link>
      <Link to = "/about/">About</Link>
    </div>
  )
}
