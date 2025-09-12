"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, RotateCcw } from "lucide-react"

const codeSnippets = [
  {
    title: "React Hook",
    code: `const useCounter = (initial = 0) => {
  const [count, setCount] = useState(initial);
  
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  const reset = () => setCount(initial);
  
  return { count, increment, decrement, reset };
};`,
    output: "Custom hook for counter logic ✨",
  },
  {
    title: "Algorithm",
    code: `const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const middle = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);
  
  return [...quickSort(left), ...middle, ...quickSort(right)];
};`,
    output: "Sorted: [1, 2, 3, 5, 8, 13, 21] 🚀",
  },
]

export function InteractiveCodeTerminal() {
  const [currentSnippet, setCurrentSnippet] = useState(0)
  const [displayedCode, setDisplayedCode] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [showOutput, setShowOutput] = useState(false)

  const typeCode = () => {
    setIsTyping(true)
    setShowOutput(false)
    setDisplayedCode("")

    const code = codeSnippets[currentSnippet].code
    let i = 0

    const typeInterval = setInterval(() => {
      if (i < code.length) {
        setDisplayedCode(code.slice(0, i + 1))
        i++
      } else {
        clearInterval(typeInterval)
        setIsTyping(false)
        setTimeout(() => setShowOutput(true), 500)
      }
    }, 30)
  }

  const nextSnippet = () => {
    setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length)
  }

  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover-lift">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold gradient-text">Interactive Code</h3>
        <div className="flex gap-2">
          <Button size="sm" onClick={typeCode} disabled={isTyping} className="bg-primary hover:bg-primary/90">
            <Play className="h-4 w-4 mr-1" />
            Run
          </Button>
          <Button size="sm" variant="outline" onClick={nextSnippet} disabled={isTyping}>
            <RotateCcw className="h-4 w-4 mr-1" />
            Next
          </Button>
        </div>
      </div>

      <div className="bg-muted/30 rounded-lg p-4 font-mono text-sm">
        <div className="text-muted-foreground mb-2">// {codeSnippets[currentSnippet].title}</div>
        <pre className="text-foreground whitespace-pre-wrap">
          {displayedCode}
          {isTyping && <span className="animate-pulse">|</span>}
        </pre>

        {showOutput && (
          <div className="mt-4 p-3 bg-primary/10 rounded border-l-4 border-primary">
            <div className="text-xs text-muted-foreground mb-1">Output:</div>
            <div className="text-primary font-medium">{codeSnippets[currentSnippet].output}</div>
          </div>
        )}
      </div>
    </Card>
  )
}
