<script lang="ts">
  import { site } from '$lib/config/site'
  import { footer as footerConfig } from '$lib/config/general'
  let className: string | undefined = undefined
  export { className as class }
  export let sticky: boolean = false
  export let rounded: boolean = false
</script>

<footer
  id="footer"
  class="footer footer-center bg-base-300 text-base-content shadow-inner p-8 {rounded
    ? 'rounded-box'
    : 'md:rounded-box'} {sticky ? 'sticky bottom-0 z-0 md:static' : ''} {className ?? ''}">
  <div class="prose">
    <p>
      {#if footerConfig.nav}
        {#each footerConfig.nav as { text, link }, i}
          <a href={link} rel="noopener noreferrer external" target="_blank">{text}</a>
          {#if i + 1 < footerConfig.nav.length}
            <span class="mr-1">·</span>
          {/if}
        {/each}
        <br />
      {/if}
      Powered by
      <a
        rel="noopener noreferrer external"
        target="_blank"
        class="tooltip tooltip-secondary hover:text-secondary"
        data-tip="🌸 [δ] - Based on MDsveX & SvelteKit 🌸 Urara-Project by kwaa 藍+85CD on GH"
        href="https://en.wikipedia.org/wiki/WTFPL">
        MW
      </a>
      <br />
      <a
        rel="noopener noreferrer external"
        target="_blank"
        class="tooltip tooltip-secondary hover:text-secondary"
        data-tip="DRINK WATER"
        href="https://www.wedrinkwater.com">
        Do it!
      </a>
      <br />
      $ {footerConfig.since && footerConfig.since !== new Date().toJSON().substring(0, 4)
        ? `${footerConfig.since} - ${new Date().toJSON().substring(0, 4)}`
        : new Date().toJSON().substring(0, 4)}
      {site.author.name} $

      {#if footerConfig.html}
        <br />
        {@html footerConfig.html}
      {/if}
    </p>

    <h1>Privacy Policy - Datenschutzerklärung</h1>
    <h2>Allgemeiner Hinweis und Pflichtinformationen</h2>
    <h3>Benennung der verantwortlichen Stelle</h3>
    <p>
      Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website liegt bei Cloudflare. Es handelt sich um eine
      freie Website. Es kann jederzeit Widerspruch gegen geteilte Inhalte eingelegt werden (
      <a href="mailto:indyaanajones@t-online.de">indyaanajones@t-online.de</a>
      ).
    </p>
    <p>
      Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von
      personenbezogenen Daten (z.B. Namen, Kontaktdaten o. Ä.).
    </p>
    <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
    <p>
      Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der Datenverarbeitung möglich. Ein Widerruf Ihrer bereits
      erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail (
      <a href="mailto:indyaanajones@t-online.de">indyaanajones@t-online.de</a>
      ). Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
    </p>
    <h3>Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde</h3>
    <p>
      Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen Verstoßes ein Beschwerderecht bei der zuständigen
      Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher Fragen ist der
      Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz unseres Unternehmens befindet. Der folgende Link
      stellt eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten bereit: <a
        href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
        target="_blank">
        https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html
      </a>
      .
    </p>
    <h3>Recht auf Datenübertragbarkeit</h3>
    <p>
      Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert
      verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die Bereitstellung erfolgt in einem maschinenlesbaren Format.
      Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es
      technisch machbar ist.
    </p>
    <h3>Recht auf Auskunft, Berichtigung, Sperrung, Löschung</h3>
    <p>
      Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf unentgeltliche Auskunft über Ihre
      gespeicherten personenbezogenen Daten, Herkunft der Daten, deren Empfänger und den Zweck der Datenverarbeitung und ggf.
      ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Diesbezüglich und auch zu weiteren Fragen zum Thema
      personenbezogene Daten können Sie sich jederzeit über die im Impressum aufgeführten Kontaktmöglichkeiten an uns wenden.
    </p>
    <h3>SSL- bzw. TLS-Verschlüsselung</h3>
    <p>
      Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, die Sie an uns als Seitenbetreiber senden,
      nutzt unsere Website eine SSL-bzw. TLS-Verschlüsselung. Damit sind Daten, die Sie über diese Website übermitteln, für
      Dritte nicht mitlesbar. Sie erkennen eine verschlüsselte Verbindung an der „https://“ Adresszeile Ihres Browsers und am
      Schloss-Symbol in der Browserzeile.
    </p>

    <h2>Cookies</h2>
    <p>
      Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies
      helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
    </p>
    <p>
      Einige Cookies sind “Session-Cookies.” Solche Cookies werden nach Ende Ihrer Browser-Sitzung von selbst gelöscht. Hingegen
      bleiben andere Cookies auf Ihrem Endgerät bestehen, bis Sie diese selbst löschen. Solche Cookies helfen uns, Sie bei
      Rückkehr auf unserer Website wiederzuerkennen.
    </p>
    <p>
      Mit einem modernen Webbrowser können Sie das Setzen von Cookies überwachen, einschränken oder unterbinden. Viele
      Webbrowser lassen sich so konfigurieren, dass Cookies mit dem Schließen des Programms von selbst gelöscht werden. Die
      Deaktivierung von Cookies kann eine eingeschränkte Funktionalität unserer Website zur Folge haben.
    </p>
    <p>
      Das Setzen von Cookies, die zur Ausübung elektronischer Kommunikationsvorgänge oder der Bereitstellung bestimmter, von
      Ihnen erwünschter Funktionen (z.B. Warenkorb) notwendig sind, erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als
      Betreiber dieser Website haben wir ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien
      und reibungslosen Bereitstellung unserer Dienste. Sofern die Setzung anderer Cookies (z.B. für Analyse-Funktionen)
      erfolgt, werden diese in dieser Datenschutzerklärung separat behandelt.
    </p>

    <h2>Cloudflare CDN</h2>
    <h3>Art und Umfang der Verarbeitung</h3>
    <p>
      Wir verwenden zur ordnungsgemäßen Bereitstellung der Inhalte unserer Website Cloudflare CDN. Cloudflare CDN ist ein Dienst
      der Cloudflare, Inc., welcher auf unserer Website als Content Delivery Network (CDN) fungiert.
    </p>
    <p>
      Ein CDN trägt dazu bei, Inhalte unseres Onlineangebotes, insbesondere Dateien wie Grafiken oder Skripte, mit Hilfe
      regional oder international verteilter Server schneller bereitzustellen. Wenn Sie auf diese Inhalte zugreifen, stellen Sie
      eine Verbindung zu Servern der Cloudflare, Inc., her, wobei Ihre IP-Adresse und ggf. Browserdaten wie Ihr User-Agent
      übermittelt werden. Diese Daten werden ausschließlich zu den oben genannten Zwecken und zur Aufrechterhaltung der
      Sicherheit und Funktionalität von Cloudflare CDN verarbeitet.
    </p>
    <h3>Zweck und Rechtsgrundlage</h3>
    <p>
      Die Nutzung des Content Delivery Networks erfolgt auf Grundlage unserer berechtigten Interessen, d.h. Interesse an einer
      sicheren und effizienten Bereitstellung sowie der Optimierung unseres Onlineangebotes gemäß Art. 6 Abs. 1 lit. f. DSGVO.
    </p>
    <p>
      Wir beabsichtigen personenbezogenen Daten an Drittländer außerhalb des Europäischen Wirtschaftsraums, insbesondere die
      USA, zu übermitteln. In Fällen, in denen kein Angemessenheitsbeschluss der Europäischen Kommission existiert (z.B. in den
      USA) haben wir mit den Empfängern der Daten anderweitige geeignete Garantien im Sinne der Art. 44 ff. DSGVO vereinbart.
      Dies sind – sofern nicht anders angegeben – Standardvertragsklauseln der EU-Kommission gemäß Durchführungsbeschluss (EU)
      2021/914 vom 4. Juni 2021. Eine Kopie dieser Standardvertragsklauseln können Sie unter <a
        href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32021D0914&from=DE">
        https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32021D0914&from=DE
      </a>
      einsehen.
    </p>
    <h3>Speicherdauer</h3>
    <p>
      Die konkrete Speicherdauer der verarbeiteten Daten ist nicht durch uns beeinflussbar, sondern wird von Cloudflare, Inc.
      bestimmt. Weitere Hinweise finden Sie in der Datenschutzerklärung für Cloudflare CDN: <a
        href="https://www.cloudflare.com/privacypolicy/">
        https://www.cloudflare.com/privacypolicy/
      </a>
      .
    </p>

    <p>
      Different Language -> <a href="https://www.deepl.com">Translator</a>
    </p>
  </div>
</footer>
