import React from 'react';
import ImageComponent from '../ImageComponent';
import { StyledProfileWrapper } from './Style';
import Loader from '../../../components/Loader';

export function UploadProfile({ width, height, url, uploadImage, loading }) {
  return (
    <StyledProfileWrapper width={width} height={height}>
      <div className="loader-wrapper flex-centered" hidden={!loading}>
        <Loader width="24px" height="24px" hidden={!loading} />
      </div>
      {url ? (
        <div className="image-wrapper">
          <ImageComponent
            src={url}
            borderRadius="4px"
            width="100%"
            height="100%"
          />
        </div>
      ) : (
        <label htmlFor="workspaceImage">Browse</label>
      )}

      <div className="change-image" hidden={!url}>
        <label htmlFor="workspaceImage">Change</label>
      </div>
      <input
        value=""
        type="file"
        accept="image/*"
        id="workspaceImage"
        name="workspaceImage"
        style={{ display: 'none' }}
        onChange={e => {
          uploadImage(e.target.files[0]);
        }}
      />
    </StyledProfileWrapper>
  );
}
