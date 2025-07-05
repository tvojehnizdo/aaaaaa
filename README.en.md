 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a//dev/null b/README.en.md
index 0000000000000000000000000000000000000000..bf00d83a8a5a0669c557a4b800cf124311a69f6d 100644
--- a//dev/null
+++ b/README.en.md
@@ -0,0 +1,18 @@
+# House Configurator – Your Nest
+
+**House Configurator – Your Nest** is a prototype web application that allows you to design your own family house directly in the browser. The project serves as a demonstration of the configurator's basic features and will eventually offer the complete process from choosing layouts to obtaining a price estimate.
+
+## Expected Features
+
+- **Layout selection** – the ability to adjust the size and arrangement of rooms to your individual needs.
+- **Real-time visualization** – layout changes are immediately displayed in the house preview.
+- **Automatic price calculation** – after every change the configurator recalculates an indicative building cost.
+- **Export and sharing** – the final design can be saved as a PDF or shared via a link.
+
+## How to run
+
+1. Clone or download this repository.
+2. Open the `Konfigurátor.html` file (or `konfigurator_tvojehnizdo.html`) in any web browser.
+3. For hosting on your own website, upload the repository contents to a web server and make the HTML file available as the home page.
+
+> The project is in a prototype stage and does not contain complete functionality. The `Konfigurátor.html` file is a generated preview and serves only for demonstration.
 
EOF
)
