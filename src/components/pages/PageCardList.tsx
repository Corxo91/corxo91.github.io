import { Grid } from '@mui/material';
import { PageCard } from './PageCard';
import pages from '../../constants/pages.json';

export const PageCardList = () => (
  <Grid
    container
    spacing={4}
    justifyContent="center"
    sx={{ width: '100%', margin: 0 }}
  >
    {pages.map((page) => (
      <Grid
        item
        key={page.url}
        xs={12}
        sm={6}
        md={4}
        lg={3}
        xl={2}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <PageCard {...page} />
      </Grid>
    ))}
  </Grid>
);
