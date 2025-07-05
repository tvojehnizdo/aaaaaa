 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/README.md b/README.md
index 34ab6e1e06bb9210f6038292e247d2b69750f23f..de5fe6d8b57d3e034cfcc94389335483f5894ac2 100644
--- a/README.md
+++ b/README.md
@@ -1,62 +1,27 @@
- (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
-diff --git a/README.md b/README.md
-index 735846533f9a36929f265a0ea913aa19a6fa65bb..baa58e7928e62f144948cac80875344027f8727a 100644
---- a/README.md
-+++ b/README.md
-@@ -1,27 +1,26 @@
-- (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
--diff --git a//dev/null b/README.md
--index 0000000000000000000000000000000000000000..fecccf65d7495b3f5d5e6feceb37c76fe8aec305 100644
----- a//dev/null
--+++ b/README.md
--@@ -0,0 +1,18 @@
--+# Konfigurátor domu – Tvoje Hnízdo
--+
--+**Konfigurátor domu – Tvoje Hnízdo** je prototyp webové aplikace umožňující navrhnout vlastní rodinný dům přímo v prohlížeči. Projekt slouží jako ukázka základních funkcí konfigurátoru a do budoucna by měl nabídnout kompletní proces od výběru dispozic až po získání cenové kalkulace.
--+
--+## Očekávané funkce
--+
--+- **Výběr dispozic** – možnost upravovat velikost a uspořádání místností dle individuálních potřeb.
--+- **Vizualizace v reálném čase** – změny dispozic se ihned projeví v náhledu domu.
--+- **Automatický výpočet ceny** – konfigurátor po každé úpravě přepočítá orientační cenu stavby.
--+- **Export a sdílení** – výsledný návrh bude možné uložit do PDF nebo sdílet pomocí odkazu.
--+
--+## Jak spustit
--+
--+1. Naklonujte nebo stáhněte tento repozitář.
--+2. Otevřete soubor `Konfigurátor.html` (případně `konfigurator_tvojehnizdo.html`) v libovolném webovém prohlížeči.
--+3. Pro hostování na vlastním webu nahrajte obsah repozitáře na webový server a zpřístupněte HTML soubor jako domovskou stránku.
--+
--+> Projekt je ve fázi prototypu a neobsahuje kompletní funkcionalitu. Soubor `Konfigurátor.html` je generovaný náhled a slouží pouze k demonstraci.
-- 
--EOF
--)
-+# Konfigurátor domu – Tvoje Hnízdo
-+
-+Tento projekt je jednoduchý prototyp webové aplikace pro návrh rodinného domu. Umožňuje zvolit základní dispozici, výměru a způsob dodání stavby. Cena se přepočítává automaticky podle zadaných parametrů.
-+
-+## Spuštění
-+
-+1. Naklonujte repozitář.
-+2. Otevřete `index.html` v libovolném moderním prohlížeči.
-+
-+## Testy
-+
-+Pro projekt je použit testovací framework [Jest](https://jestjs.io/).
-+
-+### Instalace závislostí
-+
-+```bash
-+npm install
-+```
-+
-+### Spuštění testů
-+
-+```bash
-+npm test
-+```
-+
-+Testy ověřují správnost výpočtu ceny pro různé dispozice a typy dodání.
- 
-EOF
-)
+# Konfigurátor domu – Tvoje Hnízdo
+
+Tento projekt je jednoduchý prototyp webové aplikace pro návrh rodinného domu. Umožňuje zvolit základní dispozici, výměru a způsob dodání stavby. Cena se přepočítává automaticky podle zadaných parametrů.
+
+## Spuštění
+
+1. Naklonujte repozitář.
+2. Spusťte následující příkazy:
+
+```bash
+npm install
+npm start
+```
+
+3. Otevřete v prohlížeči `http://localhost:3000/index.html`.
+
+## Testy
+
+Pro projekt je použit testovací framework [Jest](https://jestjs.io/).
+
+### Spuštění testů
+
+```bash
+npm test
+```
+
+Testy ověřují správnost výpočtu ceny pro různé dispozice a typy dodání.
 
EOF
)
