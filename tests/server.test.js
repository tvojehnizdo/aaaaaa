 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a//dev/null b/tests/server.test.js
index 0000000000000000000000000000000000000000..470235fea92ea4f2a122e266f5aa0609a566d55d 100644
--- a//dev/null
+++ b/tests/server.test.js
@@ -0,0 +1,24 @@
+import { saveSubmission } from '../server.js';
+import { promises as fs } from 'fs';
+import path from 'path';
+import { fileURLToPath } from 'url';
+
+const DATA_FILE = path.join(
+  path.dirname(fileURLToPath(new URL('../server.js', import.meta.url))),
+  'submissions.json'
+);
+
+describe('saveSubmission', () => {
+  beforeEach(async () => {
+    try {
+      await fs.unlink(DATA_FILE);
+    } catch {}
+  });
+
+  test('writes submission to file', async () => {
+    await saveSubmission({ test: 1 });
+    const content = await fs.readFile(DATA_FILE, 'utf8');
+    const entries = JSON.parse(content);
+    expect(entries[0].data).toEqual({ test: 1 });
+  });
+});
 
EOF
)
