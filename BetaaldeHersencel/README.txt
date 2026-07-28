BETAALDE HERSENCEL — STREAMELEMENTS CUSTOM WIDGETS
====================================================

Each folder is one StreamElements CUSTOM WIDGET, split into the 5 editor tabs:
  HTML.html   -> paste into the HTML tab
  CSS.css     -> paste into the CSS tab
  JS.js       -> paste into the JS tab
  FIELDS.json -> paste into the FIELDS tab
  DATA.json   -> paste into the DATA tab

HOW TO ADD ONE
1. StreamElements > My Overlays > open/create a 1080p overlay
2. Add Widget > Static / Custom > Custom widget
3. Open the widget's "Settings > Open Editor", paste each file into its tab
4. Click Done, then size the widget to the full 1920x1080 canvas
   (alerts can stay full-canvas too; the toast positions itself)
5. Widgets with a logo: upload logo.png (in this folder) via the
   "Logo image" field in the widget settings

ALERTS
Alert widgets listen to real StreamElements events:
  Alert Follow   -> new followers
  Alert Sub      -> new subs (shows months)
  Alert Raid     -> raids (shows viewer count)
  Alert Donation -> tips (shows amount + message)
  Alert Cheer    -> bits (shows amount + message)
Test them with the overlay editor's event simulator.

NOTES
- Screens (Starting Soon / BRB / Offline / Ending) are full-screen scenes;
  give each its own overlay or scene.
- "Starting Soon" countdown length is a widget field (minutes).
- "Overlay In-Game" cam corner is a widget field; put your webcam layer
  under the overlay, aligned with the cam frame.
- Emotes/badges render via code (JS tab) — no image uploads needed.
