function sccalloauthserver(){
  const applescscriptcontentlinking = document.createElement('script');
  applescscriptcontentlinking.src = '../../auth.softwarecompanycoltd.com/authproviders/apple/client.js';
  applescscriptcontentlinking.type = 'module';
  document.head.appendChild(applescscriptcontentlinking);

  const gitscscriptcontentlinking = document.createElement('script');
  gitscscriptcontentlinking.src = '../../auth.softwarecompanycoltd.com/authproviders/github/client.js';
  gitscscriptcontentlinking.type = 'module';
  document.head.appendChild(gitscscriptcontentlinking);

  const msscscriptcontentlinking = document.createElement('script');
  msscscriptcontentlinking.src = '../../auth.softwarecompanycoltd.com/authproviders/microsoft/client.js';
  msscscriptcontentlinking.type = 'module';
  document.head.appendChild(msscscriptcontentlinking);

  const ggtscscriptcontentlinking = document.createElement('script');
  ggtscscriptcontentlinking.src = '../../auth.softwarecompanycoltd.com/authproviders/google/client.js';
  ggtscscriptcontentlinking.type = 'module';
  document.head.appendChild(ggtscscriptcontentlinking);
}
document.addEventListener("DOMContentLoaded",sccalloauthserver());