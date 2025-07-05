 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/src/priceCalculator.js b/src/priceCalculator.js
index bbb334987a0a8e1d0485da72eb558c73e66f496a..ecde77d0c47d38bee496f86a25ac63710e8cb7c2 100644
--- a/src/priceCalculator.js
+++ b/src/priceCalculator.js
@@ -1,26 +1,17 @@
- (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
-diff --git a//dev/null b/src/priceCalculator.js
-index 0000000000000000000000000000000000000000..ecde77d0c47d38bee496f86a25ac63710e8cb7c2 100644
---- a//dev/null
-+++ b/src/priceCalculator.js
-@@ -0,0 +1,17 @@
-+export const basePrices = {
-+  '1kk': 30000,
-+  '2kk': 28000,
-+  '3kk': 26000,
-+  '4kk': 24000,
-+};
-+
-+export const deliveryMultiplier = {
-+  shell: 1,
-+  turnkey: 1.2,
-+};
-+
-+export function calculatePrice(disposition, area, delivery) {
-+  const base = basePrices[disposition] || 0;
-+  const multiplier = deliveryMultiplier[delivery] || 1;
-+  return Math.round(base * area * multiplier);
-+}
- 
-EOF
-)
+export const basePrices = {
+  '1kk': 30000,
+  '2kk': 28000,
+  '3kk': 26000,
+  '4kk': 24000,
+};
+
+export const deliveryMultiplier = {
+  shell: 1,
+  turnkey: 1.2,
+};
+
+export function calculatePrice(disposition, area, delivery) {
+  const base = basePrices[disposition] || 0;
+  const multiplier = deliveryMultiplier[delivery] || 1;
+  return Math.round(base * area * multiplier);
+}
 
EOF
)
