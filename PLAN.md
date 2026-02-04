# Clairvoyant

> The AI assistant that knows what you need before you ask.

## The Problem

Current AI assistants are **reactive** — you ask, they answer. But real assistants anticipate needs. They prep you for meetings, flag urgent items, remind you of context you've forgotten. They think ahead.

**Pain points:**
- You walk into meetings unprepared because you forgot to review notes
- Important emails get buried under noise
- Tasks slip because nothing reminded you at the right time
- Context-switching kills productivity — you waste time re-orienting

## The Solution

**Clairvoyant** is a proactive AI layer that watches your digital life and surfaces what matters, when it matters.

Instead of asking "Hey AI, what's on my calendar?" — Clairvoyant tells you:
> "You have a call with Acme Corp in 30 min. Last time you discussed pricing concerns. Here's the context you need..."

---

## Core Features (MVP)

### 1. **Pre-Meeting Briefs**
- Automatically generates context before calendar events
- Pulls from: past emails with attendees, previous meeting notes, relevant docs
- Delivered via notification/widget 15-30 min before

### 2. **Smart Email Triage**
- Surfaces emails that actually need your attention
- Learns what's important to YOU (not generic spam filtering)
- "3 emails need responses today" vs inbox of 500

### 3. **Proactive Reminders**
- "You mentioned following up with Sarah — it's been 5 days"
- "Your deadline for X is tomorrow, you haven't started"
- Context-aware, not just time-based

### 4. **Daily Brief**
- Morning summary: key meetings, priority tasks, things to know
- Evening review: what got done, what slipped, tomorrow's priorities

---

## UI/UX Design

### Design Philosophy
- **Ambient, not intrusive** — information appears when needed, disappears when not
- **Glanceable** — understand everything in 3 seconds
- **Trust-building** — show WHY it's suggesting something (citations/sources)

### Primary Interfaces

#### 1. **The Feed (Home)**
```
┌─────────────────────────────────────┐
│  Good morning, Arnav                │
│  Wednesday, Feb 4                   │
├─────────────────────────────────────┤
│  🔮 COMING UP                       │
│  ┌─────────────────────────────────┐│
│  │ 10:30 AM — Call with Investor   ││
│  │ ⚡ High priority                 ││
│  │                                  ││
│  │ Context: Last call was 1/15,    ││
│  │ discussed seed round terms.     ││
│  │ They asked about MAU growth.    ││
│  │                                  ││
│  │ [View Full Brief →]             ││
│  └─────────────────────────────────┘│
│                                     │
│  📧 NEEDS YOUR ATTENTION            │
│  ┌─────────────────────────────────┐│
│  │ 3 emails flagged                ││
│  │ • Re: Contract review (legal)   ││
│  │ • Urgent: Server issue          ││
│  │ • Follow-up from Sarah          ││
│  └─────────────────────────────────┘│
│                                     │
│  💡 INSIGHTS                        │
│  • You promised to send the deck   │
│    to Mike — haven't yet (4 days)  │
│  • Task "Write blog post" due      │
│    tomorrow, 0% complete           │
└─────────────────────────────────────┘
```

#### 2. **Meeting Brief (Expanded)**
```
┌─────────────────────────────────────┐
│  ← Back                             │
│                                     │
│  📅 Call with Investor              │
│  10:30 AM - 11:00 AM                │
│  Zoom • John Smith, Sarah Lee       │
├─────────────────────────────────────┤
│                                     │
│  📋 QUICK CONTEXT                   │
│  Series A discussion, 2nd meeting.  │
│  They're interested but had         │
│  concerns about unit economics.     │
│                                     │
│  💬 LAST CONVERSATION (Jan 15)      │
│  • Discussed $2M seed at $10M cap   │
│  • They wanted to see Jan metrics   │
│  • You promised updated deck        │
│                                     │
│  📎 RELEVANT DOCS                   │
│  • Pitch Deck v3.pdf                │
│  • January Metrics.xlsx             │
│  • Term Sheet Draft.docx            │
│                                     │
│  ⚠️ WATCH OUT                       │
│  • You haven't sent updated deck    │
│  • Jan metrics show 15% dip in MAU  │
│                                     │
│  ✅ SUGGESTED PREP                  │
│  □ Review January numbers           │
│  □ Prepare explanation for dip      │
│  □ Send deck before call            │
└─────────────────────────────────────┘
```

#### 3. **Notification System**
- **Push notifications** — sparingly, only high-signal
- **Widget** — iOS/Android home screen widget showing next item
- **Desktop menubar** — quick glance at what's coming
- **Email digest** — optional morning/evening summary

#### 4. **Settings & Training**
```
┌─────────────────────────────────────┐
│  ⚙️ Clairvoyant Settings            │
├─────────────────────────────────────┤
│                                     │
│  CONNECTED ACCOUNTS                 │
│  ✓ Google Calendar                  │
│  ✓ Gmail                            │
│  ○ Slack (connect)                  │
│  ○ Notion (connect)                 │
│                                     │
│  NOTIFICATION PREFERENCES           │
│  Meeting briefs: 30 min before [▼]  │
│  Daily brief: 8:00 AM [▼]           │
│  Email digest: Off [▼]              │
│                                     │
│  FOCUS HOURS                        │
│  Don't disturb: 9 AM - 12 PM        │
│  (Still shows urgent items)         │
│                                     │
│  FEEDBACK                           │
│  Help Clairvoyant learn:            │
│  [Was this helpful?] 👍 👎          │
└─────────────────────────────────────┘
```

### Interaction Patterns

1. **Swipe to dismiss** — "I've got this" removes item from feed
2. **Tap for detail** — expand any card for full context
3. **Long-press for actions** — snooze, mark done, share
4. **Thumbs up/down** — trains the model on your preferences

---

## Technical Architecture

### System Overview

```
┌──────────────────────────────────────────────────────────────┐
│                        CLAIRVOYANT                           │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────┐     ┌─────────────┐     ┌─────────────┐    │
│  │   Mobile    │     │   Desktop   │     │   Web App   │    │
│  │  (iOS/And)  │     │  (Menubar)  │     │             │    │
│  └──────┬──────┘     └──────┬──────┘     └──────┬──────┘    │
│         │                   │                   │            │
│         └───────────────────┼───────────────────┘            │
│                             │                                │
│                    ┌────────▼────────┐                       │
│                    │    API Layer    │                       │
│                    │   (REST/WS)     │                       │
│                    └────────┬────────┘                       │
│                             │                                │
│         ┌───────────────────┼───────────────────┐            │
│         │                   │                   │            │
│  ┌──────▼──────┐    ┌──────▼──────┐    ┌──────▼──────┐      │
│  │  Ingestion  │    │  Analysis   │    │  Delivery   │      │
│  │   Service   │    │   Engine    │    │   Service   │      │
│  └──────┬──────┘    └──────┬──────┘    └─────────────┘      │
│         │                   │                                │
│  ┌──────▼──────┐    ┌──────▼──────┐                         │
│  │ Integration │    │  LLM Layer  │                         │
│  │   Workers   │    │ (GPT/Claude)│                         │
│  └─────────────┘    └─────────────┘                         │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │                    DATA LAYER                         │   │
│  │  PostgreSQL │ Redis │ Vector DB │ Blob Storage       │   │
│  └──────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────┘
```

### Core Components

#### 1. **Ingestion Service**
Pulls data from connected sources and normalizes it.

```typescript
// Integrations to build (MVP)
- Google Calendar API (events, attendees)
- Gmail API (emails, threads)
- Google Drive API (doc metadata)

// Future integrations
- Slack (messages, channels)
- Notion (pages, databases)
- Linear/Jira (tasks, issues)
- Salesforce (CRM context)
```

**Data flow:**
1. OAuth connection established
2. Initial sync (last 90 days)
3. Webhook/polling for real-time updates
4. Normalize into unified schema
5. Store in PostgreSQL + Vector DB

#### 2. **Analysis Engine**
The brain — determines what's important and when.

```typescript
// Core jobs (cron-based)
- Pre-meeting context generation (runs 1hr before events)
- Email importance scoring (runs on new email)
- Commitment extraction (scans sent emails for promises)
- Task deadline monitoring (daily check)

// Importance scoring factors
- Sender relationship (frequent contact = higher weight)
- Keywords (urgent, deadline, ASAP)
- Thread context (ongoing conversation)
- User feedback history (learned preferences)
```

**LLM Usage:**
```typescript
// Example: Meeting brief generation
const prompt = `
Generate a meeting brief for:
Event: ${event.title}
Attendees: ${attendees.join(', ')}

Context:
- Previous emails with attendees: ${relevantEmails}
- Past calendar events: ${pastMeetings}
- Mentioned documents: ${docs}

Output format:
1. One-line summary of relationship/context
2. Key points from last interaction
3. Relevant documents (if any)
4. Potential gotchas or things to prepare
`;
```

#### 3. **Vector Database (Embeddings)**
For semantic search across all user data.

```typescript
// What gets embedded
- Email bodies (chunked)
- Calendar event descriptions
- Document summaries
- Meeting notes

// Use case: "What did we discuss about pricing?"
// → Semantic search across all historical data
// → Return relevant chunks with source citations
```

**Tech choice:** Pinecone, Weaviate, or pgvector (simpler for MVP)

#### 4. **Delivery Service**
Gets the right info to the right place at the right time.

```typescript
// Delivery channels
- Push notifications (Firebase/APNs)
- WebSocket for real-time feed updates
- Email digest (SendGrid/Resend)

// Timing logic
- Meeting briefs: 30 min before (configurable)
- Urgent emails: immediate
- Daily brief: user's preferred time
- Insights: batched, not real-time
```

### Tech Stack (Recommended)

| Layer | Technology | Why |
|-------|------------|-----|
| **Frontend (Mobile)** | React Native / Expo | Cross-platform, fast iteration |
| **Frontend (Web)** | Next.js 14 | App router, server components |
| **Desktop** | Electron or Tauri | Menubar app, lightweight |
| **API** | Node.js + tRPC or Hono | Type-safe, fast |
| **Database** | PostgreSQL + Prisma | Reliable, good tooling |
| **Cache** | Redis | Session, rate limiting, queues |
| **Vector DB** | pgvector (MVP) → Pinecone | Start simple, scale later |
| **Queue** | BullMQ (Redis-based) | Job scheduling, retries |
| **LLM** | OpenAI GPT-4 / Claude | Best quality for summaries |
| **Auth** | Clerk or Auth.js | OAuth, easy Google integration |
| **Hosting** | Vercel + Railway | Simple, scalable |
| **Push** | Firebase Cloud Messaging | Cross-platform push |

### Data Model (Simplified)

```prisma
model User {
  id            String   @id @default(cuid())
  email         String   @unique
  name          String?
  
  // Connected accounts
  googleTokens  GoogleAuth?
  slackTokens   SlackAuth?
  
  // Preferences
  meetingBriefTiming  Int @default(30) // minutes before
  dailyBriefTime      String @default("08:00")
  focusHoursStart     String?
  focusHoursEnd       String?
  
  // Relations
  events        Event[]
  emails        Email[]
  insights      Insight[]
  feedItems     FeedItem[]
}

model Event {
  id            String   @id
  userId        String
  title         String
  startTime     DateTime
  endTime       DateTime
  attendees     String[] // email addresses
  
  // Generated content
  brief         String?  // LLM-generated
  briefGeneratedAt DateTime?
  
  user          User @relation(fields: [userId], references: [id])
}

model Email {
  id            String   @id
  userId        String
  threadId      String
  subject       String
  from          String
  snippet       String
  receivedAt    DateTime
  
  // Analysis
  importanceScore Float?
  needsResponse   Boolean @default(false)
  
  // Embeddings stored in vector DB, linked by id
  
  user          User @relation(fields: [userId], references: [id])
}

model Insight {
  id            String   @id @default(cuid())
  userId        String
  type          String   // "commitment", "followup", "deadline"
  content       String
  sourceType    String   // "email", "calendar"
  sourceId      String
  dueDate       DateTime?
  dismissed     Boolean  @default(false)
  
  user          User @relation(fields: [userId], references: [id])
}

model FeedItem {
  id            String   @id @default(cuid())
  userId        String
  type          String   // "meeting_brief", "email_triage", "insight"
  priority      Int
  content       Json
  showAt        DateTime
  expiresAt     DateTime?
  dismissed     Boolean  @default(false)
  
  user          User @relation(fields: [userId], references: [id])
}
```

### Security & Privacy

**Critical** — users are giving access to email/calendar. Trust is everything.

1. **Encryption at rest** — all user data encrypted (AES-256)
2. **Encryption in transit** — TLS everywhere
3. **Token storage** — OAuth tokens encrypted, never logged
4. **Data isolation** — strict user-level access controls
5. **Minimal retention** — configurable, default 90 days
6. **No training on user data** — LLM calls don't train models
7. **SOC 2 compliance** — target for enterprise sales
8. **Delete on demand** — full data deletion within 24h

---

## MVP Roadmap

### Phase 1: Foundation (Weeks 1-3)
- [ ] Auth + Google OAuth integration
- [ ] Calendar sync + basic event display
- [ ] Gmail sync + email list
- [ ] Simple web dashboard

### Phase 2: Intelligence (Weeks 4-6)
- [ ] Meeting brief generation (LLM)
- [ ] Email importance scoring
- [ ] Basic insights (commitments, follow-ups)
- [ ] Feed UI with cards

### Phase 3: Delivery (Weeks 7-8)
- [ ] Push notifications
- [ ] Daily brief email
- [ ] Timing logic (when to show what)
- [ ] User preferences/settings

### Phase 4: Polish (Weeks 9-10)
- [ ] Mobile app (React Native)
- [ ] Feedback loops (thumbs up/down)
- [ ] Onboarding flow
- [ ] Beta testing

**MVP Goal:** 10 weeks to a testable product

---

## Business Model

### Pricing Tiers

| Tier | Price | Features |
|------|-------|----------|
| **Free** | $0 | 1 calendar, basic briefs, 7-day history |
| **Pro** | $12/mo | Unlimited calendars, full history, email triage, insights |
| **Team** | $20/user/mo | Shared context, team briefs, admin controls |
| **Enterprise** | Custom | SSO, compliance, dedicated support |

### Go-to-Market

1. **Launch on Product Hunt** — AI productivity tool, good fit
2. **Twitter/X presence** — build in public, show demos
3. **Content marketing** — "How I never miss meeting context again"
4. **Founder communities** — heavy calendar/email users
5. **Integrations** — list on Notion, Slack marketplaces

---

## Competitive Landscape

| Competitor | What they do | Our edge |
|------------|--------------|----------|
| **Reclaim.ai** | Calendar optimization | We're about context, not scheduling |
| **Motion** | Auto-scheduling | Same — different focus |
| **Superhuman** | Fast email | We're about proactive insights, not speed |
| **Notion AI** | Doc assistant | We work across all your tools |
| **Mem.ai** | AI note-taking | We're about upcoming needs, not past notes |

**Our moat:** 
- Proactive vs reactive (fundamental UX difference)
- Cross-tool context (calendar + email + docs together)
- Timing intelligence (right info at right time)

---

## Success Metrics

### North Star
**Daily Active Users checking their brief**

### Key Metrics
- **Meeting brief open rate** (target: 60%+)
- **Insight dismissal rate** (lower = more relevant)
- **Emails flagged → actioned** (proves value)
- **DAU/MAU ratio** (target: 40%+ = sticky)
- **NPS** (target: 50+)

---

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| LLM costs too high | Aggressive caching, smaller models for simple tasks |
| Users don't trust AI with email | Transparency, read-only access, clear privacy policy |
| Brief quality inconsistent | User feedback loop, continuous prompt tuning |
| Google API rate limits | Efficient syncing, delta updates, caching |
| Competitive response | Move fast, nail UX, build brand |

---

## Next Steps

1. **Validate concept** — talk to 10 heavy calendar/email users
2. **Design mockups** — Figma prototype of core flows
3. **Build auth + Google integration** — the foundation
4. **Generate first meeting brief** — prove the magic moment
5. **Get 5 beta users** — friends, iterate fast

---

*"The best AI assistant is one you forget is there — until you realize you can't live without it."*
