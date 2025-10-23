"use client"

import type { Contact } from "@/app/page"
import { Card } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"
import Image from "next/image"

interface ContactCardProps {
  contact: Contact
}

export function ContactCard({ contact }: ContactCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg hover:border-primary/50">
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6">
        <div className="flex items-center gap-4">
          {contact.avatar && (
            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full bg-primary/10">
              <Image src={contact.avatar || "/placeholder.svg"} alt={contact.name} fill className="object-cover" />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="truncate text-lg font-semibold text-foreground">{contact.name}</h3>
            <p className="truncate text-sm text-muted-foreground">{contact.email}</p>
          </div>
        </div>
      </div>

      <div className="space-y-3 p-4">
        <div className="flex items-center gap-3 text-sm">
          <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
          <a href={`mailto:${contact.email}`} className="truncate text-foreground hover:text-primary transition-colors">
            {contact.email}
          </a>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
          <a href={`tel:${contact.phone}`} className="text-foreground hover:text-primary transition-colors">
            {contact.phone}
          </a>
        </div>
      </div>
    </Card>
  )
}
