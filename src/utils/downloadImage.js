export const downloadImage = async (data) => {
      try {
            const BASE_URL = "http://localhost:5000";
            const url = BASE_URL + data.imageUrl;

            // fetch the image
            const response = await fetch(url);
            console.log(response)
            if (!response.ok) throw new Error("Failed to fetch image");

            // convert to blob
            const blob = await response.blob();

            // create temporary URL
            const blobUrl = window.URL.createObjectURL(blob);

            // create anchor
            const link = document.createElement("a");
            link.href = blobUrl;

            // file name (with extension)
            link.download = `${data.title}.jpg`;

            document.body.appendChild(link);

            // trigger download
            link.click();

            // cleanup
            link.remove();
            //remove the temparory fileurl
            window.URL.revokeObjectURL(blobUrl);

      } catch (error) {
            console.error("Download failed:", error);
      }
};