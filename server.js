 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a//dev/null b/server.js
index 0000000000000000000000000000000000000000..8c88cdb745492d1e335d316a425099bbe855d4ed 100644
--- a//dev/null
+++ b/server.js
@@ -0,0 +1,33 @@
+const express = require('express');
+const fs = require('fs');
+const path = require('path');
+
+const app = express();
+const PORT = process.env.PORT || 3000;
+const DATA_FILE = path.join(__dirname, 'submissions.json');
+
+app.use(express.json());
+app.use(express.urlencoded({ extended: true }));
+
+function saveSubmission(data) {
+  let entries = [];
+  if (fs.existsSync(DATA_FILE)) {
+    try {
+      entries = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
+    } catch (err) {
+      console.error('Failed to parse existing data:', err);
+    }
+  }
+  entries.push({ data, timestamp: new Date().toISOString() });
+  fs.writeFileSync(DATA_FILE, JSON.stringify(entries, null, 2));
+}
+
+app.post('/submit', (req, res) => {
+  console.log('Received submission:', req.body);
+  saveSubmission(req.body);
+  res.status(200).json({ status: 'ok' });
+});
+
+app.listen(PORT, () => {
+  console.log(`Server listening on port ${PORT}`);
+});
 
EOF
)
