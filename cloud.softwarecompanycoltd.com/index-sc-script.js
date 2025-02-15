import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://your-project-id.supabase.co";
const SUPABASE_ANON_KEY = "your-anon-key";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
const BUCKET_NAME = "your-bucket-name";

/**
 * Uploads a file to Supabase Storage
 * @param {File} file - The file to upload
 */
async function uploadFile(file) {
    const { data, error } = await supabase.storage.from(BUCKET_NAME).upload(`uploads/${file.name}`, file);

    if (error) {
        console.error("Upload error:", error.message);
        return null;
    }

    console.log("File uploaded:", data);
    return data;
}

/**
 * Lists all files in the storage bucket
 */
async function listFiles() {
    const { data, error } = await supabase.storage.from(BUCKET_NAME).list("uploads");

    if (error) {
        console.error("Error listing files:", error.message);
        return [];
    }

    console.log("Files in storage:", data);
    return data;
}

/**
 * Gets the public URL of a file
 * @param {string} fileName - Name of the file
 */
async function getFileURL(fileName) {
    const { data } = supabase.storage.from(BUCKET_NAME).getPublicUrl(`uploads/${fileName}`);
    console.log("Public URL:", data.publicUrl);
    return data.publicUrl;
}

/**
 * Downloads a file from storage
 * @param {string} fileName - The name of the file to download
 */
async function downloadFile(fileName) {
    const { data, error } = await supabase.storage.from(BUCKET_NAME).download(`uploads/${fileName}`);

    if (error) {
        console.error("Download error:", error.message);
        return null;
    }

    console.log("File downloaded:", data);
    return data;
}

// Example usage:
// Upload a file (for browsers, use an <input type="file">)
const fileInput = document.querySelector("#fileInput");
fileInput.addEventListener("change", async (event) => {
    const file = event.target.files[0];
    if (file) {
        await uploadFile(file);
        await listFiles();
    }
});
