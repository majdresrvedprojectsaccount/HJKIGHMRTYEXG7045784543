const scCSSLINKELEMENT = document.createElement('link');
scCSSLINKELEMENT.rel = 'stylesheet';
scCSSLINKELEMENT.type = 'text/css';
scCSSLINKELEMENT.href = './sc_css_components/user_runtime_interface_ui_min.css';
scCSSLINKELEMENT.crossorigin = 'anonymous';
document.head.appendChild(scCSSLINKELEMENT);

const scManifestLinker = document.createElement('link');
scManifestLinker.rel = 'manifest';
scManifestLinker.href = './manifest.json';
scManifestLinker.crossorigin = 'anonymous';
document.head.appendChild(scManifestLinker);
    