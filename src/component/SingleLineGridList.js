import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
// import InfoIcon from '@mui/icons-material/Info';
import moviesData from '../common/moviesData';

export default function SingleLineGridList() {
  return (
    <ImageList sx={{
      height: 250, gridAutoFlow: 'column', gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))",
      gridAutoColumns: "minmax(250px,1fr)"
    }}>
      <ImageListItem key="Subheader" cols={2}>
      </ImageListItem>
      {moviesData.map((item) => (
        <ImageListItem key={item.id}>
          <img
            src={item.poster_url}
            alt={item.title}
            loading="lazy"
            style={{ height: "150px" }}
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                {/* <InfoIcon /> */}
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}