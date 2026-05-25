// 9AMB IPPT SCORING DASHBOARD - Google Sheet Live Configuration
// IMPORTANT:
// 1. In Google Sheets, go to File > Share > Publish to web.
// 2. Publish the "IPPT Entry" tab as CSV.
// 3. Copy the gid number from the IPPT Entry tab URL and paste it below.

const GOOGLE_SHEET_CONFIG = {
  enabled: true,

  // Your Google Sheet ID
  sheetId: "1XUgKydizhHc_pnSUVrPQpfYV_igef-uXJgpORoB4c18",

  // Replace this with the actual gid of the IPPT Entry tab if different.
  gid: "1764518998",

  // Fallback to data.json if Google Sheet cannot be loaded.
  useLocalFallback: true
};
