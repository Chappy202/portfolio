'use client'

import { useState } from 'react'
import { Input } from './input'
import { Button } from './buttons/button'

interface PasswordProtectedProps {
  children: React.ReactNode
  password: string
}

export function PasswordProtected({ children, password: correctPassword }: PasswordProtectedProps) {
  const [password, setPassword] = useState('')
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (password === correctPassword) {
      setIsUnlocked(true)
      setError('')
    } else {
      setError('Incorrect password')
      setPassword('')
    }
  }

  return (
    <div className="relative min-h-screen">
      {/* Content with conditional blur */}
      <div className={`transition-all duration-500 ${!isUnlocked ? 'blur-xl' : ''}`}>
        {children}
      </div>
      
      {/* Password form overlay */}
      {!isUnlocked && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
          <div className="container max-w-4xl mx-auto pt-16 md:pt-24">
            <div className="w-full max-w-md mx-auto p-6 bg-card rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-center">Protected Content</h2>
              <p className="text-muted-foreground mb-6 text-center">
                This project requires a password to view. Please enter it below.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full"
                  />
                  {error && (
                    <p className="text-destructive text-sm mt-2">{error}</p>
                  )}
                </div>
                <Button type="submit" className="w-full">
                  Unlock Content
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 