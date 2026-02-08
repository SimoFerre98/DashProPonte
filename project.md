📂 Project Specification: Gestionale "Pro Pontedecimo Calcio"
Project Name: Pro Pontedecimo Manager Type: Web Application (SaaS Dashboard) Target Users: Staff (Presidente, Dirigenti, Allenatori) & Utenti finali (Giocatori/Genitori).

1. 🛠 Tech Stack (Mandatory)
Framework: Next.js 14+ (App Router).

Language: TypeScript (Strict mode).

Database & Auth: Supabase (PostgreSQL).

Use Supabase Auth for user management.

Use Row Level Security (RLS) for data protection.

UI Framework: Tailwind CSS + Shadcn/ui (components).

Charts: Recharts or Tremor.

Email Infrastructure: Resend (API).

Deployment: Vercel.

2. 🎨 UI/UX Design System
Style: Minimalist, clean, whitespace-heavy (SaaS style).

Color Palette:

Primary: Bordeaux (#800020 or #9E1B32).

Background: Neutral/White/Light Gray.

Responsive: Mobile-first approach (must work on phones for coaches on the field).

3. 👥 User Roles & Permissions (RBAC)
Presidente (Super Admin): Full access. Can manage other admins. View all notes/financials.

Dirigenti (Admin): Manage Players, Payments, Medical Data, Send Emails, Edit Pricing.

Allenatori (Staff): Read/Write access only for their specific Squad/Leva. Personal notes area.

Giocatori/Genitori (User): Read-only access to their own profile (Payment status, Medical expiry).

4. 💾 Database & Data Management
Migration: Provide a script/UI to import legacy data from CSV/Excel/Access.

Export: Feature to export data views (e.g., "List of Debtors", "Team List") to .xlsx (Excel).

Core Logic - The "Season Rollover":

Implement a Cron Job (via Supabase pg_cron or Edge Functions) scheduled for July 1st every year.

Action: Auto-increment player category ("Leva") based on birth year.

Action: Update the "Expected Payment" for the new season based on the new category.

5. 🚀 Key Modules
A. Dashboard (Home)
Admin View:

Financial Overview (Collected vs Expected).

Medical Alerts (Number of expired certificates).

Player Distribution (Pie chart by Category).

User View:

Personal Payment Status (Green/Red).

Medical Certificate Status.

B. Financial Management
Pricing Engine:

Set standard price per "Category/Leva".

Manual Override: Allow Admins to set a custom price for specific players (financial aid/discounts).

Tracking: Status tracking (Paid, Partial, Overdue).

Insolvency: Auto-highlight overdue payments.

C. Medical Center
Tracking: Store "Visit Date" and "Expiry Date".

Alerts:

Email: Send auto-reminders (via Resend) to parents 30 days before expiry.

UI: Show distinct warning icons for expiring/expired certs.

D. Communication
Email Blasts: Admins can send bulk emails to specific groups (e.g., "All Under-15s", "All Unpaid").

Transactional: Auto-emails for payment receipts and medical reminders.

E. Personal Workspace (Productivity)
Feature: "My Notes" / Kanban Board.

Scope: Private per user (President, Directors, Coaches).

Usage: Simple text notes or tasks (e.g., "Call sponsor", "Bring cones").

6. Future Proofing
Design the Database Schema to support a future Internal Chat System (User-to-User messaging).

1. Project Overview
Build a comprehensive, minimalist SaaS-style web application to manage a football club ("Pro Pontedecimo Calcio"). The system will digitize player registration, payments, medical deadlines, attendance, inventory, and internal communications.

2. Tech Stack (Strict Requirements)
Framework: Next.js 14+ (App Router).

Language: TypeScript (Strict mode enabled).

Styling: Tailwind CSS + Shadcn/ui (for UI components).

Database & Auth: Supabase.

PostgreSQL for relational data.

Supabase Auth for user management.

Row Level Security (RLS) is mandatory for data protection.

State Management: React Server Components (server-side fetching) + React Hooks.

Charts: Recharts or Tremor (for the dashboard).

Email Service: Resend (via API).

Deployment: Vercel (Frontend) + Supabase (Backend).

3. UI/UX Design System
Aesthetics: Modern, clean, "Linear-style" dashboard. High use of whitespace.

Color Palette:

Primary Brand Color: Bordeaux (#800020 or #9E1B32). Used for primary buttons, active states, and accents.

Background: Neutral light tones (Slate/Gray 50-100).

Responsiveness: Mobile-first design is critical for Coaches using the app on the field.

4. User Roles & Permissions (RBAC)
Implemented via Supabase Auth and RLS policies:

President (Super Admin): Full CRUD access to all tables. Can manage admin permissions. View all notes.

Manager/Dirigente (Admin): Manage Players, Payments, Medical Records, Inventory. Send Broadcast Emails. Edit Pricing.

Coach/Allenatore (Staff): Read/Write access strictly limited to their own Team/Squad. Can take Attendance. Private Notes.

Player/Parent (User): Read-only access to their own profile, payment status, and medical expiry date.

5. Database Schema Strategy (Supabase)
users: Links to Supabase Auth, stores role and profile data.

players: Personal info, birth year, linked to team_id.

teams: Categories (e.g., "Under 15", "Piccoli Amici").

payments: Linked to player_id. Columns: amount_due, amount_paid, status (Paid/Partial/Overdue), season_year.

medical_records: Linked to player_id. Columns: visit_date, expiry_date, certificate_url (Supabase Storage).

attendance: Linked to player_id + event_date. Boolean status (Present/Absent).

inventory: Items tracking (e.g., "Balls", "Kits"). Columns: item_name, quantity, assigned_to (user_id).

notes: Personal tasks. Columns: content, owner_id, is_completed.

6. Core Modules & Features
A. The "Season Rollover" (Business Logic)
Requirement: The fiscal/sporting year resets on July 1st.

Automation: Implement a Supabase Edge Function or pg_cron job scheduled for July 1st.

Logic:

Auto-increment the player's category based on birth year.

Generate new payment rows for the new season based on the new category's standard price.

Archive previous season data.

B. Financial Module
Pricing: Admins set a standard price per Team/Category.

Overrides: Admins must be able to manually override the price for specific players (financial aid).

Dashboard: Visual indicators for "Insolvent" players (Red row background or warning icon).

C. Medical Center
Alerts:

UI: Dashboard widget showing "Expiring in < 30 days" and "Expired".

Email: Automated emails via Resend to parents 30 days before expiry.

D. Attendance Tracking (New)
Interface: A simple list view for Coaches.

Action: Toggle switches next to player names to mark presence/absence for the current date.

Stats: Calculate % attendance per player.

E. Inventory Management (New)
Function: Track club assets (balls, bibs, medical bags).

Assignment: Log who checked out an item (e.g., "Coach Marco took 10 balls").

F. Data Export
Feature: "Export to Excel" button on all data tables (Players, Payments, Attendance).

Tech: Use xlsx (SheetJS) library to generate downloadable .xlsx files client-side.

G. Productivity (Personal Notes)
Component: A Kanban-style or simple list component for "My Tasks".

Scope: Private to the logged-in user (not shared).

7. Future Scalability
Ensure database schema supports a future messages table for internal chat.