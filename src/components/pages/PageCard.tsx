import './pagecard.css';
import { Card, CardActionArea, CardContent, Typography, Box } from '@mui/material';
import Image from 'next/image';

interface PageCardProps {
  name: string;
  url: string;
  description: string;
  image?: string;
}

export const PageCard = ({ name, url, description, image }: PageCardProps) => {
  // Si hay imagen local, úsala; si no, usa favicon
  const previewSrc = image ? image : `https://www.google.com/s2/favicons?domain=${new URL(url).hostname}`;
  const isFavicon = !image;
  return (
    <Card sx={{
      borderRadius: 4,
      boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
      background: 'rgba(32,32,64,0.45)',
      border: '1px solid rgba(255,255,255,0.08)',
      transition: 'box-shadow 0.2s',
      '&:hover': { boxShadow: '0 8px 32px #00fff7' },
    }}>
      <CardActionArea href={url} target="_blank" rel="noopener noreferrer">
        <Box
          className="pagecard-imgbox"
          sx={{
            position: 'relative',
            height: 180,
            borderRadius: 4,
            overflow: 'hidden',
            mb: 2,
            background: isFavicon ? '#222' : 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'transform 0.2s',
            '&:hover img': {
              transform: 'scale(1.20)',
            },
          }}
        >
          <Image
            src={previewSrc}
            alt={`Vista previa de ${name}`}
            fill={!isFavicon}
            width={isFavicon ? 64 : undefined}
            height={isFavicon ? 64 : undefined}
            style={isFavicon ? { objectFit: 'contain', borderRadius: 8, transition: 'transform 0.2s' } : { objectFit: 'cover', transition: 'transform 0.2s' }}
            sizes={isFavicon ? undefined : '(max-width: 600px) 100vw, 600px'}
            priority
          />
          {/* Enlace en la esquina inferior derecha de la imagen */}
        </Box>
        <CardContent sx={{ pb: 1 }}>
          <Typography variant="h6" fontWeight={700} gutterBottom>{name}</Typography>
          <p
            rel="noopener noreferrer"
            title={url}
            className="pagecard-link"
          >
            {url.replace(/^https?:\/\//, '')}
          </p>
          <Typography variant="body2" color="text.secondary">{description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
