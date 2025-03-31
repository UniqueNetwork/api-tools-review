"use client"

import { useState, useEffect } from "react"

interface ErrorAlertProps {
  message: string
  onDismiss?: () => void
  autoHideDuration?: number
}

export const ErrorAlert = ({ message, onDismiss, autoHideDuration = 5000 }: ErrorAlertProps) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (autoHideDuration > 0) {
      const timer = setTimeout(() => {
        setVisible(false)
        onDismiss?.()
      }, autoHideDuration)

      return () => clearTimeout(timer)
    }
  }, [autoHideDuration, onDismiss])

  if (!visible || !message) return null

  return (
    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4 rounded shadow-sm">
      <div className="flex items-start">
        <div className="ml-3">
          <p className="text-sm text-red-700">{message}</p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              onClick={() => {
                setVisible(false)
                onDismiss?.()
              }}
              className="inline-flex rounded-md p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
            >
              <span className="sr-only">Dismiss</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

