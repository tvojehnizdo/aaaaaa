 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/server.js b/server.js
index 67909a4ea0a0643a0e03ef787dbbad2ce98d055e..0993769e14fe5d08b5bdefee4086110db844b8dd 100644
--- a/server.js
+++ b/server.js
@@ -67,65 +67,92 @@ index 64c765a93d003853071a7b5552b29bb32aff56de..b25c9bdc7c479f458abd9cc17bf25772
 -+  let entries = [];
 -+  if (fs.existsSync(DATA_FILE)) {
 -+    try {
 -+      entries = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
 -+    } catch (err) {
 -+      console.error('Failed to parse existing data:', err);
 -+    }
 -+  }
 -+  entries.push({ data, timestamp: new Date().toISOString() });
 -+  fs.writeFileSync(DATA_FILE, JSON.stringify(entries, null, 2));
 -+}
 -+
 -+app.post('/submit', (req, res) => {
 -+  console.log('Received submission:', req.body);
 -+  saveSubmission(req.body);
 -+  res.status(200).json({ status: 'ok' });
 -+});
 -+
 -+app.listen(PORT, () => {
 -+  console.log(`Server listening on port ${PORT}`);
 -+});
 - 
 -EOF
 -)
 +import express from 'express';
-+import fs from 'fs';
++import { promises as fs } from 'fs';
 +import path from 'path';
 +import { fileURLToPath } from 'url';
 +
 +const __dirname = path.dirname(fileURLToPath(import.meta.url));
 +
 +const app = express();
 +const PORT = process.env.PORT || 3000;
 +const DATA_FILE = path.join(__dirname, 'submissions.json');
 +
 +app.use(express.json());
 +app.use(express.urlencoded({ extended: true }));
 +
-+function saveSubmission(data) {
-+  let entries = [];
-+  if (fs.existsSync(DATA_FILE)) {
++async function saveSubmission(data) {
++  try {
++    let entries = [];
 +    try {
-+      entries = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
++      const content = await fs.readFile(DATA_FILE, 'utf8');
++      entries = JSON.parse(content);
 +    } catch (err) {
-+      console.error('Failed to parse existing data:', err);
++      if (err.code !== 'ENOENT') {
++        console.error('Failed to read existing data:', err);
++      }
 +    }
++    entries.push({ data, timestamp: new Date().toISOString() });
++    await fs.writeFile(DATA_FILE, JSON.stringify(entries, null, 2));
++  } catch (err) {
++    console.error('Error saving submission:', err);
++    throw err;
 +  }
-+  entries.push({ data, timestamp: new Date().toISOString() });
-+  fs.writeFileSync(DATA_FILE, JSON.stringify(entries, null, 2));
 +}
 +
-+app.post('/submit', (req, res) => {
++app.post('/submit', async (req, res) => {
 +  console.log('Received submission:', req.body);
-+  saveSubmission(req.body);
-+  res.status(200).json({ status: 'ok' });
++  try {
++    await saveSubmission(req.body);
++    res.status(200).json({ status: 'ok' });
++  } catch {
++    res.status(500).json({ status: 'error' });
++  }
 +});
 +
 +app.use(express.static(__dirname));
 +
 +app.listen(PORT, () => {
 +  console.log(`Server listening on port ${PORT}`);
 +});
  
 EOF
 )
+app.post('/submit', async (req, res) => {
+  console.log('Received submission:', req.body);
+  try {
+    await saveSubmission(req.body);
+    res.status(200).json({ status: 'ok' });
+  } catch {
+    res.status(500).json({ status: 'error' });
+  }
+});
+
+app.use(express.static(__dirname));
+
+app.listen(PORT, () => {
+  console.log(`Server listening on port ${PORT}`);
+});
+
+export { saveSubmission };
 
EOF
)
