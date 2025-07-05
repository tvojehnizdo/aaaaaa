 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/README.md b/README.md
index 3d9af1e46415aca629ae36e351034480bd008917..3a43198f9e6f987e63c3308c69dbf753be2b0384 100644
--- a/README.md
+++ b/README.md
@@ -1,44 +1,28 @@
- (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
-diff --git a/README.md b/README.md
-index 735846533f9a36929f265a0ea913aa19a6fa65bb..03c54e2ecc2c2faff970eaa30b93019b837d3a1f 100644
---- a/README.md
-+++ b/README.md
-@@ -3,25 +3,32 @@ diff --git a//dev/null b/README.md
- index 0000000000000000000000000000000000000000..fecccf65d7495b3f5d5e6feceb37c76fe8aec305 100644
- --- a//dev/null
- +++ b/README.md
- @@ -0,0 +1,18 @@
- +# Konfigurátor domu – Tvoje Hnízdo
- +
- +**Konfigurátor domu – Tvoje Hnízdo** je prototyp webové aplikace umožňující navrhnout vlastní rodinný dům přímo v prohlížeči. Projekt slouží jako ukázka základních funkcí konfigurátoru a do budoucna by měl nabídnout kompletní proces od výběru dispozic až po získání cenové kalkulace.
- +
- +## Očekávané funkce
- +
- +- **Výběr dispozic** – možnost upravovat velikost a uspořádání místností dle individuálních potřeb.
- +- **Vizualizace v reálném čase** – změny dispozic se ihned projeví v náhledu domu.
- +- **Automatický výpočet ceny** – konfigurátor po každé úpravě přepočítá orientační cenu stavby.
- +- **Export a sdílení** – výsledný návrh bude možné uložit do PDF nebo sdílet pomocí odkazu.
- +
- +## Jak spustit
- +
- +1. Naklonujte nebo stáhněte tento repozitář.
- +2. Otevřete soubor `Konfigurátor.html` (případně `konfigurator_tvojehnizdo.html`) v libovolném webovém prohlížeči.
- +3. Pro hostování na vlastním webu nahrajte obsah repozitáře na webový server a zpřístupněte HTML soubor jako domovskou stránku.
- +
- +> Projekt je ve fázi prototypu a neobsahuje kompletní funkcionalitu. Soubor `Konfigurátor.html` je generovaný náhled a slouží pouze k demonstraci.
-  
- EOF
- )
-+
-+## Running the server
-+
-+1. Run `npm install` to install dependencies.
-+2. Start the server with `npm start`.
-+3. POST requests can be sent to `http://localhost:3000/submit`.
-+
- 
-EOF
-)
+# Konfigurátor domu – Tvoje Hnízdo
+
+**Konfigurátor domu – Tvoje Hnízdo** je prototyp webové aplikace umožňující navrhnout vlastní rodinný dům přímo v prohlížeči. Projekt slouží jako ukázka základních funkcí konfigurátoru a do budoucna by měl nabídnout kompletní proces od výběru dispozic až po získání cenové kalkulace.
+
+## Očekávané funkce
+
+- **Výběr dispozic** – možnost upravovat velikost a uspořádání místností dle individuálních potřeb.
+- **Vizualizace v reálném čase** – změny dispozic se ihned projeví v náhledu domu.
+- **Automatický výpočet ceny** – konfigurátor po každé úpravě přepočítá orientační cenu stavby.
+- **Export a sdílení** – výsledný návrh bude možné uložit do PDF nebo sdílet pomocí odkazu.
+
+## Jak spustit
+
+1. Naklonujte nebo stáhněte tento repozitář.
+2. Otevřete soubor `Konfigurátor.html` (případně `konfigurator_tvojehnizdo.html`) v libovolném webovém prohlížeči.
+3. Pro hostování na vlastním webu nahrajte obsah repozitáře na webový server a zpřístupněte HTML soubor jako domovskou stránku.
+
+> Projekt je ve fázi prototypu a neobsahuje kompletní funkcionalitu. Soubor `Konfigurátor.html` je generovaný náhled a slouží pouze k demonstraci.
+
+## Running the server
+
+1. Run `npm install` to install dependencies.
+2. Start the server with `npm start`.
+3. POST requests can be sent to `http://localhost:3000/submit`.
+
 ---
 
 Tento README může být dále rozšiřován podle potřeby – například o instrukce pro vývojáře nebo detailnější popis jednotlivých částí aplikace.
 
EOF
)
