"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"


/* ---------------- SCHEMA ---------------- */

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormValues = z.infer<typeof contactSchema>

/* ---------------- COMPONENT ---------------- */

export default function ContactForm() {
  const [loading, setLoading] = React.useState(false)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(_: ContactFormValues) {
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    alert("Message sent (mock)")
    form.reset()
  }

  return (
    <main className="min-h-screen bg-background px-4 md:px-8">
      <div className="max-w-6xl mx-auto pt-24 pb-24">
        {/* Header Section */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-16 mb-12">
          <div className="md:col-span-1 flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight">Get in Touch</h1>
              <p className="text-muted-foreground">
                We'd love to hear from you. Send us a message.
              </p>
            </div>
          </div>

          {/* Decorative Element */}
          <div className="md:col-span-2 hidden md:flex items-center justify-end">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 opacity-50" />
          </div>
        </div>

        {/* Form Section - Split Layout */}
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Primary Fields */}
          <Card className="shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl">Your Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label className="text-sm font-semibold">Full Name</Label>
                <Input 
                  placeholder="John Doe"
                  {...form.register("name")} 
                  className="rounded-lg"
                />
                {form.formState.errors.name && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    ⚠ {form.formState.errors.name.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-semibold">Email Address</Label>
                <Input 
                  type="email" 
                  placeholder="you@example.com"
                  {...form.register("email")} 
                  className="rounded-lg"
                />
                {form.formState.errors.email && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    ⚠ {form.formState.errors.email.message}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Right Column - Message */}
          <div className="flex flex-col space-y-6">
            <Card className="shadow-lg flex-1">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">Your Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-sm font-semibold">Subject</Label>
                  <Input 
                    placeholder="What's this about?"
                    {...form.register("subject")} 
                    className="rounded-lg"
                  />
                  {form.formState.errors.subject && (
                    <p className="text-sm text-destructive flex items-center gap-1">
                      ⚠ {form.formState.errors.subject.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-semibold">Message</Label>
                  <Textarea 
                    rows={4}
                    placeholder="Tell us more..."
                    {...form.register("message")} 
                    className="rounded-lg resize-none"
                  />
                  {form.formState.errors.message && (
                    <p className="text-sm text-destructive flex items-center gap-1">
                      ⚠ {form.formState.errors.message.message}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Submit Button - Full Width on Right */}
            <Button 
              type="submit"
              className="w-full py-6 text-base font-semibold bg-blue-500 text-white rounded-lg shadow-lg shadow-blue-500/30 hover:bg-blue-600 transition" 
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="animate-spin">⏳</span>
                  Sending...
                </span>
              ) : (
                "Send Message →"
              )}
            </Button>
          </div>
        </form>
      </div>
    </main>
  )
}
