"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/toast"

/**
 * FULL AUTH FLOW (UI ONLY)
 * - Login
 * - Register
 * - Forgot Password
 * - Reset Password
 *
 * Backend / API calls intentionally mocked.
 */

export default function LoginPage() {
  const [loading, setLoading] = React.useState(false)
  const [mousePosition, setMousePosition] = React.useState({ x: 50, y: 50 })
  const [activeTab, setActiveTab] = React.useState("login")

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100

    setMousePosition({
      x: Math.min(100, Math.max(0, x)),
      y: Math.min(100, Math.max(0, y)),
    })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 50, y: 50 })
  }

  async function mockSubmit(e: React.FormEvent, actionName: string) {
    e.preventDefault()
    setLoading(true)
    try {
      await new Promise((r) => setTimeout(r, 1200))
      toast.success(`${actionName} submitted successfully!`)
    } catch {
      toast.error(`Failed to submit ${actionName}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        {
          "--mx": `${mousePosition.x}%`,
          "--my": `${mousePosition.y}%`,
        } as React.CSSProperties
      }
    >
      {/* Animated gradient background */}
      <div
        className="pointer-events-none absolute inset-0 z-0 animate-gradient-drift"
        style={{
          backgroundImage:
            "radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(59, 130, 246, 0.15), rgba(147, 197, 253, 0.1) 25%, rgba(245, 245, 245, 0.95) 50%, rgba(230, 230, 230, 0.8) 75%, rgba(220, 220, 220, 0.6) 100%), linear-gradient(120deg, rgba(255, 255, 255, 0.9), rgba(235, 235, 235, 0.95))",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Floating orbs for atmosphere */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[20%] top-[15%] h-64 w-64 rounded-full bg-blue-200/30 blur-3xl animate-in fade-in zoom-in duration-1000" />
        <div className="absolute right-[15%] top-[60%] h-80 w-80 rounded-full bg-purple-200/20 blur-3xl animate-in fade-in zoom-in duration-1000 delay-300" />
        <div className="absolute bottom-[10%] left-[40%] h-72 w-72 rounded-full bg-pink-200/20 blur-3xl animate-in fade-in zoom-in duration-1000 delay-500" />
      </div>

      <main className="relative z-10 flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-6 duration-700">
          {/* Header section */}
          <div className="mb-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background/80 px-4 py-2 text-xs uppercase tracking-[0.3em] text-foreground/70 shadow-sm backdrop-blur-sm">
              Secure Access
            </div>
            <h1 className="mb-2 text-4xl font-semibold tracking-tight">Welcome Back</h1>
            <p className="text-sm text-foreground/60">
              Sign in to continue your journey
            </p>
          </div>

          {/* Main card with glass morphism effect */}
          <Card className="border-foreground/10 bg-background/90 shadow-2xl backdrop-blur-md">
            <CardContent className="p-6">
              <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="mb-6 grid w-full grid-cols-3 bg-background/60 p-1 backdrop-blur-sm">
                  <TabsTrigger 
                    value="login" 
                    className="data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-blue-500/30 transition-all duration-300"
                  >
                    Login
                  </TabsTrigger>
                  <TabsTrigger 
                    value="register"
                    className="data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-blue-500/30 transition-all duration-300"
                  >
                    Register
                  </TabsTrigger>
                  <TabsTrigger 
                    value="forgot"
                    className="data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-blue-500/30 transition-all duration-300"
                  >
                    Reset
                  </TabsTrigger>
                </TabsList>

                {/* LOGIN */}
                <TabsContent value="login" className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <form onSubmit={(e) => mockSubmit(e, 'Login')} className="space-y-5">
                    <div className="space-y-2 group">
                      <Label className="text-xs uppercase tracking-[0.2em] text-foreground/70">Email</Label>
                      <Input 
                        type="email" 
                        required 
                        className="border-foreground/15 bg-background/80 transition-all duration-300 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/10" 
                        placeholder="you@example.com"
                      />
                    </div>

                    <div className="space-y-2 group">
                      <Label className="text-xs uppercase tracking-[0.2em] text-foreground/70">Password</Label>
                      <Input 
                        type="password" 
                        required 
                        className="border-foreground/15 bg-background/80 transition-all duration-300 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/10"
                        placeholder="••••••••"
                      />
                    </div>

                    <Button 
                      className="w-full bg-blue-500 shadow-lg shadow-blue-500/30 transition-all duration-300 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98]" 
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          Signing in...
                        </span>
                      ) : (
                        "Sign in"
                      )}
                    </Button>

                    <div className="text-center">
                      <button
                        type="button"
                        onClick={() => setActiveTab("forgot")}
                        className="text-xs text-foreground/60 hover:text-foreground/80 transition-colors"
                      >
                        Forgot your password?
                      </button>
                    </div>
                  </form>
                </TabsContent>

                {/* REGISTER */}
                <TabsContent value="register" className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <form onSubmit={(e) => mockSubmit(e, 'Register')} className="space-y-5">
                    <div className="space-y-2">
                      <Label className="text-xs uppercase tracking-[0.2em] text-foreground/70">Email</Label>
                      <Input 
                        type="email" 
                        required 
                        className="border-foreground/15 bg-background/80 transition-all duration-300 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/10"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-xs uppercase tracking-[0.2em] text-foreground/70">Password</Label>
                      <Input 
                        type="password" 
                        required 
                        className="border-foreground/15 bg-background/80 transition-all duration-300 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/10"
                        placeholder="••••••••"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-xs uppercase tracking-[0.2em] text-foreground/70">Confirm Password</Label>
                      <Input 
                        type="password" 
                        required 
                        className="border-foreground/15 bg-background/80 transition-all duration-300 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/10"
                        placeholder="••••••••"
                      />
                    </div>

                    <Button 
                      className="w-full bg-blue-500 shadow-lg shadow-blue-500/30 transition-all duration-300 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98]" 
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          Creating account...
                        </span>
                      ) : (
                        "Create account"
                      )}
                    </Button>

                    <div className="text-center">
                      <button
                        type="button"
                        onClick={() => setActiveTab("login")}
                        className="text-xs text-foreground/60 hover:text-foreground/80 transition-colors"
                      >
                        Already have an account?
                      </button>
                    </div>
                  </form>
                </TabsContent>

                {/* FORGOT PASSWORD */}
                <TabsContent value="forgot" className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <div className="mb-4 rounded-2xl border border-blue-500/20 bg-blue-50/50 p-4 backdrop-blur-sm">
                    <p className="text-xs text-foreground/70">
                      Enter your email address and we'll send you a link to reset your password.
                    </p>
                  </div>
                  
                  <form onSubmit={(e) => mockSubmit(e, 'Password Reset')} className="space-y-5">
                    <div className="space-y-2">
                      <Label className="text-xs uppercase tracking-[0.2em] text-foreground/70">Email</Label>
                      <Input 
                        type="email" 
                        required 
                        className="border-foreground/15 bg-background/80 transition-all duration-300 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/10"
                        placeholder="you@example.com"
                      />
                    </div>

                    <Button 
                      className="w-full bg-blue-500 shadow-lg shadow-blue-500/30 transition-all duration-300 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98]" 
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          Sending link...
                        </span>
                      ) : (
                        "Send reset link"
                      )}
                    </Button>

                    <div className="text-center">
                      <button
                        type="button"
                        onClick={() => setActiveTab("login")}
                        className="text-xs text-foreground/60 hover:text-foreground/80 transition-colors"
                      >
                        Back to login
                      </button>
                    </div>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Footer badges */}
          <div className="mt-8 flex items-center justify-center gap-3 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <span className="rounded-full border border-foreground/10 bg-background/70 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-foreground/60 backdrop-blur-sm">
              Secure
            </span>
            <span className="rounded-full border border-foreground/10 bg-background/70 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-foreground/60 backdrop-blur-sm">
              Encrypted
            </span>
            <span className="rounded-full border border-foreground/10 bg-background/70 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-foreground/60 backdrop-blur-sm">
              Protected
            </span>
          </div>
        </div>
      </main>
    </div>
  )
}
