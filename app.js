 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/app.js b/app.js
index af25dd9117bb75fcad2d8e5f2c31ae1d58277862..2b7ddec5c6129db88e4cf09e9e0b0c2c9d05135a 100644
--- a/app.js
+++ b/app.js
@@ -1,64 +1,23 @@
- (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
-diff --git a/app.js b/app.js
-index f6a06c584a4fa0b7b16063842ffbeabb14dae301..2b7ddec5c6129db88e4cf09e9e0b0c2c9d05135a 100644
---- a/app.js
-+++ b/app.js
-@@ -1,32 +1,23 @@
-- (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
--diff --git a//dev/null b/app.js
--index 0000000000000000000000000000000000000000..2b7ddec5c6129db88e4cf09e9e0b0c2c9d05135a 100644
----- a//dev/null
--+++ b/app.js
--@@ -0,0 +1,23 @@
--+const form = document.getElementById('houseForm');
--+const errorDiv = document.getElementById('error');
--+
--+form.addEventListener('submit', function(e) {
--+  e.preventDefault();
--+  const missing = [];
--+
--+  const rooms = document.getElementById('rooms').value.trim();
--+  if (!rooms) missing.push('Number of rooms');
--+
--+  const roofColor = document.getElementById('roofColor').value.trim();
--+  if (!roofColor) missing.push('Roof color');
--+
--+  const garage = document.getElementById('garage').value;
--+  if (!garage) missing.push('Garage');
--+
--+  if (missing.length > 0) {
--+    errorDiv.textContent = 'Please fill out: ' + missing.join(', ');
--+  } else {
--+    errorDiv.textContent = '';
--+    alert('Form submitted successfully!');
--+  }
--+});
-- 
--EOF
--)
-+const form = document.getElementById('houseForm');
-+const errorDiv = document.getElementById('error');
-+
-+form.addEventListener('submit', function(e) {
-+  e.preventDefault();
-+  const missing = [];
-+
-+  const rooms = document.getElementById('rooms').value.trim();
-+  if (!rooms) missing.push('Number of rooms');
-+
-+  const roofColor = document.getElementById('roofColor').value.trim();
-+  if (!roofColor) missing.push('Roof color');
-+
-+  const garage = document.getElementById('garage').value;
-+  if (!garage) missing.push('Garage');
-+
-+  if (missing.length > 0) {
-+    errorDiv.textContent = 'Please fill out: ' + missing.join(', ');
-+  } else {
-+    errorDiv.textContent = '';
-+    alert('Form submitted successfully!');
-+  }
-+});
- 
-EOF
-)
+const form = document.getElementById('houseForm');
+const errorDiv = document.getElementById('error');
+
+form.addEventListener('submit', function(e) {
+  e.preventDefault();
+  const missing = [];
+
+  const rooms = document.getElementById('rooms').value.trim();
+  if (!rooms) missing.push('Number of rooms');
+
+  const roofColor = document.getElementById('roofColor').value.trim();
+  if (!roofColor) missing.push('Roof color');
+
+  const garage = document.getElementById('garage').value;
+  if (!garage) missing.push('Garage');
+
+  if (missing.length > 0) {
+    errorDiv.textContent = 'Please fill out: ' + missing.join(', ');
+  } else {
+    errorDiv.textContent = '';
+    alert('Form submitted successfully!');
+  }
+});
 
EOF
)
