import React, { Fragment } from "react";

const ImageUpload = ({ design, setDesign, designAdded, setDesignAdded }) => {
  let widget = window.cloudinary.createUploadWidget(
    {
      cloudName: "ddgiykavr",
      uploadPreset: "logoFromWidget",
      sources: ["local", "url"],
      showAdvancedOptions: false,
      cropping: false,
      multiple: false,
      defaultSource: "local"
    },
    (error, result) => {
      if (result.event === "success") {
        const data = result.info;

        setDesign({
          ...design,
          design_name: data.original_filename,
          design_url: data.url,
          thumbnail_url: data.thumbnail_url
        });
        setDesignAdded(designAdded + 1);
      }
    }
  );

  const showWidget = function() {
    widget.open();
  };

  return (
    <Fragment>
      <button className="designBtn btn btn-primary" onClick={showWidget}>
        Upload Custom Art
      </button>
    </Fragment>
  );
};
export default ImageUpload;
