 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/main.js b/main.js
index e21a03b677066d7fab8fbcc81c28d5920168d72d..cf61c4fd1cfb8259767bb6031ef87a4b10da33f0 100644
--- a/main.js
+++ b/main.js
@@ -1,102 +1,63 @@
- (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
-diff --git a/main.js b/main.js
-index e2dc87e1f1dac60b4fd1242ba0f3468a7a5bbad9..cf61c4fd1cfb8259767bb6031ef87a4b10da33f0 100644
---- a/main.js
-+++ b/main.js
-@@ -1,30 +1,63 @@
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
-+document.addEventListener('DOMContentLoaded', () => {
-+  const form = document.getElementById('config-form');
-+  const priceDisplay = document.getElementById('price-display');
-+
-+  const basePrices = {
-+    shell: 15000,
-+    turnkey: 25000
-+  };
-+
-+  const dispositionMultiplier = {
-+    '1kk': 1,
-+    '2kk': 1.2,
-+    '3kk': 1.4,
-+    '4kk': 1.6
-+  };
-+
-+  function formatPrice(value) {
-+    return value.toLocaleString('cs-CZ');
-+  }
-+
-+  function updatePrice() {
-+    const area = parseFloat(form.area.value);
-+    const delivery = form.delivery.value;
-+    const disposition = form.disposition.value;
-+
-+    if (!isNaN(area)) {
-+      const price = area * basePrices[delivery] * (dispositionMultiplier[disposition] || 1);
-+      priceDisplay.textContent = `Cena: ${formatPrice(price)} Kč`;
-+    } else {
-+      priceDisplay.textContent = 'Cena: -- Kč (bude vypočtena)';
-+    }
-+  }
-+
-+  form.addEventListener('input', updatePrice);
-+
-+  form.addEventListener('submit', async (e) => {
-+    e.preventDefault();
-+    const area = parseFloat(form.area.value);
-+    const data = {
-+      disposition: form.disposition.value,
-+      area: area,
-+      delivery: form.delivery.value,
-+    };
-+
-+    try {
-+      const res = await fetch('/submit', {
-+        method: 'POST',
-+        headers: { 'Content-Type': 'application/json' },
-+        body: JSON.stringify(data)
-+      });
-+      if (res.ok) {
-+        alert('Poptávka byla úspěšně odeslána.');
-+      } else {
-+        alert('Odeslání se nezdařilo.');
-+      }
-+    } catch (error) {
-+      console.error(error);
-+      alert('Chyba při odesílání formuláře.');
-+    }
-+  });
-+
-+  updatePrice();
-+});
- 
-EOF
-)
+document.addEventListener('DOMContentLoaded', () => {
+  const form = document.getElementById('config-form');
+  const priceDisplay = document.getElementById('price-display');
+
+  const basePrices = {
+    shell: 15000,
+    turnkey: 25000
+  };
+
+  const dispositionMultiplier = {
+    '1kk': 1,
+    '2kk': 1.2,
+    '3kk': 1.4,
+    '4kk': 1.6
+  };
+
+  function formatPrice(value) {
+    return value.toLocaleString('cs-CZ');
+  }
+
+  function updatePrice() {
+    const area = parseFloat(form.area.value);
+    const delivery = form.delivery.value;
+    const disposition = form.disposition.value;
+
+    if (!isNaN(area)) {
+      const price = area * basePrices[delivery] * (dispositionMultiplier[disposition] || 1);
+      priceDisplay.textContent = `Cena: ${formatPrice(price)} Kč`;
+    } else {
+      priceDisplay.textContent = 'Cena: -- Kč (bude vypočtena)';
+    }
+  }
+
+  form.addEventListener('input', updatePrice);
+
+  form.addEventListener('submit', async (e) => {
+    e.preventDefault();
+    const area = parseFloat(form.area.value);
+    const data = {
+      disposition: form.disposition.value,
+      area: area,
+      delivery: form.delivery.value,
+    };
+
+    try {
+      const res = await fetch('/submit', {
+        method: 'POST',
+        headers: { 'Content-Type': 'application/json' },
+        body: JSON.stringify(data)
+      });
+      if (res.ok) {
+        alert('Poptávka byla úspěšně odeslána.');
+      } else {
+        alert('Odeslání se nezdařilo.');
+      }
+    } catch (error) {
+      console.error(error);
+      alert('Chyba při odesílání formuláře.');
+    }
+  });
+
+  updatePrice();
+});
 
EOF
)
