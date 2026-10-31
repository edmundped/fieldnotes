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
