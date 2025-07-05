 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a//dev/null b/tests/priceCalculator.test.js
index 0000000000000000000000000000000000000000..b75541ea7050fc4fd6e1702417fe5d8cf66e0588 100644
--- a//dev/null
+++ b/tests/priceCalculator.test.js
@@ -0,0 +1,15 @@
+import { calculatePrice } from '../src/priceCalculator.js';
+
+describe('calculatePrice', () => {
+  test('1kk shell', () => {
+    expect(calculatePrice('1kk', 50, 'shell')).toBe(1500000);
+  });
+
+  test('3kk turnkey', () => {
+    expect(calculatePrice('3kk', 80, 'turnkey')).toBe(2496000);
+  });
+
+  test('unknown disposition returns 0', () => {
+    expect(calculatePrice('5kk', 80, 'shell')).toBe(0);
+  });
+});
 
EOF
)
