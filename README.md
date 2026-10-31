# Fieldnotes

A browser-local prototype for inclusive, multilingual field research in Ghana.

## Try it
Serve this directory using `python3 -m http.server 8000`, then open http://localhost:8000. No build or API keys required. GitHub Pages can publish the root of the main branch.

## Implemented
- Dashboard with clearly marked illustrative pilot data and live local response counts.
- Survey builder with text, choice, and audio-capable questions.
- Consent gate, language/region metadata, multiple-question collection.
- Microphone recording and playback through MediaRecorder (requires HTTPS or localhost and permission).
- Responses and audio stored in IndexedDB; survey definitions stored in localStorage.
- Manual transcript/translation entry, review status, original response retention.
- Search, status/source filters, CSV export, individual audio downloads.
- Service worker caches the app for offline revisits after the first successful online load. External fonts fall back to system fonts offline.

## Deliberate limits
This is a test-data prototype, not a production data collection system. No Khaya integration, automatic transcription, translation, question playback, cloud synchronization, accounts, access controls, encryption layer, or production backend. Language selection is metadata; questions remain in the language entered by the survey author. The charts use explicitly illustrative static percentages. Twenty sample responses are seeded; real local test entries are separately labeled. The collection wizard's unfinished answers are held in memory until saved, so reloading mid-interview loses that draft. Browser storage can be cleared or evicted; export test records and audio as needed. Do not use sensitive or real participant data.

## Next integration steps
Put credentials behind an authenticated backend; add consent/retention policies and secure object storage; integrate Kobo/ODK or a validated sync layer; route authorized audio to a benchmarked speech provider; maintain source transcripts, translations and review audit history. Never place Khaya API secrets in this static client.

## Rewards prototype
Participants enter a reusable anonymous code during collection. Each survey earns 100 pending points; approval unlocks them once per participant code and survey. Validation requires consent, relevant/complete answers and reviewer-confirmed eligibility, with a recorded reason. Opinions, audio use and speed do not alter rewards. Reviewers can hold, approve or reject; final decisions are locked. Ordinary transcript edits cannot overwrite reward decisions.

The Rewards page shows pending/available/lifetime points, milestone badges, a simulated catalogue and redemption receipts. Read/write IndexedDB transactions serialize reward approval and redemption, recheck duplicates and balances, and prevent repeat approvals or overspending within the local database. Sample and pre-rewards records cannot earn points. Run `node reward-rules.test.cjs` for eligibility/accounting checks.

All reward values are illustrative. No airtime, data, money or real voucher is delivered. There are no secure accounts or reviewer roles; participant codes are self-declared and local storage can be edited or cleared. This is not fraud prevention across people/devices. Real rewards require server-enforced identity/eligibility, reviewer access control, an auditable ledger, programme budgets, appeals and a payout provider. Creating a new survey ID creates a new reward opportunity in the prototype. Milestones beyond two contributions require additional surveys.
