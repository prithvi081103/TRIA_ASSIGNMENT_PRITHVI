"use client"

import type { Contact } from "@/app/page"
import { ContactCard } from "./contact-card"

interface ContactListProps {
  contacts: Contact[]
}

export function ContactList({ contacts }: ContactListProps) {
  if (contacts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-card px-6 py-12 text-center">
        <div className="mb-4 text-4xl">📋</div>
        <h3 className="text-lg font-semibold text-foreground">No contacts found</h3>
        <p className="mt-2 text-muted-foreground">Try adjusting your search or add a new contact to get started.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  )
}
