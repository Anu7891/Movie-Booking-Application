import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
// import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import moviesData from '../common/moviesData';
import moment from 'moment';

export default function Left() {
    return (
        <ImageList>
            <ImageListItem key="Subheader" cols={4}>
            </ImageListItem>
            {moviesData.map((item) => (
                <ImageListItem className='movie-item' key={item.id}>
                    <img style={{ height: '350px' }}
                        src={item.poster_url}
                        alt={item.title}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item.title}
                        subtitle={<span>Release Date: {moment(item.release_date).format('dddd MMMM Do YYYY')}</span>}
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