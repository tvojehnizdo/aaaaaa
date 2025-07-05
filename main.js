 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/main.js b/main.js
index 40a7d70a1746487edb4051b4b25f331952208b5b..b5df5d87bc81f2ae5dc889f79db52c7080204c37 100644
--- a/main.js
+++ b/main.js
@@ -1,62 +1,23 @@
- (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
-diff --git a/main.js b/main.js
-index e2dc87e1f1dac60b4fd1242ba0f3468a7a5bbad9..b5df5d87bc81f2ae5dc889f79db52c7080204c37 100644
---- a/main.js
-+++ b/main.js
-@@ -1,30 +1,23 @@
-- (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
--diff --git a//dev/null b/main.js
--index 0000000000000000000000000000000000000000..14ee5faa57cfae68c91837b2387059f8d95da235 100644
----- a//dev/null
--+++ b/main.js
--@@ -0,0 +1,21 @@
--+// Placeholder for future real-time price calculation and visualization
--+
--+document.addEventListener('DOMContentLoaded', () => {
--+  const form = document.getElementById('config-form');
--+  const priceDisplay = document.getElementById('price-display');
--+
--+  function updatePrice() {
--+    // TODO: Implement real-time price calculation based on form inputs
--+    priceDisplay.textContent = 'Cena: -- Kč (bude vypočtena)';
--+  }
--+
--+  form.addEventListener('input', updatePrice);
--+
--+  form.addEventListener('submit', (e) => {
--+    e.preventDefault();
--+    // TODO: finalize submit logic
--+    alert('Formulář byl odeslán. Funkce pro odeslání bude doplněna.');
--+  });
--+
--+  updatePrice();
--+});
-- 
--EOF
--)
-+import { calculatePrice } from './src/priceCalculator.js';
-+
-+document.addEventListener('DOMContentLoaded', () => {
-+  const form = document.getElementById('config-form');
-+  const priceDisplay = document.getElementById('price-display');
-+
-+  function updatePrice() {
-+    const disposition = form.elements.disposition.value;
-+    const area = parseFloat(form.elements.area.value) || 0;
-+    const delivery = form.elements.delivery.value;
-+
-+    const price = calculatePrice(disposition, area, delivery);
-+    priceDisplay.textContent = `Cena: ${price.toLocaleString('cs-CZ')} Kč`;
-+  }
-+
-+  form.addEventListener('input', updatePrice);
-+  form.addEventListener('submit', (e) => {
-+    e.preventDefault();
-+    alert('Formulář byl odeslán. Funkce pro odeslání bude doplněna.');
-+  });
-+
-+  updatePrice();
-+});
- 
-EOF
-)
+import { calculatePrice } from './src/priceCalculator.js';
+
+document.addEventListener('DOMContentLoaded', () => {
+  const form = document.getElementById('config-form');
+  const priceDisplay = document.getElementById('price-display');
+
+  function updatePrice() {
+    const disposition = form.elements.disposition.value;
+    const area = parseFloat(form.elements.area.value) || 0;
+    const delivery = form.elements.delivery.value;
+
+    const price = calculatePrice(disposition, area, delivery);
+    priceDisplay.textContent = `Cena: ${price.toLocaleString('cs-CZ')} Kč`;
+  }
+
+  form.addEventListener('input', updatePrice);
+  form.addEventListener('submit', (e) => {
+    e.preventDefault();
+    alert('Formulář byl odeslán. Funkce pro odeslání bude doplněna.');
+  });
+
+  updatePrice();
+});
 
EOF
)
