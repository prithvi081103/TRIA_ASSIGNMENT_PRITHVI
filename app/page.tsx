"use client"

import { useState, useMemo } from "react"
import { ContactList } from "@/components/contact-list"
import { SearchBar } from "@/components/search-bar"
import { AddContactDialog } from "@/components/add-contact-dialog"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export interface Contact {
  id: string
  name: string
  email: string
  phone: string
  avatar?: string
}

// Mock data - can be replaced with API call
const MOCK_CONTACTS: Contact[] = [
  {
    id: "1",
    name: "Alice Johnson",
    email: "alice@example.com",
    phone: "+1 (555) 123-4567",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
  },
  {
    id: "2",
    name: "Bob Smith",
    email: "bob@example.com",
    phone: "+1 (555) 234-5678",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob",
  },
  {
    id: "3",
    name: "Carol Williams",
    email: "carol@example.com",
    phone: "+1 (555) 345-6789",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carol",
  },
  {
    id: "4",
    name: "David Brown",
    email: "david@example.com",
    phone: "+1 (555) 456-7890",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
  },
  {
    id: "5",
    name: "Emma Davis",
    email: "emma@example.com",
    phone: "+1 (555) 567-8901",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
  },
  {
    id: "6",
    name: "Frank Miller",
    email: "frank@example.com",
    phone: "+1 (555) 678-9012",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Frank",
  },
]

export default function Home() {
  const [contacts, setContacts] = useState<Contact[]>(MOCK_CONTACTS)
  const [searchQuery, setSearchQuery] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // Filter contacts based on search query
  const filteredContacts = useMemo(() => {
    if (!searchQuery.trim()) return contacts

    const query = searchQuery.toLowerCase()
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(query) ||
        contact.email.toLowerCase().includes(query) ||
        contact.phone.includes(query),
    )
  }, [contacts, searchQuery])

  const handleAddContact = (newContact: Omit<Contact, "id" | "avatar">) => {
    const contact: Contact = {
      ...newContact,
      id: Date.now().toString(),
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${newContact.name}`,
    }
    setContacts([...contacts, contact])
    setIsDialogOpen(false)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-background">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Contacts</h1>
            <p className="mt-2 text-muted-foreground">Manage and organize your contact list</p>
          </div>
          <Button onClick={() => setIsDialogOpen(true)} className="gap-2" size="lg">
            <Plus className="h-4 w-4" />
            Add Contact
          </Button>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar value={searchQuery} onChange={setSearchQuery} placeholder="Search by name, email, or phone..." />
        </div>

        {/* Contact List */}
        <ContactList contacts={filteredContacts} />

        {/* Add Contact Dialog */}
        <AddContactDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} onAddContact={handleAddContact} />
      </div>
    </main>
  )
}
