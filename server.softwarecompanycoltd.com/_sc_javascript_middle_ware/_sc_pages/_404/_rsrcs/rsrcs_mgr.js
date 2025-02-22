scInitApi();
async function scInitApi() {
    const _css_rsrcs = await scDataFetcherApi();
    console.log("_css_rsrcs");
    const _manifest = await scDataFetcherApi();
    console.log("_manifest");
    const _image_rsrcs = await scDataFetcherApi();
    console.log("_image_rsrcs");
    const _target_links = await scDataFetcherApi();
    console.log("_target_links");
    const _target_scripts = await scDataFetcherApi();
    conslole.log("_target_scripts");
}
async function scDataFetcherApi() {
    const res = await fetch("./rsrcs.json");
    const data = await res.json();

    return data;
}