import React, { useState, useEffect, ChangeEvent } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SortIcon from '@mui/icons-material/Sort';
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FilterOption } from "../../types/interfaces";

const styles = {
  root: {
    maxWidth: 345,
  },
  media: { height: 300 },
  formControl: {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
};

interface FilterMoviesCardProps {
  titleFilter: string; 
  genreFilter: string; 
}

const FilterMoviesCard: React.FC<FilterMoviesCardProps> = ({ titleFilter, genreFilter }) => {
  const [genres, setGenres] = useState([{ id: '0', name: "All" }]);
  const [title, setTitle] = useState(titleFilter);
  const [genre, setGenre] = useState(genreFilter);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_TMDB_KEY}`
    )
      .then(res => res.json())
      .then(json => {
        return json.genres;
      })
      .then(apiGenres => {
        setGenres([{ id: '0', name: "All" }, ...apiGenres]);
      })
      .catch(error => console.error('Failed to fetch genres:', error));
  }, []);

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value); 
  }

  const handleGenreChange = (e: SelectChangeEvent<string>) => {
    setGenre(e.target.value); 
  };

  return (
    <>
      <Card sx={styles.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h1">
            <FilterAltIcon fontSize="large" />
            Filter the movies.
          </Typography>
          <TextField
      sx={styles.formControl}
      id="filled-search"
      label="Search field"
      type="search"
      value={titleFilter}
      variant="filled"
      onChange={handleTextChange}
    />
          <FormControl sx={styles.formControl}>
            <InputLabel id="genre-label">Genre</InputLabel>
            <Select
              labelId="genre-label"
              id="genre-select"
              value={genre}
              onChange={handleGenreChange}
            >
              {genres.map((genre) => (
                <MenuItem key={genre.id} value={genre.id}>
                  {genre.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </CardContent>
      </Card>
      <Card sx={styles.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h1">
            <SortIcon fontSize="large" />
            Sort the movies.
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default FilterMoviesCard;
